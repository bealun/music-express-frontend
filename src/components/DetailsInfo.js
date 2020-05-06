import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RingLoader } from 'react-spinners'
import './DetailStyle.css'

export const DetailsInfo = () => {
  const [song, setSong] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://bealun-express-api.herokuapp.com/song/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log('About:', json)
        setSong(json[0])
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="loadingState">
        <h1>Loading...</h1>
        <RingLoader color="teal" size="80px"/>
      </div>
  }

  return (
    <section>
      <div className="backBtn">
        <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#0b1075"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z"/></svg>
          <span>Go Back</span>
        </Link>
      </div>
      <section className="theDetails">
        <div className="about">
          <h1>This is
          <span className="trackname">{song.trackName}</span> by
          <span className="artist">{song.artistName}</span> and belongs in the
          <span className="genre">{song.genre}</span> genre.</h1>
        </div>
        <div className="nerdInfo">
          <h3>Some Nerd Info:</h3>
          <ul>
            <li>BPM: {song.bpm}</li>
            <li>Acousticness: {song.acousticness}</li>
            <li>Liveness: {song.liveness}</li>
            <li>Danceability: {song.danceability}</li>
          </ul>
        </div>
      </section>
    </section>
  )
}