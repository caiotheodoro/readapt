import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";


export interface IBook {
  id: number;
  title: string;
  description: string;
  genre: string;
  pages: number;
  reference: string;
  cover: string;
  onClick?: () => void;
}


interface IUseBooks {
  books: IBook[];
  setBooks: (books: IBook[]) => void;
}

const BooksContext = createContext<IUseBooks>(null as any);

interface IProviderProps {
  children: ReactNode;
}


 
  
  

export function BooksProvider({ children }: IProviderProps) {
  const [books, setBooks] = useState<IBook[]>([]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks
      }}
    >
      {children}
    </BooksContext.Provider>
  ) as React.ReactElement;
}

export function useBooks() {
  const context = useContext(BooksContext);

  return context;
}


