import type React from "react"
import { VscCode } from "react-icons/vsc"
import { FiLogOut } from "react-icons/fi"
import "./Header.scss"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">

      <nav className="header__nav">
        <a href="/" className="header__brand">
          <VscCode className="header__icon" />
          <span className="header__title">DevConnector</span>
        </a>

        <div className="header__links">
          <a href="/profiles" className="header__link">
            Developers
          </a>
          <a href="/posts" className="header__link">
            Posts
          </a>
          <a href="/" className="header__link">
            Dashboard
          </a>
          <button className="header__logout">
            <FiLogOut className="header__logout-icon" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
      </div>
    </header>
  )
}

export default Header

