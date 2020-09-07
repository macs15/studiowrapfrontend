import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ServicioOfrecidoPreview from './servicioOfrecidoPreview';
import {css} from '@emotion/core';
import styled from '@emotion/styled';

const Contenedor = styled.ul`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 2rem;

    .contenedor-listado {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-around;
        margin-top: 3rem;
        .img {
            max-width: 50%;
        }
        .texto {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: 40%;
            padding-left: 1rem;
            li {
                display: block;
                width: 100%;
                padding: 1rem;
            }
            li:nth-of-type(odd) {
                color: #fff;
                border-radius: 10px 0px 0px 10px;
                background: rgba(194,33,108,1);
                background: -moz-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
                background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(194,33,108,1)), color-stop(100%, rgba(245,0,8,1)));
                background: -webkit-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
                background: -o-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
                background: -ms-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
                background: linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2216c', endColorstr='#f50008', GradientType=1 );
            }
            @media (max-width: 790px) {
                flex-wrap: wrap;
                li {                    
                    font-size: var(--tituloMediaq);
                }
            }
            @media (min-width: 790px) {

                li {
                    &:hover {
                        color: #fff;
                        border-radius: 10px 0px 0px 10px;
                        cursor: pointer;
                        background: var(--primario);
                    }
                }
            }
        }
        @media (max-width: 630px) {
            flex-direction: row-reverse;
            flex-wrap: wrap;
            .texto {
                flex-direction: column;
                align-items: flex-end;
                font-size: var(--tituloMediaq);
                padding: 0;
                &:last-of-type {
                    margin-right: 1rem;
                }
                li {
                    padding: 0 !important;
                    background: transparent !important;

                }
                li:nth-of-type(odd) {
                    color: var(--primario) !important;
                    background: transparent !important;

                }
            }
            .img {
                padding-left: .5rem;
            }
        }
        @media (max-width: 630px) {
            .texto {
                h3 {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;

const Servicios = () => {
    const query = useStaticQuery(graphql`
        query {
            allStrapiSerivciosOfrecidos {
                nodes {
                    nombre
                    icono {
                    publicURL
                    }
                    serviciosimpresions {
                    id
                    nombre
                    }
                }
            }
        }
    `);
    const {nombre, icono, serviciosimpresions} = query.allStrapiSerivciosOfrecidos.nodes[0];

    return (
        <div>
            <h2 css={css`
                padding-top: 3rem;
                font-weight: 700;
            `}>{nombre}</h2>
            <Contenedor>
                <div className="contenedor-listado">
                    <ul className="texto">
                        {serviciosimpresions.map( servicio => (
                            <ServicioOfrecidoPreview key={servicio.id} servicio={servicio} />
                        ))}
                    </ul>
                    <div className="img">
                        <img src={icono.publicURL} alt={nombre} />
                    </div>
                </div>
            </Contenedor>
        </div>
     );
}

export default Servicios;