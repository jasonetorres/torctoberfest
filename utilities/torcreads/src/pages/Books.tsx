import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Star, BookOpen } from "lucide-react";
import { getBooks, saveBook, deleteBook, getCurrentUser, type Book } from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

const Books = () => {
  const [books, setBooks] = useState<Book[]>(getBooks());
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverUrl: "",
    dateRead: "",
    rating: 0,
    notes: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      id: Date.now().toString(),
      ...formData,
      addedBy: getCurrentUser(),
    };
    saveBook(newBook);
    setBooks(getBooks());
    setOpen(false);
    setFormData({ title: "", author: "", coverUrl: "", dateRead: "", rating: 0, notes: "" });
    toast({ title: "Book added successfully!" });
  };

  const handleDelete = (id: string) => {
    deleteBook(id);
    setBooks(getBooks());
    toast({ title: "Book removed" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-light mb-2">Community Reads</h1>
            <p className="text-muted-foreground">Track and browse the books read by the community</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Book
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a Book</DialogTitle>
                <DialogDescription>Log a book you've read or plan to read</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                  <div className="grid gap-2">
                    <Label htmlFor="coverUrl">Cover URL (optional)</Label>
                    <Input
                      id="coverUrl"
                      type="url"
                      value={formData.coverUrl}
                      onChange={(e) => setFormData({ ...formData, coverUrl: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="dateRead">Date Read</Label>
                    <Input
                      id="dateRead"
                      type="date"
                      value={formData.dateRead}
                      onChange={(e) => setFormData({ ...formData, dateRead: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="rating">Rating (0-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Book</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              {book.coverUrl && (
                <div className="h-48 bg-muted overflow-hidden">
                  <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-normal">{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                {book.rating && (
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < (book.rating || 0) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                )}
                {book.dateRead && (
                  <p className="text-sm text-muted-foreground">Read: {book.dateRead}</p>
                )}
                {book.notes && (
                  <p className="text-sm mt-2 line-clamp-3">{book.notes}</p>
                )}
              </CardContent>
              <CardFooter className="justify-between">
                <p className="text-xs text-muted-foreground">by {book.addedBy}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(book.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto text-muted mb-4" />
            <p className="text-muted-foreground">No books yet. Add your first book!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Books;
