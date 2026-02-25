import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import About from "../About"
import CV from "../CV"
import Home from "../Home"
import styles from "./Navbar.module.css"

const NavBar = () => {
  const pages = [
    { url: "/", text: "LARS HANSEN" },
    { url: "/about", text: "ABOUT" },
    { url: "/cv", text: "CV" },
  ]
  const [activePage, setActivePage] = useState(0)

  return (
    <>
      <nav className={styles.nav}>
        {pages.map(({ url, text }, i) => (
          <Link
            key={i}
            onClick={() => setActivePage(i)}
            className={activePage === i ? styles.linkActive : styles.link}
            to={url}
          >
            {text}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </>
  )
}

export default NavBar
