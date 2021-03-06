import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from 'react-spinners'
import './ListStyle.css'

export const PopularSongs = () => {
  const [songs, setSongs] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://bealun-express-api.herokuapp.com/song`)
      .then(res => res.json())
      .then(json => {
        console.log('This is data:', json)
        setSongs(json)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loadingState">
        <h1>Loading...</h1>
        <RingLoader color="teal" size="80px"/>
      </div>
  }

  return (
    // <main>
      <div className="listContent">
        {songs.map(song => (
          <section className="songs">
          <Link to={`/song/${song.id}`} key={song.id}>

            <div className="itemInfo">
              <h4>{song.trackName}</h4>
              <h5>{song.artistName}</h5>
            </div>

            <div className="detailsInfo">
              <p>Genre: {song.genre}</p>
              <p>Popularity: {song.popularity}</p>
            </div>
            
          </Link>
          </section>
        ))}
      </div>
    // </main>
  )
}