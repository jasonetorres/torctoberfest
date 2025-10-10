import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, ThumbsUp, Trophy } from "lucide-react";
import { getVotingOptions, saveVotingOption, voteForOption, clearVotingOptions, getCurrentUser, type VotingOption } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const Vote = () => {
  const [options, setOptions] = useState<VotingOption[]>(getVotingOptions());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOption: VotingOption = {
      id: Date.now().toString(),
      ...formData,
      suggestedBy: getCurrentUser(),
      votes: 0,
    };
    saveVotingOption(newOption);
    setOptions(getVotingOptions());
    setOpen(false);
    setFormData({ bookTitle: "", author: "" });
    toast({ title: "Book suggestion added!" });
  };

  const handleVote = (id: string) => {
    voteForOption(id);
    setOptions(getVotingOptions());
    toast({ title: "Vote recorded!" });
  };

  const handleClearVotes = () => {
    clearVotingOptions();
    setOptions([]);
    toast({ title: "Voting reset for new month" });
  };

  const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);
  const winner = sortedOptions[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2">Monthly Vote</h1>
            <p className="text-muted-foreground">Choose our next community read</p>
          </div>
          <div className="flex gap-2">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Suggest Book
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Suggest a Book</DialogTitle>
                  <DialogDescription>Nominate a book for the community to vote on</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="bookTitle">Book Title</Label>
                      <Input
                        id="bookTitle"
                        value={formData.bookTitle}
                        onChange={(e) => setFormData({ ...formData, bookTitle: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Submit Suggestion</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            {options.length > 0 && (
              <Button variant="outline" onClick={handleClearVotes}>
                Reset Votes
              </Button>
            )}
          </div>
        </div>

        {winner && (
          <Card className="mb-8 border-primary">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                <CardTitle className="font-normal">Current Leader</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-2xl font-light mb-1">{winner.bookTitle}</h3>
              <p className="text-muted-foreground mb-2">by {winner.author}</p>
              <p className="text-sm text-muted-foreground">
                {winner.votes} {winner.votes === 1 ? 'vote' : 'votes'} • Suggested by {winner.suggestedBy}
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedOptions.map((option) => (
            <Card key={option.id}>
              <CardHeader>
                <CardTitle className="font-normal">{option.bookTitle}</CardTitle>
                <CardDescription>by {option.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-light text-primary">{option.votes}</p>
                    <p className="text-xs text-muted-foreground">
                      {option.votes === 1 ? 'vote' : 'votes'}
                    </p>
                  </div>
                  <Button onClick={() => handleVote(option.id)} className="gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Vote
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Suggested by {option.suggestedBy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {options.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 mx-auto text-muted mb-4" />
            <p className="text-muted-foreground">No suggestions yet. Be the first to suggest a book!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Vote;
