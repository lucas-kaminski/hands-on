import { useColorModeValue } from "@chakra-ui/react";
import React, { createContext, useContext, useState } from "react";

const darkBackgroundColor = "#171717";
const darkFontColor = "#EDEDED";

const lightBackgroundColor = "#EDEDED";
const lightFontColor = "#171717";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const backgroundColor = useColorModeValue(
    lightBackgroundColor,
    darkBackgroundColor
  );
  const fontColor = useColorModeValue(lightFontColor, darkFontColor);

  return (
    <ThemeContext.Provider value={{ backgroundColor, fontColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext, ThemeContextProvider };
