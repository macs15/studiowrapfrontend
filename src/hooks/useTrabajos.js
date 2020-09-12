import { graphql, useStaticQuery } from 'gatsby';

const useTrabajos = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiImagenes {
                nodes {
                    id
                    nombre
                    imagen {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    categorias {
                    nombre
                    }
                }
            }
        }
    `);

    return datos.allStrapiImagenes.nodes.map( trabajo => ({
        nombre: trabajo.nombre,
        imagen: trabajo.imagen,
        id: trabajo.id,
        categorias: trabajo.categorias
    })) 
    
}
 
export default useTrabajos;