import {LogoContainer, DirectoryContainer, Asearchcontainer } from './directory.styles';
import SearchBar from '../../components/searchbar/searchbar.component';

const Directory = () => {
  
  return (
    <DirectoryContainer>
      <Asearchcontainer>
      <SearchBar/>
      </Asearchcontainer>
    </DirectoryContainer>
  );
  }; 

export default Directory; 