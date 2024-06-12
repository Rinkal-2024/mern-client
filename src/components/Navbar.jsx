import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import {iconName} from "react-icons/fa6"


const Navbar = () => {
    const [isMenuOpen, setIsMenuopen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuopen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);

        }
    }, [])

    //navItem

    const navItem = [
        {link: "Home" , path: "/"},
        {link: "About" , path: "/about"},
        {link: "Shop" , path: "/shop"},
        {link: "Sell Your Book" , path: "/admin/dashboard"},
        {link: "blog" , path: "/blog"},
    ]

    return (
        <header>
            <nav>
                <div>
                    <Link to = "">Books</Link>
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar
