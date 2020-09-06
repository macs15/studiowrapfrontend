import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'

const ContenedorTrabajos = styled.div`
    width: 100%;
    margin: 0 auto;
    /* background: rgb(243, 244, 245); */
    background: #fff;
    padding: 2rem 10rem;
    h2 {
        font-weight: 700;
    }
    @media (max-width: 650px) {
        padding: 2rem 2rem;
    }
`;

const ContenedorCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 3rem;
    div {
        border-radius: 10px;
        height: 40rem;
        overflow: hidden;
        margin-bottom: 1.5rem;
        transition:  transform .3s;
        &:hover {
            cursor: pointer;
            -ms-transform: scale(1.02); /* IE 9 */
            -webkit-transform: scale(1.02); /* Safari 3-8 */
            transform: scale(1.02); 
        }
        img {
            vertical-align: middle;
            width: 100%;
            background-size: cover;
        }
    }
    
    .column-main {
        flex: 49%;
        max-width: 49%;
    }
    .column-left {
        flex: 24%;
        max-width: 24%;
    }
    .column-right {
        flex: 24%;
        max-width: 24%;
    }
    .column-bottom {
        flex: 100%;
        max-width: 100%
        
    }
    @media screen and (max-width: 992px) {
        .column {
            flex: 49%;
            max-width: 49%;
            &:last-of-type {
                margin-right: 0;
            }
        }
    }
    @media screen and (max-width: 650px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }
`;

const Trabajos = () => {

    const query = useStaticQuery(graphql`
        query {
            allStrapiTrabajos {
                nodes {
                    nombre
                    imagenes {
                        nombre
                        imagen {
                            sharp: childImageSharp {
                                fluid( maxWidth: 1200, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const { nombre, imagenes } = query.allStrapiTrabajos.nodes[0];
    return ( 
        <ContenedorTrabajos>
            <div>
                <h2>{nombre}</h2>
            </div>
            <ContenedorCards>
                <div className="column column-main">
                    <Image fluid={imagenes[0].imagen.sharp.fluid} />
                </div>
                <div className="column column-left">
                    <Image fluid={imagenes[2].imagen.sharp.fluid} />
                </div>
                <div className="column column-right">
                    <Image fluid={imagenes[3].imagen.sharp.fluid} />
                </div>
                <div className="column column-bottom">
                    <Image fluid={imagenes[1].imagen.sharp.fluid} />
                </div>
            </ContenedorCards>
        </ContenedorTrabajos>
     );
}
 
export default Trabajos;