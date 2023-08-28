import React, { createContext, useState } from "react";

const OptionsContext = createContext();

const OptionsProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  return (
    <OptionsContext.Provider
      value={{ darkMode, setDarkMode, authUser, setAuthUser }}
    >
      {props.children}
    </OptionsContext.Provider>
  );
};

const OptionsConsumer = OptionsContext.Consumer;

export { OptionsContext, OptionsProvider, OptionsConsumer };
