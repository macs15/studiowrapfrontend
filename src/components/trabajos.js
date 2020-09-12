import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import useFiltro from '../hooks/useFiltro';
import useTrabajos from '../hooks/useTrabajos';
import TrabajoPreview from './trabajoPreview';
import { Alert } from 'react-bootstrap';

const ContenedorTrabajos = styled.div`
    width: 100%;
    height: auto;
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
`;

const ContenedorCards = styled.div`
    .error {
        font-size: 2rem;
    }
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 3rem;
    }
`;

const Trabajos = () => {

    // Obteniendo las imagenes de trabajos
    const resultado = useTrabajos();
    // state de los trabajos, su valor inicial va a ser el que retorna nuestro hook, es decir, la consulta
    const [trabajos] = useState(resultado);
    // filtrado de trabajos-imagenes
    const [filtradas, guardarFiltradas] = useState([]);

    // filtrado de servicios
    const { category, FiltroUI } = useFiltro();

    // los pasamos al state una vez el se cargó el component
    useEffect(() => {
        if(category) {
            const filtro = trabajos.filter( trabajo => trabajo.categorias.nombre === category );
            guardarFiltradas(filtro);
        } else {
            guardarFiltradas(trabajos);
        }
        
        // eslint-disable-next-line
    }, [category]);

    const query = useStaticQuery(graphql`
        query {
            allStrapiTrabajos {
                nodes {
                    nombre
                }
            }
        }
    `);
    const { nombre } = query.allStrapiTrabajos.nodes[0];
    return ( 
        <ContenedorTrabajos>
            <div>
                <h2 css={css`font-weight: 700;`}>{nombre}</h2>
                { FiltroUI() }
            </div>
            <ContenedorCards>
                { (filtradas.length === 0) 
                ?
                    <Alert variant="warning p-4 my-5 error text-center alerta">
                        Desculpe, não há imagens disponíveis nesta categoria... :(
                    </Alert>
                :
                    <ul>
                        {filtradas.map( trabajo => (
                            <TrabajoPreview key={trabajo.id} trabajo={trabajo} />
                        ))}
                    </ul>
                }
            </ContenedorCards>
        </ContenedorTrabajos>
     );
}
 
export default Trabajos;