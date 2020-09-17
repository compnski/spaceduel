import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scene from './Scene'
import { ThemeProvider, createTheme, Arwes, Puffs } from "arwes";
import Chatbox from './Chatbox'
import { languageID } from './lang/config'

function App() {
    return (
        <ThemeProvider theme={createTheme()}>
            <Arwes>
                <h1>SpaceDuel</h1>
                <Puffs style={{ width: '100%', height: 1024 }}>
                    <Scene />
                </Puffs>
                <Chatbox language={languageID}/>
            </Arwes>
        </ThemeProvider>
    );
}



export default App;
