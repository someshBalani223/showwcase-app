/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import Modal from "react-modal";

import {
  Button,
  CustomModalstyle,
  Div,
  EducationButton,
  Form,
  Input,
  Label,
  OverlayModal,
} from "../styles/modalcomponent.styled";

interface Props {
  click: boolean;
  data: {}[];
  handleClick: (e: any) => void;
  handleChange: (e: any) => void;
  isOpen: () => void;
}
const ModalComponent: React.FC<Props> = ({
  click,
  data,
  handleChange,
  handleClick,
  isOpen,
}) => {
  return (
    <div>
      <EducationButton onClick={isOpen}>Add new education</EducationButton>
      <Div>
        <CustomModalstyle isOpen={click} style={OverlayModal}>
          <h3>New Education Modal</h3>
          <Form onSubmit={handleClick}>
            <div className="row">
              <div className="item">
              <Label>University name:</Label>
                <Input
                  type="text"
                  placeholder="school name"
                  name="schoolName"
                  onChange={handleChange}
                />
              </div>
              <div className="item">
                <Label>Degree:</Label>
                <Input
                  type="text"
                  placeholder="degree"
                  name="degree"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="item">
                <Label>Start year:</Label>
                <Input
                  type="date"
                  placeholder="DD-MM-YYYY"
                  name="startYear"
                  onChange={handleChange}
                />
              </div>
              <div className="item">
                <Label>End year:</Label>
                <Input
                  type="date"
                  placeholder="DD-MM-YYYY"
                  name="endYear"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="item">
                <Label>Grade:</Label>
                <Input
                  type="text"
                  placeholder="grade"
                  name="grade"
                  onChange={handleChange}
                />
              </div>
              <div className="item">
                <Label>Description:</Label>
                <Input
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button type="submit">Save</Button>
          </Form>
        </CustomModalstyle>
      </Div>
    </div>
  );
};

export default ModalComponent;
