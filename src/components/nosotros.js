import React from 'react';
import {graphql, useStaticQuery} from'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';


const NosotrosSection = styled.section`
    height: auto;
    justify-content: center;
    padding: 2rem;
    display: grid;
        grid-template-columns:  1fr;
        align-items: center;

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    h2 {
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        text-align: center;
    }
    p {
        text-align: center;
        padding: 2rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        @media (min-width: 992px) {
            padding: 5rem;
        }
    }
`;

const ImagenBackground = styled(BackgroundImage)`
    height: 300px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
`;




const Nosotros = () => {

    const query = useStaticQuery(graphql`
        query {
            allStrapiSecciones(filter: {nombre: {eq: "nosotros"}}) {
                nodes {
                    titulo
                    contenido
                    imagen {
                    sharp: childImageSharp {
                        fluid( maxWidth: 1200 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
    `);
    const { titulo, imagen, contenido } = query.allStrapiSecciones.nodes[0]
    return (
        <NosotrosSection>
            
            <div className="texto">
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </div>
            <ImagenBackground fluid={imagen.sharp.fluid} />

        </NosotrosSection>
     );
}
 
export default Nosotros;