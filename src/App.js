import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News />
      </>
    )
  }
}
