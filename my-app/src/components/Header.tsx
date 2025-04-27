import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Header() {
    return(
        <header>
            <div className="test">
                <img src="" alt="" />
                <span className="user-name">Name</span>
            </div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/repositories">Репозитории</Link>
            </nav>
            
        </header> 
    );
}