import React, { useState, useEffect, useRef } from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/core';
import {Navbar} from 'react-bootstrap';
import styled from '@emotion/styled';
import Scrollspy from 'react-scrollspy';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const HeaderTag = styled(Navbar)`
    width: 100%;
    background: transparent;
    padding: 1rem;
    z-index: 3;
    -webkit-transition: background-color .5s linear;
        -ms-transition: background-color .5s linear;
            transition: background-color .5s linear;
    @media (max-width: 768px) {
        background: #333;
    }
    &.scrolling {
        background-color: #333;
    }
    .navbar-toggler {
        border-color: var(--primario) !important;
        .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255,48,25)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"); 
        }
    }
`;
const ContenedorLinks = styled(Scrollspy)`
    display: flex;
    flex-direction: row;
    .nav-link{
        color: #fff;
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &.nav-scrolling {
            color: var(--primario);
            &:last-of-type {
                border: 1.2px solid #ff3019;
                color: #ff3019;
            }
            &.active {
                color: #fff;
            }
        }
        @media (max-width: 992px) {
            margin-left: 4rem;
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column !important;
        .nav-link {
            color: var(--primario);
            &:last-of-type {
                border: 1.2px solid #ff3019;
                color: #ff3019;
            }
            &.active {
                color: #fff;
            }
        }
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
        const show = window.scrollY > 50;
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
        <HeaderTag id="header" fixed="top" className={`${navBackground ? "scrolling" : ""}`} collapseOnSelect expand="lg">
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
            <ContenedorLinks offset={-90} className="ml-auto" items={ ['inicio', 'nos', 'servicos', 'trabalhos', 'contato']} currentClassName="active">
                <AnchorLink className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} to="/#inicio">Inicio</AnchorLink>
                <AnchorLink className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} to="/#nos">Sobre Nós</AnchorLink>
                <AnchorLink className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} to="/#servicos">Serviços</AnchorLink>
                <AnchorLink className={` nav-link ${navBackground ? "nav-scrolling" : ""}`} to="/#trabalhos">Trabalhos</AnchorLink>
                <AnchorLink className={` btn nav-link ${navBackground ? "nav-scrolling" : ""}`} to="/#contato">Contato</AnchorLink>
            </ContenedorLinks>
        </Navbar.Collapse>
        </HeaderTag>
     );
}
 
export default Header;