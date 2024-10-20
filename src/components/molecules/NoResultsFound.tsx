import React from 'react';
import { Search, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface NoResultsFoundProps {
  searchQuery: string;
  onBackToReading: () => void;
}

export const NoResultsFound: React.FC<NoResultsFoundProps> = ({ searchQuery, onBackToReading }) => {
  return (
    <div className="flex justify-center items-center h-screen w-full" style={{ height: 'calc(100vh - 300px)' }}>
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">No Results Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Search className="h-16 w-16 text-muted-foreground" />
          </div>
          <p className="text-center text-muted-foreground">
            We couldn&apos;t find any matches for
            <span className="font-semibold text-foreground"> &quot;{searchQuery}&quot;</span>
          </p>
          <div className="space-y-2">
            <p className="text-sm font-semibold">Suggestions:</p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Check your spelling</li>
              <li>Try using different or more general keywords</li>
              <li>Ensure you&apos;re searching within the correct chapter or section</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={onBackToReading}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reading
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
