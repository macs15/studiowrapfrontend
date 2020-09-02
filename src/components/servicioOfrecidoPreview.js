import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.li`
    margin-right: 2rem;
    &:last-of-type {
        margin-right: 0;
        @media (max-width: 630px) {
            margin-right: 2rem;
        }
    }
    &:nth-of-type(odd) {
        color: var(--primario);
    }
    h3 {
        white-space: nowrap;
    }
    
`;
const ServicioOfrecidoPreview = ({servicio}) => {
    const { nombre } = servicio;

    return ( 
        <Contenedor>
            <h3> &nbsp; {nombre}</h3>
        </Contenedor>
     );
}
 
export default ServicioOfrecidoPreview;