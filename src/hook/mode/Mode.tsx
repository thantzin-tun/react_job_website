import React from "react";
import { ThemeProvider } from "styled-components";
import { get_theme_mode, set_theme_mode } from "service";

export const ThemeContext = ({ children,theme }: any) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export const useThemeHook = () => {
    return {
        set_theme_mode,
        ThemeContext,
        get_theme_mode
    }
}

