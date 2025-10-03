# GitHub Webhook Setup Guide

This guide explains how to set up the GitHub webhook to automatically sync issues to your Supabase database.

## What This Does

When someone creates or updates an issue on GitHub using the task proposal template, the webhook automatically:
- Creates a new task in the Supabase database
- Updates existing tasks when issues are edited
- Marks tasks as completed when issues are closed
- Updates task assignments when issues are assigned

## Setup Instructions

### 1. Get Your Webhook URL

Your webhook endpoint is:
```
https://0ec90b57d6e95fcbda19832f.supabase.co/functions/v1/github-webhook
```

### 2. Configure GitHub Webhook

1. Go to your GitHub repository: `https://github.com/jasonetorres/torctoberfest`
2. Click **Settings** → **Webhooks** → **Add webhook**

3. Configure the webhook:
   - **Payload URL**: `https://0ec90b57d6e95fcbda19832f.supabase.co/functions/v1/github-webhook`
   - **Content type**: `application/json`
   - **Secret**: Leave empty (or add one for security)
   - **Which events**: Select "Let me select individual events"
     - ✅ Issues
     - ✅ Issue comments (optional)
   - **Active**: ✅ Checked

4. Click **Add webhook**

### 3. Test the Webhook

1. Create a new issue using the "Propose a Task" template
2. Fill out all required fields
3. Submit the issue
4. Check your landing page - the new task should appear automatically!

## How Tasks Are Created

The webhook looks for these labels to categorize tasks:

### Difficulty Levels
- `good-first-issue`
- `beginner`
- `intermediate`
- `advanced`

### Categories
- `utility`
- `documentation`
- `testing`
- `infrastructure`
- `feature`

**Important**: Make sure to add at least one difficulty label and one category label to each issue!

## Webhook Behavior

### Issue Opened
- Creates a new task in the database
- Extracts title, description, labels, and URL
- Sets status to "open"

### Issue Edited
- Updates the existing task with new information
- Keeps the same task ID

### Issue Closed
- Updates task status to "completed"
- Task remains in database for reference

### Issue Assigned
- Updates `claimed_by` field with assignee's GitHub username
- Changes status to "in-progress"

## Task Card Behavior

On your landing page, task cards will:
- **If task has GitHub issue URL**: Link directly to the existing issue
- **If no GitHub URL**: Pre-fill a new issue form with the task details

This means you can add tasks directly to the database (like the initial 12 tasks), and they'll prompt users to create the GitHub issue when clicked.

## Troubleshooting

### Webhook Not Firing
- Check GitHub webhook delivery history (Settings → Webhooks → Recent Deliveries)
- Verify the URL is correct
- Make sure "Active" is checked

### Tasks Not Appearing
- Check the Supabase Edge Function logs
- Verify labels include both difficulty and category
- Check that the issue body isn't empty

### Testing Locally
You can test the webhook locally by sending a POST request:
```bash
curl -X POST https://0ec90b57d6e95fcbda19832f.supabase.co/functions/v1/github-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "action": "opened",
    "issue": {
      "number": 1,
      "title": "Test Task",
      "body": "Test description",
      "html_url": "https://github.com/jasonetorres/torctoberfest/issues/1",
      "labels": [{"name": "beginner"}, {"name": "utility"}],
      "user": {"login": "testuser"},
      "state": "open"
    }
  }'
```

## Security Considerations

For production use, consider:
1. Adding a webhook secret to verify GitHub signatures
2. Rate limiting the endpoint
3. Adding authentication checks
4. Logging webhook activities

## Edge Function Code

The webhook Edge Function is located at:
```
supabase/functions/github-webhook/index.ts
```

You can modify it to customize how issues are processed and stored.
