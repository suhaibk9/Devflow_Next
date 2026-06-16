import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import React from "react";

const ThemeProvider = ({
  children,
  ...props
}: ThemeProviderProps & {
  children: React.ReactNode;
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
