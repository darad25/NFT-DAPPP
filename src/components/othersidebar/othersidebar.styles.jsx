import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Othersidebarcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 30px;
  margin-left: 1170px;
  height: 100vh;
  width: 400px;
  background-color: #F5F5F5;
`; 

export const Othersidebarback = styled.div`
  position: relative;
  bottom: 45px;
  background-color: white;
  margin-right: 45px;
  margin-left: 50px;
  height: 330px;
  width: 310px;
  border-radius: 1rem;
`;

export const Lowerothersidebarback = styled.div`
  position: relative;
  bottom: 40px;
  background-color: white;
  margin-right: 45px;
  margin-left: 50px;
  height: 310px;
  width: 310px;
  border-radius: 1rem;
`;

export const Othersidebarlogocontainer = styled.div`
   display: grid;
   place-items: center;
   height: 120px;
   font-size: 1.5rem;
   padding-right: 120px;
   font-weight: 700;
   font-family: 'Mochiy Pop P one', sans-serif;
`; 


export const ImageContainer = styled.div`
      width: 10%;
      margin-left: 4.5rem;
      padding-top: 6px;
   
      i {
         font-size: 2.05rem;
         font-weight: 500;
         padding-right: 10px;
         padding-bottom: 30px;

      }

      img {
        width: 29%;
        height: 70%;
        background-color: white;
        border-radius: 10rem;
        box-shadow: 3px 10px 8px #e9e4e5;
      }
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

export const Transactioncontainer = styled.div`
   margin-left: 1.5rem;
   padding-top: 26px;
   position: fixed;
   font-size: 1rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round';

   img {
      width: 17%;
      height: 70%;
      background-color: white;
      border-radius: 10rem;
      box-shadow: 3px 10px 8px #e9e4e5;
    }  

  
`; 

export const Earningscontainer = styled.div`
   margin-left: 1.5rem;
   padding-top: 27px;
   position: fixed;
   font-size: 1rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round';

   img {
      width: 17%;
      height: 70%;
      background-color: white;
      border-radius: 10rem;
      box-shadow: 3px 10px 8px #e9e4e5;
    }  

  
`;

export const Linecontainer = styled.div`
   margin-left: 13rem;
   padding-top: 27px;
   position: fixed;
  }   

   i {
   font-size: 1.15rem;
   font-weight: 500;
   background-color: #AAFF00;
   color: black;
}
`;

export const Othersidebarmenuitemiconcontainer = styled.div`
   margin-left: 1.5rem;
   padding-top: 33px;
   position: fixed;
   font-size: 1rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Mochiy Pop P one', sans-serif;

   img {
      width: 15%;
      height: 70%;
      background-color: white;
      border-radius: 10rem;
    }  

  
`; 

export const Ltccontainer = styled.div`
   margin-left: 1.5rem;
   padding-top: 33px;
   position: fixed;
   font-size: 1rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Mochiy Pop P one', sans-serif;

   img {
      width: 4%;
      height: 70%;
      background-color: white;
      border-radius: 10rem;
    }  

  
`;

export const View = styled.div `
   color: #3535e9;
   font-weight: 800;
   letter-spacing: 0.5px;
`;

export const Percent = styled.div `
   color: black;
   font-weight: 800;
   letter-spacing: 0.5px;
`;

export const Othersidebarmenuitemtextcontainer = styled.div`
   position: relative;
   color: black;
   font-family: 'Varela Round';
   align-items: center;
   place-content: flex-start;
   justify-content: right;
   text-align-last: right;
   padding-top: 29px;
   margin-top: 0.8rem;
   right: 1.7rem;
   font-size: 0.8rem;
   font-weight: 800;
   letter-spacing: 1px;
  
      &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      } 
  }   
`;

export const Belowmenuitemtextcontainer = styled.div`
   position: relative;
   color: black;
   font-family: 'Varela Round';
   align-items: center;
   place-content: flex-start;
   justify-content: right;
   text-align-last: right;
   padding-top: 29px;
   margin-top: 0.8rem;
   right: 1.7rem;
   font-size: 0.8rem;
   font-weight: 800;
   letter-spacing: 1px;
  
      &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      } 
  }   
`;

export const Btcamountcontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 200px;
   top: 182px;
   font-size: 0.8rem;
   font-weight: 748;
   color: black;
   color: grey;
   letter-spacing: 1px;  
`;


export const Btcquantitycontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 211px;
   top: 164px;
   font-size: 0.9rem;
   font-weight: 800;
   letter-spacing: 1px;
`;

export const Ltcamountcontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 205px;
   top: 240px;
   font-size: 0.8rem;
   font-weight: 748;
   color: black;
   color: grey;
   letter-spacing: 1px;  
`;

export const Ltcquantitycontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 210px;
   top: 222px;
   font-size: 0.9rem;
   font-weight: 800;
   letter-spacing: 1px;
`;

export const Ethamountcontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 200px;
   top: 300px;
   font-size: 0.8rem;
   font-weight: 748;
   color: black;
   color: grey;
   letter-spacing: 1px;  
`;

export const Ethquantitycontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 210px;
   top: 280px;
   font-size: 0.9rem;
   font-weight: 800;
   letter-spacing: 1px;
`;
// export const Sidebarmenuitemtexcontainer = styled.div`
//    background-color: #A9A9A9,
//    color: black;`

export const Lamountcontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 210px;
   top: 360px;
   font-size: 0.8rem;
   font-weight: 748;
   color: black;
   color: grey;
   letter-spacing: 1px;  
`;

export const Lquantitycontainer = styled.div`
   position: fixed;
   color: black;
   font-family: 'Varela Round';
   right: 212px;
   top: 340px;
   font-size: 0.9rem;
   font-weight: 800;
   letter-spacing: 1px;
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