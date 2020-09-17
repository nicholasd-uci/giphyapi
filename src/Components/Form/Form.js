import React from 'react'

const Form = props => {
  
  return (
    <form>
      <p>
        <label htmlFor="search">search</label>
        <input
          type="text"
          name="search"
          value={props.search}
          onChange={props.handleInputChange} />
      </p>
      <p>
        <button onClick={props.handleSearchGIPHY}>Search GIPHY</button>
      </p>
    </form>
  )
}

export default Form