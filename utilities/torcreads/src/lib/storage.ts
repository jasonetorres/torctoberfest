// Client-side storage utilities
export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;
  dateRead?: string;
  rating?: number;
  notes?: string;
  addedBy: string;
}

export interface StudyGuide {
  id: string;
  title: string;
  bookTitle: string;
  content: string;
  uploadedAt: string;
}

export interface VotingOption {
  id: string;
  bookTitle: string;
  author: string;
  suggestedBy: string;
  votes: number;
}

const STORAGE_KEYS = {
  BOOKS: 'bookclub_books',
  GUIDES: 'bookclub_guides',
  VOTES: 'bookclub_votes',
  CURRENT_USER: 'bookclub_user',
};

// Books
export const getBooks = (): Book[] => {
  const data = localStorage.getItem(STORAGE_KEYS.BOOKS);
  return data ? JSON.parse(data) : [];
};

export const saveBook = (book: Book): void => {
  const books = getBooks();
  const index = books.findIndex(b => b.id === book.id);
  if (index >= 0) {
    books[index] = book;
  } else {
    books.push(book);
  }
  localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
};

export const deleteBook = (id: string): void => {
  const books = getBooks().filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
};

// Study Guides
export const getStudyGuides = (): StudyGuide[] => {
  const data = localStorage.getItem(STORAGE_KEYS.GUIDES);
  return data ? JSON.parse(data) : [];
};

export const saveStudyGuide = (guide: StudyGuide): void => {
  const guides = getStudyGuides();
  guides.push(guide);
  localStorage.setItem(STORAGE_KEYS.GUIDES, JSON.stringify(guides));
};

export const deleteStudyGuide = (id: string): void => {
  const guides = getStudyGuides().filter(g => g.id !== id);
  localStorage.setItem(STORAGE_KEYS.GUIDES, JSON.stringify(guides));
};

// Voting
export const getVotingOptions = (): VotingOption[] => {
  const data = localStorage.getItem(STORAGE_KEYS.VOTES);
  return data ? JSON.parse(data) : [];
};

export const saveVotingOption = (option: VotingOption): void => {
  const options = getVotingOptions();
  options.push(option);
  localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify(options));
};

export const voteForOption = (id: string): void => {
  const options = getVotingOptions();
  const option = options.find(o => o.id === id);
  if (option) {
    option.votes += 1;
    localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify(options));
  }
};

export const clearVotingOptions = (): void => {
  localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify([]));
};

// User
export const getCurrentUser = (): string => {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'Anonymous';
};

export const setCurrentUser = (username: string): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, username);
};
