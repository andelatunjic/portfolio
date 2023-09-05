import React, { useState, useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import PropTypes from "prop-types";
import { SearchWrapper, SearchInput } from "./SearchBarStyle";

const SearchBar = ({ placeholder, onValueChange }) => {
  const { darkMode } = useContext(OptionsContext);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onValueChange(value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        dark={darkMode}
        placeholder={placeholder}
        value={searchInput}
        onChange={handleChange}
      />
    </SearchWrapper>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func,
};

export default SearchBar;
