import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ServicioOfrecidoPreview from './servicioOfrecidoPreview';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import { Accordion } from 'react-bootstrap';

const Contenedor = styled.div`
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
            max-width: 35%;
        }
        .texto {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            width: 55%;
            padding-left: 1rem;
            .contenedor {
                display: block;
                width: 100%;
                span {
                    color: #000;
                }
            }
            .contenedor {
                margin-bottom: .5rem;
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
                span {
                    color: #fff;
                }
            }
            @media (max-width: 790px) {
                flex-wrap: wrap;
                .contenedor {                    
                    font-size: var(--tituloMediaq);
                }
            }
            @media (min-width: 790px) {

                .contenedor {
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
            flex-direction: column-reverse;
            flex-wrap: wrap;
            .texto {
                margin-top: 1rem;
                flex-direction: column;
                align-items: flex-end;
                font-size: var(--tituloMediaq);
                padding: 1rem;
                width: 80%;
                &:last-of-type {
                    margin-right: 1rem;
                }
                li {
                    padding: 0 !important;
                }
                li:nth-of-type(odd) {
                    color: var(--primario) !important;
                }
            }
            .img {
                padding-left: .5rem;
                img {
                    background-size: cover;
                }
            }
        }
        @media (max-width: 630px) {
            .texto {
                button {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;

const Servicios = () => {

    const [activeId, setActiveId] = useState(0);

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
                        descripcion
                        imagen {
                            publicURL
                        }
                    }
                }
            }
        }
    `);
    
    function handlerChange(newValue) {
        setActiveId(newValue);
    }

    const {nombre, icono, serviciosimpresions} = query.allStrapiSerivciosOfrecidos.nodes[0];
    return (
        <div>
            <h2 css={css`
                padding-top: 3rem;
                font-weight: 700;
            `}>{nombre}</h2>
            <Contenedor>
                <div className="contenedor-listado">
                    <Accordion className="texto" defaultActiveKey={1}>
                        {serviciosimpresions.map( servicio => (
                            <ServicioOfrecidoPreview key={servicio.id} servicio={servicio} onChange={handlerChange} activeId={activeId} />
                        ))}
                    </Accordion>
                    <div className="img">
                        <img src={icono.publicURL} alt={nombre} />
                    </div>
                </div>
            </Contenedor>
        </div>
     );
}

export default Servicios;