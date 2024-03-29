import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import ServicioPreview from './servicioPreview';

const Contenedor = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    background: rgb(243, 244, 245);
`;

const ContenedorServicios = styled.div`
    background-color: #333;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    padding: 4rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
    }
    @media (max-width: 500px) {
        width: 100%;
        padding: 1.5rem;
    }
`;

const BannerServicios = () => {

    const query = useStaticQuery(graphql`
        query {
            allStrapiSecciones(filter: {nombre: {eq: "Servicios"}}) {
                nodes {
                    nombre
                    titulo
                    servicios {
                        id
                        nombre
                        descripcion
                        icono {
                            publicURL
                    }
                }
            }
            }
        }
    `);

    const { servicios } = query.allStrapiSecciones.nodes[0];
    return ( 
        <Contenedor>
            <ContenedorServicios>
                {servicios.map( servicio => (
                    <ServicioPreview key={servicio.id} servicio={servicio} />
                ))}
            </ContenedorServicios>
        </Contenedor>
     );
}
 
export default BannerServicios;