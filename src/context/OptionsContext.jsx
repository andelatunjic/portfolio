import React, { createContext, useState } from "react";

const OptionsContext = createContext();

const OptionsProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <OptionsContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </OptionsContext.Provider>
  );
};

const OptionsConsumer = OptionsContext.Consumer;

export { OptionsContext, OptionsProvider, OptionsConsumer };
