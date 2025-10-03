import { Github, Book, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">torc toolbelt</h3>
            <p className="text-sm text-gray-400">
              A community-driven collection of utilities built by developers, for developers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/jasonetorres/torctoberfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jasonetorres/torctoberfest/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <Book className="h-4 w-4" />
                  Contributing Guide
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jasonetorres/torctoberfest/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discussions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hacktoberfest</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://hacktoberfest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jasonetorres/torctoberfest/blob/main/HACKTOBERFEST.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Participation Guide
                </a>
              </li>
              <li>
                <a
                  href="https://torc.dev/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} torc community. Licensed under{' '}
            <a
              href="https://github.com/jasonetorres/torctoberfest/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
