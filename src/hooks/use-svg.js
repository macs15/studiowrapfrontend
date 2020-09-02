import { graphql, useStaticQuery } from 'gatsby';

const useSvg = () => {

    const resultado = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {eq: "svg"}}) {
                nodes {
                    publicURL
                }
            }
        }
    `);
    return resultado.allFile.nodes;
    
}
 
export default useSvg;