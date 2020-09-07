import React from 'react';
import styled from '@emotion/styled';

const ContenedorCards = styled.div`
    width: 95%;
    margin: 0 auto;
    div {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .titulo {
            color: #fff;
            margin-top: 2rem;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            font-size: 1.8rem;
        }
        .texto {
            color: #ccc;
            text-align: center;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 500px) {
        width: 100%;
        padding: 0;
        margin: 0;
        div {
            width: 100%;
            .texto {
                width: 100%;
                padding: 0%;
            }
            .titulo {
                font-size: 1.6rem;
            }
            img {
                width:65px;
            }
        }
    }
`;

const ServicioPreview = ({servicio}) => {

    const {icono, nombre, descripcion} = servicio;
    return ( 
        <ContenedorCards>
            <div>
                <img width="80" src={icono.publicURL} alt="icono servicio"/>
                <p className="titulo">{nombre}</p>
                <p className="texto">{descripcion}</p>
            </div>
        </ContenedorCards>
    );
}
 
export default ServicioPreview;