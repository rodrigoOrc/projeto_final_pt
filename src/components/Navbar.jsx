import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import "./css/Navbar.css"

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> Filmes
                </Link>
            </h2>
            <form>
                <input type="test" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar