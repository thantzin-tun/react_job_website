import React, { useEffect, useState } from 'react';
import './App.css';
import { FabScrollButton, GlobalStyle } from 'theme';
import { useThemeHook } from 'hook';
import * as theme from 'theme'

import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from 'router/configRoute';
import { FooterCom, HeaderCom, Loading } from 'components';
import { SearchParamsProvider } from 'hook'


let darkTheme = { ...theme, color: theme.Dark }
let lightTheme = { ...theme, color: theme.Light }


function App() {

  const { ThemeContext, set_theme_mode, get_theme_mode } = useThemeHook();
  const [mode, setMode] = useState(get_theme_mode());
  
  const positionRef = React.useRef<HTMLDivElement>(null);

  // const toogleMode = () => {
  //   set_theme_mode(
  //     mode === "light" ? "dark" : "light"
  //   )
  //   setMode(get_theme_mode());
  // }
  // useEffect(() => {
  //   setMode(get_theme_mode());
  // }, [mode])

  const scrollToTop = () => {
    const scrollTopPixel = positionRef.current?.offsetTop;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeContext theme={mode === "light" ? lightTheme : darkTheme}>
          {/* <Loading /> */}
          <SearchParamsProvider>
            <FabScrollButton onClick={scrollToTop} ref={positionRef}>
                <i className="fa fa-caret-up" />
            </FabScrollButton>
          <HeaderCom id="header"/>
              <AppRoute />
          <FooterCom />
          </SearchParamsProvider>
        </ThemeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
