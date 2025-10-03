export type TaskDifficulty = 'good-first-issue' | 'beginner' | 'intermediate' | 'advanced';
export type TaskCategory = 'utility' | 'documentation' | 'testing' | 'infrastructure' | 'feature';
export type TaskStatus = 'open' | 'in-progress' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: TaskDifficulty;
  category: TaskCategory;
  status: TaskStatus;
  github_issue_url?: string;
  estimated_time: string;
  labels: string[];
  claimed_by?: string;
  created_at: string;
  updated_at: string;
}
