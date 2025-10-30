import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Library, Vote } from "lucide-react";
import { Link } from "react-router-dom";
import { getBooks, getStudyGuides, getVotingOptions } from "@/lib/storage";

const Index = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [guides, setGuides] = useState<any[]>([]);
  const [votes, setVotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const booksData = await getBooks();
      const guidesData = getStudyGuides(); // Still localStorage (sync)
      const votesData = await getVotingOptions();
      
      setBooks(booksData);
      setGuides(guidesData);
      setVotes(votesData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { label: "Books Read", value: books.length, icon: BookOpen, link: "/books" },
    { label: "Study Guides", value: guides.length, icon: Library, link: "/guides" },
    { label: "Active Votes", value: votes.length, icon: Vote, link: "/vote" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <BookOpen className="w-16 h-16 mx-auto text-primary mb-4 animate-pulse" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Welcome to
            <span className="block text-primary">torcReads</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 font-light">
            A digital space for our community to track reading, share insights, and discover our next adventure together.
          </p>
          <div className="flex gap-4">
            <Link to="/books">
              <Button size="lg">Browse Books</Button>
            </Link>
            <Link to="/vote">
              <Button size="lg" variant="outline">Vote Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ label, value, icon: Icon, link }) => (
            <Link key={label} to={link}>
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-normal text-muted-foreground">{label}</CardTitle>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-light">{value}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-light mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <CardTitle className="font-normal">Track Your Reading</CardTitle>
              <CardDescription>
                Log books you've read, rate them, and keep notes about your favorite passages and insights.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Library className="w-8 h-8 text-primary mb-4" />
              <CardTitle className="font-normal">Study Guides</CardTitle>
              <CardDescription>
                Access curated discussion guides and reading materials to deepen your understanding.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Vote className="w-8 h-8 text-primary mb-4" />
              <CardTitle className="font-normal">Monthly Voting</CardTitle>
              <CardDescription>
                Suggest books and vote on what the community reads next. Every voice matters.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-light mb-4">Ready to Join?</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg">
              Start tracking your reading journey and connect with fellow torc book lovers.
            </CardDescription>
            <div className="flex gap-4 justify-center mt-6">
              <Link to="/books">
                <Button size="lg" variant="secondary">
                  Add Your First Book
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default Index;