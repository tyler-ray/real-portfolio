import React, { Component } from 'react';
import './App.css';
import './components/CSS/reset.css'
import './components/CSS/TopNav.css'
import styled from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Links from './components/Links'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import TopNav from './components/TopNav'

const dark = '#1A252F'
const green = '#18BC9C'
const light = '#2C3E50'

const White = styled.div`
  background-color:white;
  width:100%;
  font-family:'Oswald';
  color:${dark}
`
const Light = styled.div`
  background-color:${light};
  width:100%;
  font-family:'Oswald';
  color:white;
`
const Green = styled.div`
  background-color:${green};
  width:100%;
  font-family:'Oswald';
  color:${dark};
`
const Dark = styled.div`
  background-color:${dark};
  width:100%;
  font-family:'Oswald';
  color:white;
  height:50px;
`


class App extends Component {
  render() {
    return (
      <div className="App">
        <Light>
          <TopNav />
        </Light>
        <Green>
          <Landing />
          <Links />
        </Green>
        <White>
          <Skills />
        </White>
        <Green>
          <Portfolio />
        </Green>
        <White>
          <About />
        </White>
        <Light>
          <Contact />
        </Light>
        <Dark/>


      </div>
    );
  }
}

export default App;
