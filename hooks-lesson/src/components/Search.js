
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results,setResults] = useState([])

  useEffect(()=>{
    // (async () => {
    //   await axios.get(term)
    // })() 
    // calling the function and executing it at the same time 

    // axios.get(term).then((response) => {
    //   console.log(response.data)
    // } )
    // using promises

    const searchWiki = async () => {
      const {data} =  await axios.get("https://en.wikipedia.org/w/api.php",{
        params:{
          action:'query',
          list:'search',
          origin:'*',
          format:'json',
          srsearch:term
        }
      })
      setResults(data.query.search)
    }

    if(term && !results.length){
      searchWiki()
    }else{
      const timeout = setTimeout(() => {
				if (term) {
					searchWiki()
				}
			}, 1000)

			return () => {
				clearTimeout(timeout)
			}
    }
    
    
  },[results.length, term])

  const renderedResults = results.map((res)=>(
    <div key={res.pageid} className="item">
      <div className="right floated content">
        <a href={`https://en.wikipedia.org?curid=${res.pageid}`} className="ui button">Go</a>
      </div>
      <div className="content">
        <div className="header">
          {res.title}
        </div>
        <span dangerouslySetInnerHTML={{__html:res.snippet}} ></span>
      </div>
    </div>
  ))
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input value={term} onChange={e => setTerm(e.target.value)}   type="text" className="input" />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search
