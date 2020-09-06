import React, { useState, useEffect, useRef } from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/core';
import {Navbar, Nav } from 'react-bootstrap';
import styled from '@emotion/styled';

const HeaderTag = styled(Navbar)`
    position: fixed !important;
    width: 100%;
    background: transparent;
    padding: 1rem;
    z-index: 1;
    -webkit-transition: background-color .5s linear;
    -ms-transition: background-color .5s linear;
    transition: background-color .5s linear;
    &.scrolling {
        background-color: rgba(194,33,108,1) !important;
        background-color: -moz-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%) !important;
        background-color: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(194,33,108,1)), color-stop(100%, rgba(245,0,8,1))) !important;
        background-color: -webkit-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%) !important;
        background-color: -o-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%) !important;
        background-color: -ms-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%) !important;
        background-color: linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%) !important;
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2216c', endColorstr='#f50008', GradientType=1 ) !important;

        .nav-scrolling {
            color: #fff !important;
        }
    }
`;
const ContenedorLinks = styled(Nav)`
    .nav-link{
        color: #000 !important;
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        @media (max-width: 992px) {
            margin-left: 4rem;
            margin-bottom: 1rem;
        }
    }
    .scrolling {
        background: #000 !important;
    }
`;

const Header = () => {
    // definimos el state del bg del nav
    const [navBackground, setNavBackground] = useState(false);

    // usamos useRef para obtener la posicion actual
    const navRef = useRef();
    navRef.current = navBackground;
    
    // obtenemos la posicion actual y lo guardamos en el state
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, []);

    // consultar el logo
    const {logo} = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
            publicURL
            }
        }
    `);

    return ( 
        <HeaderTag id="header" className={`${navBackground ? "scrolling" : ""}`} collapseOnSelect expand="lg">
            <Navbar.Brand href="/#inicio">
                <img height="100" css={css`
                        padding: 0;
                        height: 10rem;
                        margin-top: -1.5rem;
                        margin-bottom: -1.5rem;
                        margin-left: 4rem;

                        @media (min-width: 768px) {
                            margin-right: 0;
                        }
                    `} src={logo.publicURL} alt="Logotipo studio wrap"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <ContenedorLinks className="ml-auto">
                <Nav.Link className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} href="/#inicio">Inicio</Nav.Link>
                <Nav.Link className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} href="/#nos">Sobre Nós</Nav.Link>
                <Nav.Link className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} href="/#servicos">Serviços</Nav.Link>
                <Nav.Link className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} href="/#trabalhos">Trabalhos</Nav.Link>
                <Nav.Link className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} href="/#contato">Contato</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#nos">Inicio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </ContenedorLinks>
        </Navbar.Collapse>
        </HeaderTag>
     );
}
 
export default Header;