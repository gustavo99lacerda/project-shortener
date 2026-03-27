import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import React from 'react';


const style = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  }
});

interface Props {
  children: React.ReactNode;
}

const Theme = (props: Props) => {
  const { children } = props
  return (
    <MuiThemeProvider theme={style}>
      {children}
    </MuiThemeProvider>
  );
};

export default Theme;
