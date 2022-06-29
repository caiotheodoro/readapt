import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { useToast } from "@chakra-ui/react";

interface IContentDistribution {
  widhtSize?: string;
  heightSize?: string;
  titleSize?: string;
  descriptionSize?: string;
}

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
  age: string;
  setAge: (age: string) => void;
  contentDistribution: IContentDistribution;
  setContentDistribution: (contentDistribution: IContentDistribution) => void;
}

const BooksContext = createContext<IUseBooks>(null as any);

interface IProviderProps {
  children: ReactNode;
}


 
  
  

export function BooksProvider({ children }: IProviderProps) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [age, setAge] = useState<string>('');
  const [contentDistribution, setContentDistribution] = useState<IContentDistribution>({});

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        age,
        setAge,
        contentDistribution,
        setContentDistribution,
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


