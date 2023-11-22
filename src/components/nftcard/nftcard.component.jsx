import Sidebar from '../../components/sidebar/sidebar.component';

// import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'; 

import Othersidebar from '../../components/othersidebar/othersidebar.component';

import { useState } from 'react'; 

import {  ProductCartContainer, Adropcontainer, Cardboxcontainer, Videocontainer, Sevensixcontainer, Fourfourcontainer, Twotwocontainer, Twotwofourcontainer, Threightcontainer, Fivesixcontainer, Musicontainer, Cybercontainer, Itemscontainer, Twofourcontainer, Totalethcontainer, Typecontainer, Collectionscontainer, Tsellercontainer, Bview, Btextcontainer, Bsellercontainer, Foot, Na, Pri, Foote, Nam, Pric, Footer,Name,Price,Searchcontainer,ImageContai, ImageContain, ImageContaine, Searhbarmenucontainer, Searchbarmenuitemcontainer, Searchiconcontainer, Input } from "./nftcard.styles";

const countries = () => {};

const myComponent = {
  width: '100px',
  height: '100px',
  overflow: 'scroll'
};

const Nftcard = ()  => {
  const [searchInput, setSearchInput] = useState("");
  const placeholderStyle = {
    fontFamily: 'Varela Round',
     // Add any other font-related styles here
  };
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
    <ProductCartContainer>
      <Sidebar/>
     <Searchcontainer>  
     <Input
      type="search"
      placeholder="Search by collections"
      onChange={handleChange}
      value={searchInput} 
      style={placeholderStyle}
      />
    </Searchcontainer>
    <Searchiconcontainer>
    <i className='bx bx-search'></i> 
    </Searchiconcontainer>
    
    <ImageContaine>    
      <img src={`https://robohash.org/1?set=set2&size=180x180`} />
      <Foot>
        <Na>Good Heads #44</Na>
        <Pri>$3.00</Pri>
      </Foot>
    </ImageContaine> 
    <ImageContain>    
      <img src={`https://robohash.org/2?set=set2&size=180x180`} />
      <Foote>
        <Nam>Doctor Life</Nam>
        <Pric>$3.00</Pric>
      </Foote>
    </ImageContain>  
    <ImageContai>    
      <img src={`https://robohash.org/3?set=set2&size=180x180`} />
      <Footer>
        <Name>Sportland IJack</Name>
        <Price>$3.00</Price>
      </Footer>
    </ImageContai> 
    <Bsellercontainer>
        Best Sellers
    </Bsellercontainer>
    <Btextcontainer>
       <Bview> 
         Sort by: 
       </Bview> 
    </Btextcontainer> 
    <Tsellercontainer>
        Type
    </Tsellercontainer> 
    <Adropcontainer>
        <i className='bx bx-down-arrow'></i> 
       </Adropcontainer>
    <Collectionscontainer>
        COLLECTIONS
    </Collectionscontainer>
    <Typecontainer>
         TYPE 
    </Typecontainer> 
    <Totalethcontainer>
        TOTAL ETH
    </Totalethcontainer> 
    <Twofourcontainer>
         24%
    </Twofourcontainer> 
    <Itemscontainer>
        ITEMS
    </Itemscontainer>
 
    <Cybercontainer>
        Cyberpunks Last Edition
    </Cybercontainer>
    <Musicontainer>
        MUSIC 
    </Musicontainer> 
    <Fivesixcontainer>
        1.56 ETH
    </Fivesixcontainer> 
    <Threightcontainer>
        +20.38%
    </Threightcontainer> 
    <Twotwofourcontainer>
        224
    </Twotwofourcontainer>  
  
    <Cardboxcontainer>
        The Card Box
    </Cardboxcontainer>
    <Videocontainer>
        VIDEO 
    </Videocontainer> 
    <Sevensixcontainer>
        2.76 ETH
    </Sevensixcontainer> 
    <Fourfourcontainer>
        +12.44%
    </Fourfourcontainer> 
    <Twotwocontainer>
        1,322
    </Twotwocontainer>  

        <Othersidebar/>
    </ProductCartContainer> 
  );
}; 

export default Nftcard;   