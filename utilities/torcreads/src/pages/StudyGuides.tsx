import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Download, Trash2, FileText } from "lucide-react";
import { getStudyGuides, saveStudyGuide, deleteStudyGuide, type StudyGuide } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const StudyGuides = () => {
  const [guides, setGuides] = useState<StudyGuide[]>(getStudyGuides());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    bookTitle: "",
    content: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGuide: StudyGuide = {
      id: Date.now().toString(),
      ...formData,
      uploadedAt: new Date().toISOString(),
    };
    saveStudyGuide(newGuide);
    setGuides(getStudyGuides());
    setOpen(false);
    setFormData({ title: "", bookTitle: "", content: "" });
    toast({ title: "Study guide added successfully!" });
  };

  const handleDelete = (id: string) => {
    deleteStudyGuide(id);
    setGuides(getStudyGuides());
    toast({ title: "Study guide removed" });
  };

  const handleDownload = (guide: StudyGuide) => {
    const blob = new Blob([guide.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${guide.title}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2">Study Guides</h1>
            <p className="text-muted-foreground">Access reading guides and discussion materials</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Guide
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Study Guide</DialogTitle>
                <DialogDescription>Upload or create a new study guide</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Guide Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
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
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      placeholder="Paste study guide content here..."
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Guide</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Card key={guide.id}>
              <CardHeader>
                <CardTitle className="font-normal">{guide.title}</CardTitle>
                <CardDescription>{guide.bookTitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-4">{guide.content}</p>
              </CardContent>
              <CardFooter className="justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(guide)}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(guide.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {guides.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 mx-auto text-muted mb-4" />
            <p className="text-muted-foreground">No study guides yet. Add your first guide!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudyGuides;
