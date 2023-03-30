import styled from "styled-components";

export const Searchcontainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 320px;
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
    position: relative;
    height: 45px;
    width: 500px;
    border: none;
    border-radius: 10px;
    padding-left: 50px;
    padding-right: 40px;
    margin-left: -119.5px;
    margin-top: 60px;
    font-size: 0.9rem;
    background-color: #F5F5F5;

    &:focus {
        box-shadow: 0 0 3px 0 #1183d6;
        border-color: #1183d6;
        outline: none;
    } 
`;

export const Searchiconcontainer = styled.div`
   position: relative;
   width: 80px;
   height: 100%;
   margin-left: 20rem;
   padding-top: 62px;
   margin-right: 1rem;
   float: left;
   z-index: 1;

   i {
    font-size: 1.05rem;
    }
   
`;

export const Searchicontextcontainer = styled.div`
   position: relative;
   padding-top: 2px;

   
`;

export const button = styled.button`
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        opacity: 1; 
    } 
    
    &:focus {
        box-shadow: 0 0 3px 0 #1183d6;
        border-color: #1183d6;
        outline: none;
    } 
`