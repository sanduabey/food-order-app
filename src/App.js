import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  )
}

export default App
