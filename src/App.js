import React, { useState, useEffect } from 'react'
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
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=${gifState.search}&limit=20&rating=g`)
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
  }

  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=cats&limit=20&rating=g')
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1> GIPHY App </h1>
      <Form
        search={gifState.search}
        handleInputChange={gifState.handleInputChange}
        handleSearchGIPHY={gifState.handleSearchGIPHY} />
      {
        gifState.gif.title ? <Card gif={gifState.gif} /> : null
      }
    </>
  )
}

export default App