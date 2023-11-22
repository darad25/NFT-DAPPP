import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 950px;
  align-items: center;
  position: fixed;
  margin-top: 155px;
  
  img {
    width: 15%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export const Searchcontainer = styled.div`
    position: relative;
    margin-bottom: 0px;
    width: 100%;
    bottom: 190px;
    left: 775px;
`;

export const Searhbarmenucontainer = styled.div`
   position: relative;
   margin-top: 60px;
`;

export const Searchbarmenuitemcontainer = styled.div`
   position: absolute;
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

export const Input = styled.input`
    position: absolute;
    height: 45px;
    width: 350px;
    border-radius: 10px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: 100px;
    margin-top: 60px;
    font-size: 0.9rem;
    background-color: #F8F8F8;
    border-style: solid;
    border-color: #F1F1F1;
  

    &:focus {
        box-shadow: 0 0 3px 0 #1183d6;
        border-color: #1183d6;
        outline: none;
    } 
`;

// export const ImageContainer = styled.div`
//      position: fixed;
//       width: 10%;
//       padding-left: 1300px;
//       align-items: center;
//       top: 22px;
       
//       img {
//         width: 35%;
//         height: 70%;
//       }
// `;

export const ImageContaine = styled.div`
     position: relative;
      width: 20%;
      top: 23px;
      right: 272px;
      height: 270px;

   
    img {
        width: 75%;
        background-color: #3535e9;
        border-radius: 1rem;
        margin-bottom: 16px;
      }
`;

export const ImageContain = styled.div`
     position: relative;
      width: 20%;
      bottom: 246px;
      right: 3px;
      height: 272px;

   
    img {
        width: 75%;
        background-color: lightgreen;
        border-radius: 1rem;
        margin-bottom: 12px;
      }
`;

export const ImageContai = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    bottom: 516px;
    left: 225px;
    height: 302px;
    align-items: center;
    position: relative;

  img {
    width: 75%;
    background-color: #3535e9;
    border-radius: 1rem;
    margin-bottom: 15px;
}
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  `;

export const Name = styled.div`
    width: 90%;
    margin-bottom: 40px;
    margin-left: 38px;
    font-size: 16px;
    font-weight: 700;
`;

export const Price = styled.div`
  width: 10%;
  margin-right: 55px;
  font-size: 16px;
  font-weight: 700;
`;

export const Foote = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  `;

  export const Nam = styled.div`
  width: 90%;
  margin-bottom: 40px;
  margin-left: 2px;
  font-size: 16px;
  font-weight: 700;
`;  

export const Pric = styled.div`
  width: 10%;
  margin-right: 95px;
  font-size: 16px;
  font-weight: 700;
`;

export const Foot = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  `;

  export const Na = styled.div`
  width: 90%;
  margin-bottom: 90px;
  margin-left: 2px;
  font-size: 16px;
  font-weight: 700;
`;  

export const Pri = styled.div`
  width: 10%;
  margin-right: 95px;
  font-size: 16px;
  font-weight: 700;
`;

export const Searchiconcontainer = styled.div`
   position: fixed;
   width: 2px;
   height: 45px;
   padding-top: 0.2px;
   margin-top: 39px;
   bottom: 693px;
   right: 805px;
   float: left;
   z-index: 1;

   i {
    font-size: 1.25rem;
    }
   
`;

export const Searchicontextcontainer = styled.div`
   position: relative;
   padding-top: 2px;   
`;

export const Bsellercontainer = styled.div`
   margin-right: 765px;
   padding-top: 376px;
   position: fixed;
   font-size: 1rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`; 

export const Btextcontainer = styled.div`
  color: black;
  position: fixed;
  font-family: 'Varela Round';
  align-items: center;
  place-content: flex-start;
  justify-content: right;
  text-align-last: right;
  padding-top: 369px;
  margin-left: 10.5rem;
  margin-top: 10px;
  left: 860px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  
  &::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  } 
  
`;

export const Bview = styled.div `
   color: grey;
   font-weight: 800;
   letter-spacing: 0.5px;
`;

export const Tsellercontainer = styled.div`
   margin-left: 600px;
   padding-top: 378px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`; 

export const Collectionscontainer = styled.div`
   margin-right: 770px;
   color: grey;
   padding-top: 405px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.9px;
   font-family: 'Varela Round'; 
`;

export const Typecontainer = styled.div`
   color: grey;
   margin-right: 100px;
   padding-top: 406px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.9px;
   font-family: 'Varela Round'; 
`;

export const Totalethcontainer = styled.div`
   margin-left: 165px;
   color: grey;
   padding-top: 406px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.9px;
   font-family: 'Varela Round'; 
`;

export const Twofourcontainer = styled.div`
   margin-left: 450px;
   color: grey;
   padding-top: 406px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.9px;
   font-family: 'Varela Round'; 
`;

export const Itemscontainer = styled.div`
   margin-left: 620px;
   color: grey;
   padding-top: 406px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.9px;
   font-family: 'Varela Round'; 
`;

export const Cybercontainer = styled.div`
   margin-right: 531px;
   color: black;
   padding-top: 455px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Musicontainer = styled.div`
   color: black;
   margin-top: 453px;
   margin-right: 100px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
   background-color: grey;
   height: .1px;
   width: 38px;
   padding: .6rem .6rem;
   background-size: cover;
   align-items: center;
   justify-content: flex-start;
   display: flex;

`;

export const Fivesixcontainer = styled.div`
   margin-left: 165px;
   color: black;
   padding-top: 455px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Threightcontainer = styled.div`
   margin-left: 450px;
   color: #3535e9;
   padding-top: 455px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Twotwofourcontainer = styled.div`
   margin-left: 620px;
   color: black;
   padding-top: 455px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;


export const Cardboxcontainer = styled.div`
   margin-right: 600px;
   color: black;
   padding-top: 535px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Videocontainer = styled.div`
   color: black;
   margin-top: 535px;
   margin-right: 100px;
   position: fixed;
   font-size: 0.7rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
   background-color: grey;
   height: .1px;
   width: 38px;
   padding: .6rem .6rem;
   background-size: cover;
   align-items: center;
   justify-content: flex-start;
   display: flex;
`;

export const Sevensixcontainer = styled.div`
   margin-left: 165px;
   color: black;
   padding-top: 537px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Fourfourcontainer = styled.div`
   margin-left: 450px;
   color: #3535e9;
   padding-top: 537px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Twotwocontainer = styled.div`
   margin-left: 620px;
   color: black;
   padding-top: 537px;
   position: fixed;
   font-size: 0.8rem;
   font-weight: 900;
   letter-spacing: 0.5px;
   font-family: 'Varela Round'; 
`;

export const Adropcontainer = styled.div`
   margin-left: 650px;
   padding-top: 377px;
   position: fixed;
  

   i {
    font-size: 0.8rem;
    font-weight: 900;
    color: black;
    }
`; 
// export const button = styled.button`
//     text-indent: -999px;
//     overflow: hidden;
//     width: 40px;
//     padding: 0;
//     margin: 0;
//     border: 1px solid transparent;
//     border-radius: inherit;
//     background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
//     cursor: pointer;
//     opacity: 0.7;

//     &:hover {
//         opacity: 1; 
//     } 
    
//     &:focus {
//         box-shadow: 0 0 3px 0 #1183d6;
//         border-color: #1183d6;
//         outline: none;
//     } 
// `