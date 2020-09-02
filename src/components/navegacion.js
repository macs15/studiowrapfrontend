import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: .5rem;
    margin-left: auto;
    justify-content: center;

    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink = styled(AnchorLink)`
    justify-content: flex-end;
    color: #fff;
    font-weight: 400;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1.5rem;
    
    &:last-of-type {
        /* color: #000; */
        margin-right: 0;
        border: 1px solid #9f2f39;
        border-radius: 3px;
        /* background: #9f2f39; */
        padding: .5rem 1rem;
        margin: auto;
    }
    &.pagina-actual {
        border-bottom: 2px solid white;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink to="/#inicio">Inicio</NavLink>
            <NavLink to="/#nos">Sobre Nós</NavLink>
            <NavLink to="/#servicos">Serviços</NavLink>
            <NavLink to="/#trabalhos">Trabalhos</NavLink>
            <NavLink to="/#contato">Contato</NavLink>
        </Nav>
     );
}
 
export default Navegacion;
