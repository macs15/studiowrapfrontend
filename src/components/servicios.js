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
        flex-direction: column;
        align-items: center;
        .img {
            max-width: 50%;
        }
        .texto {
            max-width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            padding: 3rem;
            width: auto;
            @media (max-width: 992px) {
                flex-wrap: wrap;
                flex: 80%;
                max-width: 80%;
            }
            @media (max-width: 790px) {
                flex-wrap: wrap;
                flex: 100%;
                max-width: 100%;
            }
        }
        @media (max-width: 630px) {
            flex-direction: row-reverse;
            .texto {
                flex-direction: column;
                align-items: flex-end;
                font-size: var(--tituloMediaq);
                &:last-of-type {
                    margin-right: 1rem;
                }
            }
            .img {
                padding-left: 2rem;
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
            `}>{nombre}</h2>
            <Contenedor>
                <div className="contenedor-listado">
                    <div className="texto">
                        {serviciosimpresions.map( servicio => (
                            <ServicioOfrecidoPreview key={servicio.id} servicio={servicio} />
                        ))}
                    </div>
                    <div className="img">
                        <img src={icono.publicURL} alt={nombre} />
                    </div>
                </div>
            </Contenedor>
        </div>
     );
}
 
export default Servicios;