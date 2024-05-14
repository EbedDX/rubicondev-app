import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Preview() {

    let { type, id } = useParams();
    let [ titleData, setTitleData ] = useState ({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=bc7409f260688f7f0e95971db93da8a1&append_to_response=videos`).then (function(response) {
            setTitleData(response.data)
        })
    }, [])

    return (
        <>
        <div className="large-container">

            <img className="normal-image-poster" src={`https://image.tmdb.org/t/p/w500/${titleData.poster_path}`}/>
            
            <div className="details">

                <div className="name">
                    {titleData.name || titleData.title}
                </div>

                <div className="date">
                    Released: {titleData.first_air_date || titleData.release_date}
                </div>

                <div className="data-overview">
                    {titleData.overview}
                </div>

                {type == "tv" &&  <div className="ep-seasons-info">
                    <div className="seasons">Seasons: <b>{titleData.number_of_seasons}</b></div>
                    <div className="episodes">Episodes: <b>{titleData.number_of_episodes}</b></div>
                </div>}

                {titleData.videos && <embed 
                width="640" 
                height="360" 
                src={`https://www.youtube.com/embed/${titleData.videos.results[0].key}`} 
                title="YouTube video player" 
                frameorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></embed>}

            </div>
        </div>
        </>
    );
}

export default Preview