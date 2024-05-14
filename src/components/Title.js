import { Link } from "react-router-dom"

function Title(props) {

    return (
        <Link to={`/preview/${props.type}/${props.id}`}>
            <div className="movie">
                <img src={props.image} />
                <div className="movie-title">
                    <h3>{props.title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Title