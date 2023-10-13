import { ContainerSearchBar, InputSearch } from "./styles";

const SearchBar = () => {
  return (
    <ContainerSearchBar>
      <InputSearch
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero..."
      />
    </ContainerSearchBar>
  );
};

export default SearchBar;
