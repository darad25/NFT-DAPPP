import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationContainer = styled.div` 
   background: white;
   height: 70px;
   width: 80%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   padding-top: 18px;
   margin-right: 1px;
   float: right;
`;

export const LogoContainer = styled(Link)`
     height: 100%;
     width: 60px;
     padding: 20px 20px;
`;

export const Cnamecontainer = styled.div`
   width: 180px;
   height: 1px;
   display: flex;
   align-items: center;
   margin-right: 190px;
   justify-content: space-between;
   margin-top: 15px;
   text-transform: uppercase;
   font-family: 'Open Sans Condensed';
   font-size: 1.5rem;
   font-weight: 900;
   letter-spacing: -2px;
   color: black;
   background-color: white;
   border-radius: 10rem;
   transition: all .2s;
   position: relative;
   padding: 1.5rem 14rem;
   padding-left: 1px;
   float: left;
   border: none;
   cursor: pointer;
   background-size: cover;
   a:link { text-decoration: none; }
   a:visited { text-decoration: none; }
   a:hover { text-decoration: none; }
   a:active { text-decoration: none; }

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba($color-black,.2);
  
      &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      } 
  } 
`;

export const  NavLinks = styled.div`
 a:link { text-decoration: none; }
 a:visited { text-decoration: none; }
 a:hover { text-decoration: none; }
 a:active { text-decoration: none; }
 width: 50%;
 height: 100%;
 display: flex;
  justify-content: flex-end;
  spacing: 20px;
  

`;

export const NavLink = styled(Link)`
  width: auto;
  height: 1px;
  display: flex;
  color: grey;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  cursor: pointer;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  background-size: cover;
  margin-right: 20px;
  margin-top: 15px;
  transition: all .2s;
  margin-bottom: 10px;
  align-items: center;
  border: 3px solid #4c00b0;
   cursor: pointer;
   background-size: cover;
`;

export const NavLinko = styled(Link)`
   background-color: grey;
`;

export const Sidestew = styled.div`
   padding: 50px 0px 0px 0px;
`;
// linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark) navllink grey
//    background: linear-gradient(#e66465, #9198e5);  you can find the exact #color you want to use through rgba