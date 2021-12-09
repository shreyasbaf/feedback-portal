import styled from "styled-components";

export const Logo = styled.img`
  width: 186px;
  height: 86px;
  @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonHolders = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 25px;
  margin: 20px 15px 15px 15px;
`;
