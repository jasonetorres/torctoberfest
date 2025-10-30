// Client-side storage utilities
import { supabase } from "./supabase";

export interface Book {
  id?: string;
  title: string;
  author: string;
  coverUrl?: string;
  dateRead?: string;
  rating?: number;
  notes?: string;
  addedBy: string;
  createdAt?: string;
}

export interface StudyGuide {
  id?: string;
  title: string;
  bookTitle: string;
  content: string;
  uploadedAt?: string;
}

export interface VotingOption {
  id?: string;
  bookTitle: string;
  author: string;
  suggestedBy: string;
  votes: number;
  createdAt?: string;
}

const STORAGE_KEYS = {
  BOOKS: 'bookclub_books',
  GUIDES: 'bookclub_guides',
  VOTES: 'bookclub_votes',
  CURRENT_USER: 'bookclub_user',
};

// Books
export const getBooks = async (): Promise<Book[]> => {
  try {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching books:', error);
      return [];
    }

    // Convert snake_case (database) to camelCase (JavaScript)
    const books = (data || []).map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      coverUrl: book.cover_url,
      dateRead: book.date_read,
      rating: book.rating,
      notes: book.notes,
      addedBy: book.added_by,
      createdAt: book.created_at,
    }));

    return books;
  } catch (error) {
    console.error('Unexpected error:', error);
    return [];
  }
};

export const saveBook = async (book: Book): Promise<void> => {
  try {
    // Convert camelCase (JavaScript) to snake_case (database)
    const bookData = {
      title: book.title,
      author: book.author,
      cover_url: book.coverUrl || null,
      date_read: book.dateRead || null,
      rating: book.rating || null,
      notes: book.notes || null,
      added_by: book.addedBy,
    };


    const { data, error } = await supabase
      .from('books')
      .insert([bookData])
      .select();

    if (error) {
      console.error('❌ Supabase error:', error);
      throw new Error(`Failed to save book: ${error.message}`);
    }

    console.log('✅ Book saved successfully:', data);
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    throw error;
  }
};

export const deleteBook = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('books')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting book:', error);
      throw new Error(`Failed to delete book: ${error.message}`);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
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
export const getVotingOptions = async (): Promise<VotingOption[]> => {
  try{
    const {data, error} = await supabase.from('voting_options').select('*');

    if(error){
      console.error('Error fetching voting options:', error);
      return [];
    }
    const voting_options = (data || []).map(option => ({
        id: option.id,
        bookTitle: option.book_title,
        author: option.author,
        suggestedBy: option.suggested_by,
        votes: option.votes,
        createdAt: option.created_at
    }));

    return voting_options;
  }
  catch(error){
    console.error('Unexpected error:', error);
    return [];
  }
};

export const saveVotingOption = async (option: VotingOption): Promise<void> => {
  try{
    const optionData = {
      book_title: option.bookTitle,
      author: option.author,
      suggested_by: option.suggestedBy,
      votes: option.votes || 0,
    };

    const {data, error} = await supabase.from('voting_options').insert([optionData]).select();

    if(error){
      console.error('❌ Supabase error:', error);
      throw new Error(`Failed to save voting option: ${error.message}`);
    }
  }
  catch(error){
    console.error('❌ Unexpected error:', error);
    throw error;
  }
};

export const voteForOption = async (id: string): Promise<void> => {
  try {
    // First, get the current vote count
    const { data: currentData, error: fetchError } = await supabase
      .from('voting_options')
      .select('votes')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error('Error fetching current votes:', fetchError);
      throw new Error(`Failed to fetch votes: ${fetchError.message}`);
    }

    // Increment the vote count
    const newVotes = (currentData?.votes || 0) + 1;

    // Update with new count
    const { error: updateError } = await supabase
      .from('voting_options')
      .update({ votes: newVotes })
      .eq('id', id);

    if (updateError) {
      console.error('Error updating votes:', updateError);
      throw new Error(`Failed to update votes: ${updateError.message}`);
    }

    console.log('✅ Vote counted! New total:', newVotes);
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    throw error;
  }
};

export const clearVotingOptions = async (): Promise<void> => {
  try {
    const { error } = await supabase
      .from('voting_options')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all (using a trick: "not equal to impossible ID")

    if (error) {
      console.error('Error clearing voting options:', error);
      throw new Error(`Failed to clear voting options: ${error.message}`);
    }

    console.log('✅ All voting options cleared');
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    throw error;
  }
};

// User
export const getCurrentUser = (): string => {
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'Book Club Member';
};

export const setCurrentUser = (username: string): void => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, username);
};