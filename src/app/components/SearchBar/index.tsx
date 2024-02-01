import React, { useState } from "react";
import { ContainerSearchBar, InputSearch, Button } from "./styles";
import Loupe from "../../assets/loupe.png";
import Image from "next/image";

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
        placeholder="Pesquise por filmes"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearch}>
        {" "}
        <Image src={Loupe} alt="loupe" />
      </Button>
    </ContainerSearchBar>
  );
};

export default SearchBar;
