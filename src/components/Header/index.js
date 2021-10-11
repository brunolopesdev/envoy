import { Link } from "react-router-dom"
import "./index.scss"

export const Header = () => {
    return (

        <div className="x_header">
            <nav className="x_navbar">
                <Link to="/">List Movies</Link>
                <Link to="/add-movie">Add New Movie</Link>
            </nav>
        </div>

    )
}
