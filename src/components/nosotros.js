import React from 'react';
import {graphql, useStaticQuery} from'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { Parallax } from 'react-scroll-parallax';
import useParallax from '../hooks/useParallax';


const NosotrosSection = styled.section`
    width: 90%;
    max-width: 1200px;
    position: relative;
    overflow: visible;
    margin: auto;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;

    h2 {
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        padding: 0;
        margin: 0;
        .container-texto {
            position: static;
            .parallax-inner {
                -webkit-transition: none !important;
                -moz-transition: none !important;
                -o-transition: none !important;
                transition: none !important;
            }
        }
    }
    .container-texto {
        z-index: 1;
    }
`;
const TextContainer = styled.div`
    position: relative;
    width: 50%;
    z-index: 1;
    top: -20px;
    border-radius: 15px;
    padding: 2rem 2.5rem;
    background: rgba(3,3,3,.9);
    p {
        color: #fff;
        font-weight: 400;
        font-size: 1.8rem;
    }
    
    @media (max-width: 768px) {
        position: static;
        width: 100%;
        margin: 0 auto;
        background-color: transparent;
        p {
            color: #000;
            font-size: 1.6rem;
            line-height: 1.5;
            text-align: center;
        }
    }
`;

const ContainerBG = styled.div`
    top: -120px;
    right: 10%;
    position: absolute;
    z-index: 0;
    width: 70%;
    height: 450px;
    @media (max-width: 768px) {
        position: static;
        width: 90%;
        margin: auto;
        height: 300px;
        padding-bottom: 2rem;
    }
`;
const ImagenBackground = styled(BackgroundImage)`
    background-repeat: no-repeat;
    background-size: cover;
    vertical-align: top;
    width: 100%;
    height: 100%;
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
    const { titulo, imagen, contenido } = query.allStrapiSecciones.nodes[0];

    const { isDisable } = useParallax();
    return (
        <NosotrosSection>
            
            <Parallax
                className="container-texto"
                y={['200px', '-140px' ]}
                tagOuter="figure"
                disabled={isDisable}
            >
                <TextContainer className="texto">
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                </TextContainer>
            </Parallax>
            <ContainerBG>
                <ImagenBackground fluid={imagen.sharp.fluid} />
            </ContainerBG>

        </NosotrosSection>
     );
}
 
export default Nosotros;