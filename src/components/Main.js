import { useEffect, useState } from "react"
import Title from "./Title"
import axios from "axios"

function Main(props) {
    
    let [ dataFromApi, setDataFromApi ] = useState ([ ]);

    useEffect(() => {

        console.log(props)

        if (props.searchString.length < 3) {
        axios.get(`https://api.themoviedb.org/3/${props.searchSection}/top_rated?api_key=bc7409f260688f7f0e95971db93da8a1`).then(function(response) {
            setDataFromApi(response.data.results.slice(0, 10))
        })
    } else {
        axios.get(`https://api.themoviedb.org/3/search/${props.searchSection}?query=${props.searchString}&include_adult=false&api_key=bc7409f260688f7f0e95971db93da8a1`).then (function(response) {
            setDataFromApi(response.data.results.slice(0, 10))
            })
        }
    
    }, [ props.searchString, props.searchSection ])

    return (
        <div className="main-container">
            {
                dataFromApi.map(function (item) {
                    return <Title
                                id={item.id}
                                title={item.name || item.title}
                                type={props.searchSection}
                                image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                                key={item.id} />
                })
            }
        </div>
    )
}

export default Main