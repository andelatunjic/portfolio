import React, { createContext, useState } from "react";

const OptionsContext = createContext();

const OptionsProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("english");

  return (
    <OptionsContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      {props.children}
    </OptionsContext.Provider>
  );
};

const OptionsConsumer = OptionsContext.Consumer;

export { OptionsContext, OptionsProvider, OptionsConsumer };
