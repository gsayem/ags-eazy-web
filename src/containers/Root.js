import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../Store/configureStore'
import EasyMyApp from './EasyMyApp'
const store = configureStore()

export default class Root extends Component {
  render() {
   
    return (
      <Provider  store={store}>
        <EasyMyApp />
      </Provider>
    )
  }
}