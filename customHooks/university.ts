import React, { useState } from "react";
import { University } from "../interfaces";
import { get } from "../services/api"

interface GetUniversitiesHookResponse {
  loading: boolean;
  universities: University[];
  searchUniversity: (text: string) => void;
  clearUniversity: () => void;
}

const getSuggestions = async (word: string): Promise<University[]> => {
  try {
    const result = await get(`/search?name=${word}`);
    return result;
  } catch (error) {
    console.error('Got Error: ', error);
    return [];
  }
};

export const useGetUniversitiesHook = (): GetUniversitiesHookResponse => {
  const [loading, setLoading] = useState(false);
  const [universities, addUniversities] = useState<University[]>([]);

  const searchUniversity = async (searchText: string) => {
    setLoading(true);

    try {
      const data = await getSuggestions(searchText);
      addUniversities(data);
    } catch (error) {
      console.log('Got error in fetching university data: ', error);
    }
    
    setLoading(false);
  }

  const clearUniversity = () => {
    addUniversities([]);
  }

  return {
    loading,
    universities,
    searchUniversity,
    clearUniversity,
  };
}
  