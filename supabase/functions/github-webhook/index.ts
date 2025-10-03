import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey, X-Hub-Signature-256',
};

interface GitHubIssue {
  action: string;
  issue: {
    number: number;
    title: string;
    body: string;
    html_url: string;
    labels: Array<{ name: string }>;
    user: {
      login: string;
    };
    state: string;
    assignee?: {
      login: string;
    };
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const payload: GitHubIssue = await req.json();
    console.log('Received webhook:', payload.action);

    if (payload.action === 'opened' || payload.action === 'edited' || payload.action === 'labeled' || payload.action === 'unlabeled') {
      const issue = payload.issue;
      const labels = issue.labels.map(l => l.name);

      const difficulty = labels.find(l =>
        ['good-first-issue', 'beginner', 'intermediate', 'advanced'].includes(l)
      ) || 'beginner';

      const category = labels.find(l =>
        ['utility', 'documentation', 'testing', 'infrastructure', 'feature'].includes(l)
      ) || 'utility';

      const estimatedTime = extractEstimatedTime(issue.body || '');

      const taskData = {
        title: issue.title,
        description: issue.body || '',
        difficulty,
        category,
        status: 'open',
        github_issue_url: issue.html_url,
        estimated_time: estimatedTime || '2-3 hours',
        labels: labels,
        claimed_by: issue.assignee?.login || null,
      };

      const { data: existing } = await supabase
        .from('tasks')
        .select('id')
        .eq('github_issue_url', issue.html_url)
        .maybeSingle();

      if (existing) {
        await supabase
          .from('tasks')
          .update(taskData)
          .eq('id', existing.id);

        console.log('Updated existing task');
      } else {
        await supabase
          .from('tasks')
          .insert(taskData);

        console.log('Created new task');
      }
    } else if (payload.action === 'closed') {
      const { data } = await supabase
        .from('tasks')
        .update({ status: 'completed' })
        .eq('github_issue_url', payload.issue.html_url);

      console.log('Closed task');
    } else if (payload.action === 'assigned') {
      const { data } = await supabase
        .from('tasks')
        .update({
          claimed_by: payload.issue.assignee?.login || null,
          status: 'in-progress'
        })
        .eq('github_issue_url', payload.issue.html_url);

      console.log('Task assigned');
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});

function extractEstimatedTime(body: string): string | null {
  const match = body.match(/Estimated Time[:\s]+([^\n]+)/i);
  return match ? match[1].trim() : null;
}
