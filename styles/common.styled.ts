import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  font-size: 20px;
  text-align: center;
`;

export const Text = styled.p`
color: black;
`;

export const Button = styled.button`
  background-color: grey;
  border: none;
  color: black;
  padding: 15px 15px;
  font-size: 15px;
  cursor: pointer;
`;

export const BoxContainer = styled.div`
  height:321px;
  width: 50%;
  background-color: grey;
  padding: 50px;
  margin-top: 59px;
  margin-left:24%;
`;

export const SidePanel = styled.div`
  height: 50%;
  width: 160px;
  position: fixed;
  top: 0;
  background-color: grey;
  padding-top: 20px;
  margin-top: 169px;
  margin-left:10%;
`;

export const H5=styled.h5`
  text-align:center;
  margin-top:1px;
`

export const Input=styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 1px;
  height: 30px;
  width: 100%;
  box-shadow: 3px 3px grey;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`;
