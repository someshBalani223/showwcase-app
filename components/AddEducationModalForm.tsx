import React, { useState } from "react";
import {
  Button,
  CustomModalstyle,
  Div,
  Form,
  Input,
  Label,
  OverlayModal,
} from "../styles/addEducationModalForm.styled";
import { Education } from "../interfaces";

interface Props {
  onSubmit: (education: Education) => void;
  isOpen: boolean;
  closeModal: () => void;
}

const initialData = {
  id: '',
  schoolName: '',
  degree: '',
  startYear: '',
  endYear: '',
  grade: '',
  description: '',
}

const AddEducationModalForm: React.FC<Props> = ({ onSubmit, isOpen, closeModal }) => {
  const [education, addEducationDetail] = useState<Education>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addEducationDetail({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(education);
  }
  
  return (
    <Div>
      <CustomModalstyle
        isOpen={isOpen}
        style={OverlayModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <h3>New Education Modal</h3>
        <Form onSubmit={handleSubmit}>
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
  );
};

export default AddEducationModalForm;
