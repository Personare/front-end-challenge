// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import GameContainer from './game/GameContainer'
import './App.css'
import {
  RootContent,
  AppHeader,
  ContentContainer,
  Title,
} from './kit/Layout'


const App = () => (
  <RootContent>
    <AppHeader>
      <Title>Personare Tarot</Title>
    </AppHeader>
    <ContentContainer>
      <Route exact path="/" component={GameContainer} />
    </ContentContainer>
  </RootContent>
)

export default App
