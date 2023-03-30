import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as ELogo } from '../../assets/eth_adobe_express.svg';
import  loadWeb3 from '../../utils/walletConnect/walletConnect.utils';
import Sidebar from '../../components/sidebar/sidebar.component';

import {Connectcontainer, NavigationContainer, NavLinks, NavLink, NavLinko, LogoContainer, Cnamecontainer, Sidestew, Sidessearch } from './navigation.styles';
 
const Navigation = () => { 

    return (
     <Fragment>
       <NavigationContainer>
          <LogoContainer to='/'>
             <ELogo className='logo'/>
          </LogoContainer>
          <Cnamecontainer to='/'>
              C O B E N     M I N T
          </Cnamecontainer>
         <NavLinks>
            <NavLink to='/shop'>
              Explore            
            </NavLink> 
              <NavLink>
              Features
            </NavLink>
            
              <NavLink to='/auth'>
               Community             
            </NavLink> 
            
            <NavLinko as='span' onClick={loadWeb3}>
              Connect             
            </NavLinko> 
         </NavLinks>
       </NavigationContainer>
        <div>
        <Sidestew> 
           <Sidebar />
         </Sidestew>   
        </div>
        
        
     <Outlet />
     </Fragment>
    );
 };  

    export default Navigation;