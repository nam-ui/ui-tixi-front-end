import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { AiFillLike, FiClock } from 'react-icons/all'

function Movie() {
    return (
        < Grid item xs={3} >
            {/* <svg xmlnsXlink="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="80px" height="80px" viewBox="0 0 128 128" xmlSpace="preserve"><rect x="0" y="0" width="100%" height="100%" fill="#171D22" /><g><path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0 1 29.7-8.2zm4.2 7.7L64.64.2A63.32 63.32 0 0 1 94.44 8zm-.08 8.86l16-59.5a63.32 63.32 0 0 1 21.94 21.6zm-4.5 7.6l43.62-43.5a63.32 63.32 0 0 1 8.17 29.7zm-7.7 4.4l59.56-15.9a63.32 63.32 0 0 1-7.78 29.8zm-8.86-.1l59.56 16a63.32 63.32 0 0 1-21.66 22zM51.8 76l43.58 43.63a63.32 63.32 0 0 1-29.72 8.17zm-4.36-7.7l15.92 59.6a63.32 63.32 0 0 1-29.82-7.8zm.1-8.83l-16 59.55A63.3 63.3 0 0 1 9.6 97.3zm4.5-7.62L8.44 95.4a63.32 63.32 0 0 1-8.2-29.72zm7.7-4.33L.16 63.36a63.32 63.32 0 0 1 7.8-29.8zm8.85.1L9 31.56A63.32 63.32 0 0 1 30.68 9.6z" fill="#e4d804" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="30 64 64" dur="500ms" repeatCount="indefinite" /></g></svg> */}
            <div className={"movie-box"}>
                <div className={"movie-poster"}>
                    <Link to="/">
                        <img src="https://thumbnails.cbsig.net/_x/w370/CBS_Production_Entertainment_VMS/SOTR_SAlone_Poster_1400x2100.jpg" alt="image"  />
                    </Link>
                </div>
                <div className={"movie-content"}>
                    <div className="top">
                        <h5 className="title"><a href="/">Women's Day</a></h5>
                        <span className="date">2021</span>
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><span className="quality">HD</span></li>
                            <li>
                                <span className="duration"><FiClock ></FiClock> 128 min</span>
                                <span className="rating"><AiFillLike ></AiFillLike> 3.5</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Grid >
    )
}

export default Movie
