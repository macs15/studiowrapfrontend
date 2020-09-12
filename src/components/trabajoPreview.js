import React from 'react';
import styled from '@emotion/styled';
import ModalImage from "react-modal-image";


const Trabajo = styled.li`
    display: flex;
    flex: 33%;
    max-width: 33%;
    margin-right: .3rem;
    margin-bottom: .3rem;

    &:last-of-type {
        margin-right: 0;
    }
    @media (max-width: 992px) {
        flex: 49%;
        max-width: 49%;
    }
    @media (max-width: 700px) {
        flex: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
    }
`;
const Imagen = styled(ModalImage)`
    width: 100%;
    vertical-align: middle;
    object-fit: cover;
    background-size: cover;
    height: 400px;
`;

const TrabajoPreview = ({trabajo}) => {


    // extraer los datos
    const {imagen, nombre} = trabajo;


    return ( 
        <Trabajo>
            <Imagen
                small={imagen.sharp.fluid.src}
                large={imagen.sharp.fluid.src}
                alt={nombre}
            />
        </Trabajo>
     );
}
 
export default TrabajoPreview;