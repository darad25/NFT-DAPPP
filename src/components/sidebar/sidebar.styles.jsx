import styled from "styled-components";
import { Link } from 'react-router-dom';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

export const Sidebarcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 320px;
  background-color: #F5F5F5;
`; 

export const Sidebarlogocontainer = styled.div`
   position: fixed;
   bottom: 665px;
   display: grid;
   place-items: center;
   height: 120px;
   padding-top: 0px;
   font-size: 1.3rem;
   padding-left: 48px;
   font-weight: 800;
   font-family: 'Varela Round';
   `; 

// export const Sidebarmenucontainer = styled.div`
//    position: relative;
//    margin-top: -9.5px;
// `; 

// export const Sidebarmenuindcontainer = styled.div`
//    position: absolute;
//    top: 0;
//    left: 50%;
//    width: calc(100% - 40px);
//    border-radius: 10px;
//    background-color: #308efe;
//    z-index: -1;
//    transform: translateX(-50%);
//    transition: 0.3s ease;
// `;

// export const Sidebarmenuitemcontainer = styled.div`
//    display: flex;
//    align-items: center;
//    place-content: flex-start;
//    padding: .2rem 3rem;
//    font-size: 1.25rem;
//    font-weight: 500;
//    color: #555555;
//    transition: color 0.3s ease-in-out;

//    &:active {
//       color: #fff; 
//    }
// `; 

export const Sidehover = styled.div`
   &:hover {
    background-color: #D5D5D5
   } 
`;

export const Sidebarmenuitemiconcontainer = styled.li`
   position: relative;
   color: black;
   font-family: 'Varela Round';
   display: flex;
   align-items: center;
   place-content: flex-start;
   margin-top: 0.8rem;
   margin-left: 2.12rem;
   top: 90px;
   padding: 8px;
   font-size: 1.05rem;
   font-weight: 548;

   i {
      font-size: 1.55rem;
      font-weight: 500;
      color: #B5B5B5;
      padding-right: 10px;
     }
     
   &:hover {
      background-color: #D5D5D5;
      width: 240px;
      border-radius: 0.5rem;
      
      i {
         color: black;
      }
   }
`; 

export const Sidebarmenuitemcontainer = styled.li`
   padding-top: 98px;
   position: relative;
   color: black;
   font-family: 'Varela Round';
   display: flex;
   align-items: center;
   place-content: flex-start;
   margin-top: 0.8rem;
   margin-left: 2.12rem;
   bottom: 40px;
   padding: 8px;
   font-size: 1.05rem;
   font-weight: 548;

   &:hover {
      background-color: #D5D5D5;
      width: 240px;
      border-radius: 0.5rem;
       
      i {
         color: black;
      }
   }

   
   i {
    font-size: 1.55rem;
    font-weight: 500;
    color: #B5B5B5;
    padding-right: 10px;
   }
`; 

export const ImageContainer1 = styled.div`
     position: fixed;
      padding-left: 194px;
      top: 169px;
      border-radius: 1rem;
      height: 30px;    
      

      img {
        width: 55%;
        height: 60%;
        border-radius: 10rem;
      }
`;

export const ImageContainer2 = styled.div`
     position: fixed;
      padding-left: 182px;
      top: 169px;
      border-radius: 1rem;
      height: 30px;    

      img {
        width: 65%;
        height: 50%;
        border-radius: 10rem;
      }
`;

export const ImageContainer3 = styled.div`
     position: fixed;
      height: 30px;
      padding-left: 206px;
      top: 169px;
      border-radius: 1rem;

      img {
        width: 75%;
        height: 60%;
        border-radius: 10rem;
      }
`;

export const Greyline = styled.div`
  width: 80%;
  height: 3px;
  background-color: #D0D0D0; 
  margin: 110px 0; 
  margin-left: 30px;
`;

export const Greyline2 = styled.div`
  width: 80%;
  height: 3px;
  background-color: #D0D0D0; 
  margin-left: 30px;
  bottom: 300px;
`;

export const Accountcontainer = styled.div`
   position: fixed;
   bottom: 400px;
   display: grid;
   place-items: center;
   height: 120px;
   padding-top: 0px;
   font-size: 1rem;
   padding-left: 48px;
   font-weight: 800;
   font-family: 'Varela Round';
   color: #B5B5B5;
   top: 260px;
   `; 

export const Bluebox = styled.div` 
   position: relative;
   height: 180px;
   padding-left: 60px;
   background-color: #3535e9;
   width: 145px;
   display: flex;
   color: white;
   border-radius: 1rem;
   background-size: cover;
   padding-right: 80px;
   margin-left: 13px;
   margin-top: 1px;
   bottom: 20px;
   align-items: center;
   border: none;
    cursor: pointer;
  }
`;

export const Upgradecontainer = styled.div`
   position: relative;
   display: flex;
   white-space: nowrap;
   font-size: 22px;
   right: 37px;
   font-weight: 800;
   font-family: 'Varela Round';

`;

export const Viewplans = styled.div`
   position: relative;
   display: flex;
   white-space: nowrap;
   font-size: 18px;
   right: 208px;
   font-weight: 200;
   font-family: 'Varela Round';
   top: 30px;
`;

export const Arrowcontainer = styled.div`
     position: fixed;
      width: 10%;
      left: 38px;
      align-items: center;
      top: 720px;
      border-radius: 10rem;
`;

export const Circlecontainer = styled.div`
   position: fixed;
   width: 10%;
   left: 38px;
   align-items: center;
   top: 590px;
   border-radius: 10rem;
   font-size: 45px;
`;

// export const Sidebarmenuitemtextcontainer = styled.div`
//    position: relative;
//    color: black;
//    font-family: 'Mochiy Pop P one', sans-serif;
//    display: flex;
//    align-items: center;
//1   place-content: flex-start;
//    margin-top: 0.8rem;
//    margin-left: 4.57rem;
//    top: 81px;
//    padding: 8px;
//    font-size: 1.05rem;
//    font-weight: 548;
//    color: black;  
//    &:hover {
//       background-color: #D5D5D5;
//      } 
// `;

// export const Sidebarmenuitemtexcontainer = styled.div`
//    background-color: #A9A9A9,
//    color: black;`

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