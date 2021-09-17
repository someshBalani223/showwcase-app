import axios from "axios";

const url = axios.create({
  baseURL: "http://universities.hipolabs.com/",
});

export const getApiSuggestions = (word: string):any => {
  const result = url
    .get(`/search?name=${word}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return result;
};
