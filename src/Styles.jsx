import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  height: 3rem;
`;

export const FooterContainer = styled.div`
  background-color: gray;
  color: white;
  border-radius: 10px;
  text-align: center;
  margin: 4px;
`;

export const List = styled.ul`
  list-style: none;
  display: ${(props) => (props.header ? "flex" : "block")};
  ${(props) => props.header && "justify-content: space-evenly"};
  width: 100%;
  color: ${(props) => (props.header ? "white" : "black")};
`;

export const SideBarContainer = styled.div`
  border: 1px solid black;
  margin: 2rem;
  width: 14rem;
  text-align: center;
  background-color: #efefef;
`;
