import styled from "styled-components";

export const TitleStyled = styled.h1`
  color: blueviolet;
`;

export const InputStyled = styled.input`
  padding: 10px;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
`;

export const SubmitButtonStyled = styled.button`
  width: 100%;
  height: 45px;
  padding: 10px;
  background-color: blueviolet;
  color: white;
  border: none;
  margin: 20px 0;

  &:hover {
    background-color: rgb(98, 23, 168);
    cursor: pointer;
  }
`;

export const FormResponseBoxStyled = styled.div`
  margin: 25px;
`;
