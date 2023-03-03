import { useEffect, useState } from "react";
import { SearchFrom } from "./SearchForm";
import { fetchImages } from "./services/images-api";

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1)
  
  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
  };
  useEffect(() => {
    console.log('effect')
    fetchImages(query, page)
    
  }, [page, query])
  
  return (
    <div>
      <h1>Test</h1>
      <SearchFrom onSubmit={handleFormSubmit}/>
    </div>
  );
};
