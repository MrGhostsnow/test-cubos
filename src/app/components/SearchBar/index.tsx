import { ContainerSearchBar, InputSearch, Button } from "./styles";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <ContainerSearchBar>
      <InputSearch
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>Pesquisar</Button>
    </ContainerSearchBar>
  );
};

export default SearchBar;
