import React, { useState, useEffect } from 'react'
import GifContext from './utils/GifContext'
import Form from './components/Form'
import Card from './components/Card'
import axios from 'axios'

const App = () => {

  const [gifState, setGifState] = useState({
    search: '',
    gif: {}
  })

  gifState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value })
  }

  gifState.handleSearchGIPHY = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=qfnvI5LFJSbR5wtSwjstDmudmF20pOLC=${gifState.search}&limit=20&rating=g`)
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
  }

  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=qfnvI5LFJSbR5wtSwjstDmudmF20pOLC=cats&limit=20&rating=g')
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>GIPHY App</h1>
      <GifContext.Provider value={gifState}>
        <Form />
        {
          gifState.gif.title ? <Card /> : null
        }
      </GifContext.Provider>
    </>
  )
}

export default App