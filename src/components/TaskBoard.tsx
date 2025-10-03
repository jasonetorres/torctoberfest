import { useState, useEffect } from 'react';
import { Filter, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Task, TaskDifficulty } from '../types/task';
import TaskCard from './TaskCard';

const difficulties: { value: TaskDifficulty | 'all'; label: string }[] = [
  { value: 'all', label: 'All Tasks' },
  { value: 'good-first-issue', label: 'Good First Issue' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState<TaskDifficulty | 'all'>('all');

  useEffect(() => {
    fetchTasks();
  }, [selectedDifficulty]);

  async function fetchTasks() {
    setLoading(true);
    try {
      let query = supabase
        .from('tasks')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false });

      if (selectedDifficulty !== 'all') {
        query = query.eq('difficulty', selectedDifficulty);
      }

      const { data, error } = await query;

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="tasks" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available Tasks
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a task that matches your skill level and start contributing!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filter by difficulty:</span>
          </div>
          {difficulties.map((diff) => (
            <button
              key={diff.value}
              onClick={() => setSelectedDifficulty(diff.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDifficulty === diff.value
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">
              No tasks found. Check back soon for new opportunities!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Want to add your own task or suggestion?
          </p>
          <a
            href="https://github.com/YOUR-ORG/torc-toolbelt/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 font-medium transition-all"
          >
            Suggest a Task
          </a>
        </div>
      </div>
    </section>
  );
}
