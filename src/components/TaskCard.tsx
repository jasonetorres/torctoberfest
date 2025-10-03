import { Tag, ExternalLink } from 'lucide-react';
import type { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
}

const difficultyColors = {
  'good-first-issue': 'bg-green-100 text-green-800 border-green-200',
  'beginner': 'bg-blue-100 text-blue-800 border-blue-200',
  'intermediate': 'bg-orange-100 text-orange-800 border-orange-200',
  'advanced': 'bg-red-100 text-red-800 border-red-200',
};

const categoryColors = {
  'utility': 'bg-slate-100 text-slate-700',
  'documentation': 'bg-violet-100 text-violet-700',
  'testing': 'bg-emerald-100 text-emerald-700',
  'infrastructure': 'bg-amber-100 text-amber-700',
  'feature': 'bg-cyan-100 text-cyan-700',
};

export default function TaskCard({ task }: TaskCardProps) {
  const issueUrl = task.github_issue_url || `https://github.com/jasonetorres/torctoberfest/issues/new?title=${encodeURIComponent(task.title)}&body=${encodeURIComponent(task.description)}&labels=${task.labels.join(',')}`;

  return (
    <a
      href={issueUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 p-6 hover:border-blue-400 hover:scale-[1.02] cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {task.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {task.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[task.difficulty]}`}>
          {task.difficulty.replace('-', ' ')}
        </span>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[task.category]}`}>
          {task.category}
        </span>
      </div>

      {task.labels.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {task.labels.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs text-gray-600 bg-gray-50"
            >
              <Tag className="h-3 w-3" />
              {label}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-end pt-4 border-t border-gray-100">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
          {task.github_issue_url ? 'View Issue' : 'Create Issue'}
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>

      {task.claimed_by && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Claimed by <span className="font-medium text-gray-700">{task.claimed_by}</span>
          </span>
        </div>
      )}
    </a>
  );
}
