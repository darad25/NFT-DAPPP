import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div` 
   height: 10px;
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
   margin-top: 5px;
   font-family: 'Varela Round';
   font-size: 1.75rem;
   font-weight: 700;
   color: black;
   letter-spacing: -0.1px;
   background-color: white;
   border-radius: 10rem;
   transition: all .2s;
   position: relative;
   padding: 1.5rem 14rem;
   padding-left: 40px;
   padding-bottom: 10px;
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
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  spacing: 5px;
  margin-bottom: 480px;
  margin-top: 5px;
  padding-bottom: 250px;
  z-index: 6;
  a:hover {  
   transform: translateY(6px); 
   color: #3535e9;
   border-color: #3535e9;        
`;

export const NavLink = styled(Link)`
  height: 1px;
  letter-spacing: 0.8px;
  display: flex;
  color: black;
  font-family: 'Varela Round';
  font-weight: 600;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  cursor: pointer;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  margin-right: 546px;
  margin-top: 75px;
  transition: all .2s;
  align-items: center;
  border: 2px;
  border-style: solid;
  border-color: #DFDFDF;
  cursor: pointer;
  a:active {  transform: translateY(2px); } 
  right: 361px;
`;

export const NavLin = styled(Link)`
  height: 1px;
  display: flex;
  color: black;
  font-family: 'Varela Round';
  font-weight: 600;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  cursor: pointer;
  border-radius: 10rem;
  transition: all .2s;
  position: fixed;
  margin-right: 981px; 
  margin-top: 75px;
  transition: all .2s;
  align-items: center;
  border: 2px;
  border-style: solid;
  border-color: #DFDFDF;
   cursor: pointer;
`;

export const NavLi = styled(Link)`
  width: auto;
  height: 1px;
  display: flex;
  color: black;
  font-family: 'Varela Round';
  font-weight: 600;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  cursor: pointer;
  border-radius: 10rem;
  transition: all .2s;
  position: fixed;
  margin-right: 846px;
  margin-top: 75px;
  transition: all .2s;
  align-items: center;
  border: 2px;
  border-style: solid;
  border-color: #DFDFDF;
   cursor: pointer;
   z-index: 6;
   a:active {  transform: translateY(6px); } 

`;

export const NavL = styled(Link)`
  width: auto;
  height: 1px;
  display: flex;
  color: black;
  font-family: 'Varela Round';
  font-weight: 600;
  justify-content: flex-start;
  padding: 1.2rem 2rem;
  cursor: pointer;
  border-radius: 10rem;
  transition: all .2s;
  position: fixed;
  margin-right: 726px;
  margin-top: 75px;
  transition: all .2s;
  align-items: center;
  border: 2px;
  border-style: solid;
  border-color: #DFDFDF;
   cursor: pointer;
`;

export const NavLinko = styled(Link)`
   background-color: #3535e9;
   width: 35px;
   height: 1px;
   display: flex;
   color: white;
   font-family: 'Varela Round';
   font-weight: 600;
   justify-content: flex-start;
   padding: 1.2rem 2rem;
   border-radius: 10rem;
   position: relative;
   background-size: cover;
   padding-right: 80px;
   margin-right: 41px;
   margin-top: 5px;
   margin-bottom: 10px;
   letter-spacing: 1px;
   align-items: center;
   border: none;
    cursor: pointer;
  }
`;

export const Arrowcontainer = styled.div`
   margin-left: 4.5rem;
   padding-top: 6px;
   position: fixed;
  

   i {
    font-size: 1.15rem;
    font-weight: 500;
    color: white;
    }
`; 

export const Sidestew = styled.div`
   padding: 50px 0px 0px 0px;
`;


// linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark) navllink grey
//    background: linear-gradient(#e66465, #9198e5);  you can find the exact #color you want to use through rgba