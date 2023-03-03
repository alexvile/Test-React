import { SearchFrom } from "./SearchForm";

export const App = () => {
  const handleFormSubmit = query => {
    console.log(query)
  };
  return (
    <div>
      <h1>Test</h1>
      <SearchFrom onSubmit={handleFormSubmit}/>
    </div>
  );
};
