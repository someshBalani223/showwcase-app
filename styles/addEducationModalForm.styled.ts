import Modal from "react-modal";
import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  margin:80px;
  font-size:18px;
`;

export const Label = styled.label`
  margin-top:15px;
  float:left;
`


export const Div=styled.div`
  max-width: 50px;
`;

export const CustomModalstyle = styled(Modal)`
  width: 50%;
  background: white;
  padding:5px;
  margin: auto;
  margin-top: 4%;
  text-align: center;
  form {
    padding:5%;
    margin-top:50px;
    font-size: 16px;
    margin:auto;

  }
  form .row{
    display:flex;
  }
  .item{
    margin:0px 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: baseline;
  }
`;

export const OverlayModal = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:  "rgba(128, 128, 128, 0.7)",
  },
};

export const EducationButton = styled.button`
  background-color: grey;
  border: none;
  color: black;
  padding: 15px 15px;
  font-size: 15px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: grey;
  border: none;
  color: black;
  padding: 18px 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 90%;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;