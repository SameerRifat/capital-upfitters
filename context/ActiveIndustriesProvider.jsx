"use client";

import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const ActiveIndustryContext = createContext(null);

const ActiveIdustryProvider = ({children}) => {
  const [activeIndustry, setActiveIndustry] = useState("automotive");

  useEffect(() => {
    const storedIndustry = window.localStorage.getItem("activeIndustry");
    if (storedIndustry) {
      setActiveIndustry(storedIndustry);
    }
  }, []);

  return (
    <ActiveIndustryContext.Provider
      value={{
        activeIndustry,
        setActiveIndustry,
      }}
    >
      {children}
    </ActiveIndustryContext.Provider>
  );
};

export default ActiveIdustryProvider;

export function useActiveIndustryContext() {
    const context = useContext(ActiveIndustryContext);
    return context;
}
