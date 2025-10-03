import { Wrench, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full" />
              <Wrench className="relative h-20 w-20 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            TORC Toolbelt
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            A community-driven collection of useful utilities, scripts, and tools.
            Perfect for developers, robotics enthusiasts, and first-time open-source contributors.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#tasks"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105"
            >
              Browse Tasks
            </a>
            <a
              href="https://github.com/jasonetorres/torctoberfest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold leading-7 text-white hover:text-blue-400 transition-colors"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="rounded-full bg-blue-500/10 p-3 mb-4">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hacktoberfest 2025</h3>
              <p className="text-sm text-gray-400 text-center">
                Official participant. Submit quality PRs and earn your digital badge!
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="rounded-full bg-green-500/10 p-3 mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Beginner Friendly</h3>
              <p className="text-sm text-gray-400 text-center">
                Clear documentation and tasks for all skill levels. New to open source? Start here!
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="rounded-full bg-purple-500/10 p-3 mb-4">
                <Wrench className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real Utilities</h3>
              <p className="text-sm text-gray-400 text-center">
                Build tools that developers actually use. Your code makes a difference!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
