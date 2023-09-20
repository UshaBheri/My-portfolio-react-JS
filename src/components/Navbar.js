import "./NavbarStyles.css"

import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [openMenu,setMenu] = useState(false);

    const onHandleClick = () => {
        setMenu(!openMenu);
    }

    const [color,setColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",changeColor);

        return () => {
            window.removeEventListener("scroll",changeColor);
        }
    },[])
    

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to="/">
            <h1>USHA</h1>
        </Link>
        <div className="hamburger" onClick={onHandleClick}>
            {openMenu ? (
                <FaTimes size={20} style={{color:"#fff"}
                }/>
            ):(
                <FaBars size={20} style={{color:"#fff"}
                }/>
            )}
        </div>
        <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/" className="link" onclick={onHandleClick}>Home</Link>
            </li>
            <li>
                <Link to="/about" className="link" onclick={onHandleClick}>About</Link>
            </li>
            <li>
                <Link to="/project" className="link" onclick={onHandleClick}>Project</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar