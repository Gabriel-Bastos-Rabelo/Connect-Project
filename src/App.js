
import Button from '@mui/material/Button';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import {theme} from './theme'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Container, Stack, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
      palette:{
          mode: mode,
      },
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      
      <Navbar mode={mode}/>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
      
    </Box>
    </ThemeProvider>
   
  );
}

export default App;

