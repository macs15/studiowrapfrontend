import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPaginas(filter: {nombre: { eq: "Inicio"} } ) {
                nodes {
                    contenido
                    imagen {
                        sharp: childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    draw {
                        publicURL
                    }
                }
            }
        }
    `);
    return resultado.allStrapiPaginas.nodes.map( inicio => ({
        contenido: inicio.contenido,
        imagen: inicio.imagen,
        draw: inicio.draw
    }));
}
 
export default useInicio;