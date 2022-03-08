import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { default as App } from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ContextComposer>
        <MuiThemeProvider theme={{...theme, direction: 'rtl'}}>
          <App className='app'/>
        </MuiThemeProvider>
    </ContextComposer>
  </React.StrictMode>,
  document.getElementById('root')
)
