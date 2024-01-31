import { useState, useEffect } from 'react';
import logo from '../assets/eicode.png';
import './Navbar.css';

export default function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 998);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 998);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // function handleMenu() {
  //   console.log('click');
  //   setIsMenuOpen(!isMenuOpen);
  // }

  function handleContactUs() {
    const email = 'eicode@example.com';
    const mailtoLink = `mailto:${email}?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email`;
    window.location.href = mailtoLink;
  }

  const largeScreenVersion = (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 ">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img src={logo} alt="Logo" className="logoImg" />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 navMenu">
            <li className="li-items px-3">
              <a className="navmenulink" aria-current="page" href="#AboutUs">
                Sobre nós
              </a>
            </li>
            <li className="li-items px-3">
              <a className="navmenulink" aria-current="page" href="#Projetos">
                Projetos
              </a>
            </li>
            <li className="li-items px-3">
              <a className="navmenulink" aria-current="page" href="#Parcerias">
                Parcerias
              </a>
            </li>
            <li className="li-items px-3">
              <a className="navmenulink" aria-current="page" href="#contato">
                Contato
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button className="navbtn" onClick={handleContactUs}>
              Fale com a gente!
            </button>
          </div>
        </header>
      </div>
    </>
  );

  // Small Screen Version
  const smallScreenVersion = (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 headerContainer">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img src={logo} alt="Logo" className="logoImg" />
            </a>
          </div>

          <div className="dropdown ms-auto">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list navMenuIcon"
                viewBox="0 0 16 16"
              >
                <path
                  fill="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                ></path>
              </svg>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#AboutUs">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Projetos">
                  Projetos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#Parcerias">
                  Parcerias
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );

  return isSmallScreen ? smallScreenVersion : largeScreenVersion;
}
