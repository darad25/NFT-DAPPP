import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Sidebarcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 320px;
  background-color: #F5F5F5;
`; 

export const Sidebarlogocontainer = styled.div`
   display: grid;
   place-items: center;
   height: 120px;
   font-size: 1.5rem;
   padding-right: 100px;
   font-weight: 700;
   font-family: 'Mochiy Pop P one', sans-serif;
`; 

export const Sidebarmenucontainer = styled.div`
   position: relative;
   margin-top: -9.5px;

`; 

export const Sidebarmenuindcontainer = styled.div`
   position: absolute;
   top: 0;
   left: 50%;
   width: calc(100% - 40px);
   border-radius: 10px;
   background-color: #308efe;
   z-index: -1;
   transform: translateX(-50%);
   transition: 0.3s ease;
`;

export const Sidebarmenuitemcontainer = styled.div`
   display: flex;
   align-items: center;
   place-content: flex-start;
   padding: .2rem 3rem;
   font-size: 1.25rem;
   font-weight: 500;
   color: #555555;
   transition: color 0.3s ease-in-out;

   &:active {
      color: #fff; 
   }
`; 

export const Sidebarmenuitemiconcontainer = styled.div`
   margin-right: 0.7rem;
   padding-top: 22px;


   i {
    font-size: 1.75rem;
    font-weight: 500;
    color: black;
    }
`; 

export const Sidebarmenuitemtextcontainer = styled.div`
   font-size: 1.05rem;
   padding-top: 22px;
   font-weight: bold;
   color: black;
   font-family: 'Mochiy Pop P one', sans-serif;

`;
export const NavLinks = styled(Link)`
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

// export const NavLink = styled(Link)`
//   width: auto;
//   height: 1px;
//   display: flex;
//   color: white;
//   justify-content: flex-start;
//   padding: 1.2rem 2rem;
//   cursor: pointer;
//   color: grey;
//   background-color: white;
//   border-radius: 10rem;
//   transition: all .2s;
//   position: relative;
//   border: none;
//   background-size: cover;
//   margin-right: 20px;
//   margin-top: 15px;
//   transition: all .2s;
//   margin-bottom: 10px;
//   align-items: center;
//   border: none;
//    cursor: pointer;
//    background-size: cover; stepHeight you can use it has the hover would move over the side bar items
 
// `;