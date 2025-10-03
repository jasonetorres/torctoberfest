/*
  # Create Tasks Table for TORC Toolbelt

  1. New Tables
    - `tasks`
      - `id` (uuid, primary key) - Unique identifier for each task
      - `title` (text) - Task title
      - `description` (text) - Detailed task description
      - `difficulty` (text) - Task difficulty level (good-first-issue, beginner, intermediate, advanced)
      - `category` (text) - Task category (utility, documentation, testing, infrastructure)
      - `status` (text) - Task status (open, in-progress, completed)
      - `github_issue_url` (text, optional) - Link to GitHub issue
      - `estimated_time` (text) - Estimated time to complete
      - `labels` (text array) - Array of labels/tags
      - `claimed_by` (text, optional) - GitHub username of person working on it
      - `created_at` (timestamptz) - When task was created
      - `updated_at` (timestamptz) - When task was last updated
      
  2. Security
    - Enable RLS on `tasks` table
    - Add policy for public read access (anyone can view tasks)
    - Add policy for authenticated users to claim tasks
    
  3. Indexes
    - Index on difficulty for filtering
    - Index on status for filtering
    - Index on category for filtering
*/

CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL DEFAULT 'beginner',
  category text NOT NULL DEFAULT 'utility',
  status text NOT NULL DEFAULT 'open',
  github_issue_url text,
  estimated_time text NOT NULL DEFAULT '1-2 hours',
  labels text[] DEFAULT ARRAY[]::text[],
  claimed_by text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view tasks"
  ON tasks
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can claim tasks"
  ON tasks
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_tasks_difficulty ON tasks(difficulty);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at DESC);
