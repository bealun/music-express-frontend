import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const DetailsInfo = () => {
  const [song, setSong] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://bealun-express-api.herokuapp.com/song/${id}`)
      .then(res => res.json())
      .then(json => {
        setSong(json)
      })
  }, [id])

  return (
    <section>
      <div>
        <Link to="/">
          <span>Go Back</span>
        </Link>
      </div>

      <div className="about">
      <h1>{song.trackName}</h1>
      </div>
    </section>
  )
}