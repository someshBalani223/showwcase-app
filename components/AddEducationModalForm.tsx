import React, { useState, useCallback } from "react";

import debounce from "lodash/debounce";
import {
  Button,
  CustomModalstyle,
  Div,
  ErrorMessage,
  Form,
  Label,
  OverlayModal,
} from "../styles/addEducationModalForm.styled";
import { getDate } from "../utils";
import { Input } from "../styles/common.styled";
import { Education } from "../interfaces";
import { useGetUniversitiesHook } from "../customHooks/university";
import SearchInput from "../components/SearchInput";

interface Props {
  onSubmit: (education: Education) => void;
  isOpen: boolean;
  closeModal: () => void;
}

const initialData = {
  id: "",
  schoolName: "",
  degree: "",
  startYear: "",
  endYear: "",
  grade: "",
  description: "",
};

const AddEducationModalForm: React.FC<Props> = ({ onSubmit, isOpen, closeModal }) => {
  const [education, addEducationDetail] = useState<Education>(initialData);
  const [error, setError] = useState(false);
  const { schoolName, degree, description, startYear, endYear, grade } =
    education;
  const startDate = getDate(startYear);
  const endDate = getDate(endYear);
  const { loading, universities, searchUniversity, clearUniversity } = useGetUniversitiesHook();

  const debouncedSave = useCallback(debounce((value) => getUniversitySuggestions(value), 500), []);

  const getUniversitySuggestions = async (text: string) => {
    if (text && text.trim().length > 0) {
      searchUniversity(text);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addEducationDetail({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(!schoolName || !degree || !description  || !startYear || !endYear || !grade || startDate >= endDate) {
      setError(true);
    } else {
      onSubmit(education);
    }
  };

  const universitySelected = (university: string) => {
    addEducationDetail({ ...education, schoolName: university });
    clearUniversity();
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
              <SearchInput 
                loading={loading}
                options={universities}
                onChange={debouncedSave}
                onSelection={universitySelected}
                placeholder="University Name"
              />
              {!schoolName && error && (
                <ErrorMessage>
                  University name is required
                </ErrorMessage>
              )}
            </div>
            <div className="item">
              <Label>Degree:</Label>
              <Input
                type="text"
                placeholder="degree"
                name="degree"
                onChange={handleChange}
              />
              {!degree && error && (
                <ErrorMessage>
                  Degree is required
                </ErrorMessage>
              )}
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
              {!startYear && error && (
                <ErrorMessage>
                  Start Year is required
                </ErrorMessage>
              )}
            </div>
            <div className="item">
              <Label>End year:</Label>
              <Input
                type="date"
                placeholder="DD-MM-YYYY"
                name="endYear"
                onChange={handleChange}
              />
              {!endYear && error && (
                <ErrorMessage>
                  End Year is required
                </ErrorMessage>
              )}
              {startDate >= endDate && error && (
                <ErrorMessage>
                  Please enter correct End date
                </ErrorMessage>
              )}
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
              {!grade && error && (
                <ErrorMessage>
                  Grade is required
                </ErrorMessage>
              )}
            </div>
            <div className="item">
              <Label>Description:</Label>
              <Input
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
              {!description && error && (
                <ErrorMessage>
                  Description is required
                </ErrorMessage>
              )}
            </div>
          </div>
          <Button type="submit">Save</Button>
        </Form>
      </CustomModalstyle>
    </Div>
  );
};

export default AddEducationModalForm;
