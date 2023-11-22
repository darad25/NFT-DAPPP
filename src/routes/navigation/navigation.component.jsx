import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import  loadWeb3 from '../../utils/walletConnect/walletConnect.utils';
import Othersidebar from '../../components/othersidebar/othersidebar.component';

import {Connectcontainer,ImageContainer, Arrowcontainer, NavigationContainer,NavL, NavLinks, NavLink, NavLin, NavLi, NavLinko, LogoContainer, Cnamecontainer, Sidestew, Sidessearch } from './navigation.styles';

const Navigation = () => { 

    return (
     <Fragment>
       <NavigationContainer>
        {/* <li> </li> */}
          {/* <LogoContainer to='/'>
             <ELogo className='logo'/>
          </LogoContainer> */}
          <Cnamecontainer to='/'>
              Dashboard
          </Cnamecontainer>
         <NavLinks>
            <NavLink to='/'>
              Trending      
            </NavLink> 
              <NavLin to='/'>
              Art
            </NavLin>
              <NavLi to='/'>
              Music             
            </NavLi> 
            <NavLinko onClick={loadWeb3}>
              Connect  
            <Arrowcontainer>
             <i className='bx bx-down-arrow'></i> 
            </Arrowcontainer> 
            </NavLinko> 
            <NavL to='/auth'>
              Gifs      
            </NavL>
         </NavLinks>
       </NavigationContainer>
      <Outlet />
     </Fragment>
    );
 };  

  export default Navigation; 