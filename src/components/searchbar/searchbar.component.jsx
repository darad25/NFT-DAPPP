import { useState } from 'react'; 

import { Searchcontainer, Searhbarmenucontainer, Searchbarmenuitemcontainer, Searchiconcontainer, Input } from "./searchbar.styles";

 const countries = () => {};

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      countries.filter((country) => {
      return country.name.match(searchInput);
  });
  }
  
  return ( 
  
   <Searchcontainer> 
   <Searhbarmenucontainer>

  <Searchbarmenuitemcontainer>
    <Searchiconcontainer>
   <i className='bx bx-search'></i> 
    </Searchiconcontainer>
   <Input
   type="search"
   placeholder="Search Nfts"
   onChange={handleChange}
   value={searchInput} /> 
  </Searchbarmenuitemcontainer>

  </Searhbarmenucontainer>
  </Searchcontainer>
  )
};  

export default SearchBar;