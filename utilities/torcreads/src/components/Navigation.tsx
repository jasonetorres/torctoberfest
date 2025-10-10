import { Link, useLocation } from "react-router-dom";
import { BookOpen, Library, Vote, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/books", label: "Books", icon: BookOpen },
    { to: "/guides", label: "Study Guides", icon: Library },
    { to: "/vote", label: "Monthly Vote", icon: Vote },
  ];

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-light text-foreground">
            torcReads<span className="text-primary">.</span>
          </Link>
          
          <div className="flex items-center gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-light transition-colors",
                  location.pathname === to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
