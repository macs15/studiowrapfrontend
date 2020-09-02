import React from 'react';
import useSvg from '../hooks/use-svg';
import heroCSS from '../css/hero.module.css';
import styled from '@emotion/styled';
import useInicio from '../hooks/use-inicio';


const Contenedor = styled.div`
   height: 100vh;
   position: relative;
   z-index: -1;
   padding-top: 7rem;
   .wave {
        flex: 100%;
        max-width: 100%;
        width: 100%;
        height: auto;
        img {
            position: absolute;
            bottom: 0%;
            z-index: 0;
        }
    }
`;
const Contenido = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    .draw {
        flex: 40%;
        max-width: 40%;
        display: inline-block;
        padding: 1rem;
        z-index:1;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .titulo {
        flex: 60%;
        max-width: 60%;
        height: 70%;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        h1 {
            font-weight: 700;
            display: inline-block;
        }
        h4 {
            color: var(--primario);
            display: inline-block;
            padding: 4rem;
        }
    }
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        align-items: center;
        .titulo {
            width: 100%;
            justify-content: flex-start;
        }
        .draw {
            width: 100%;
        }
    }
`;

const SeccionPrincipal = () => {

    // Extraemos los svg
    const files = useSvg();
    const anuncio = useInicio();
    const {draw} = anuncio[0];
    
    return ( 
        <Contenedor>
            <Contenido>
                <div className="titulo">
                    <h1 className={heroCSS.titulo}>Comunicação Visual</h1>
                </div>
                <div className="draw">
                    <img src={draw.publicURL} alt="" /> {/* draw */}
                </div>
            </Contenido>
            <div className="wave">
                    <img src={files[1].publicURL} alt=""/> {/* waves */}
            </div>
        </Contenedor>
     );
}
 
export default SeccionPrincipal;