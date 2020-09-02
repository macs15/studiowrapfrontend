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
            margin-top: 2rem;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            font-size: 1.8rem;
            @media (max-width: 768px) {
                font-size: var(--tituloMediaq);
            }
        }
        .texto {
            color: #999;
            text-align: center;
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