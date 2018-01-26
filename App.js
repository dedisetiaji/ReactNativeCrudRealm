import React from 'react'

import {View,Text } from 'react-native';
import List from './app/List'
import style from './app/style'
export default class App extends React.Component
{
  render()
  {
    return(
      <View style={style.container}>
          <List />
      </View>
    )
  }
}