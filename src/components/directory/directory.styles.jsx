import styled from "styled-components";
import pic from "../../assets/herer.jpg";

export const DirectoryContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`; 

export const LogoContainer = styled.div`
     
     position: relative;
     height: 100%;
     width: 100%;
     background-size: 800px 600px;
     background-image: url(${pic});
`;

export const Asearchcontainer = styled.div`
    flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 22px;
  border: none;
    margin-left: 80px;
     padding-left: 80px;
`


// background-size: cover;     background-repeat: no-repeat;

