import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <ul className='nav-container'>
                <li>
                    <Link to="/1">
                        <span>
                        </span>
                        tos
                    </Link>
                </li>

                <li>
                    <Link to="/2">
                        <span>
                        </span>
                        timelines
                    </Link>
                </li>
                <li>
                    <Link to="/3">
                        <span>
                        </span>
                        reusable & props
                    </Link>
                </li>
                <li>
                    <Link to="/4">
                        <span>
                        </span>
                        keyframes
                    </Link>
                </li>

                <li>
                    <Link to="/testing">
                        <span>
                        </span>
                        Testing
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

