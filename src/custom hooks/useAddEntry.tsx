import { useState, useEffect } from "react";
import { WorkLogEntry } from "../types/workLogTypes";

const LOCAL_STORAGE_KEY = "workLogEntries";

export const useAddEntry = () => {
  // either retrieves the data from the local storage or it initializes an empty array
  const getInitialData = () => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : [];
  };

  const [data, setData] = useState<WorkLogEntry[]>(getInitialData);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]); 

  // it adds a new entry to the table
  const addEntry = (entry: WorkLogEntry) => {
    const updatedData = [...data, entry];
    setData(updatedData); 
  };

  // it gets new data
  const getEntries = () => {
    return data;
  };

  return {
    data,
    addEntry,
    getEntries,
  };
};
