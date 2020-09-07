import React from 'react';
import styled from '@emotion/styled';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

const Contenedor = styled.header`
    position: relative;

    @keyframes showTopText {
        0% { transform: translate3d(0, 265%, 0); }
        40%, 60% { transform: translate3d(0, 165%, 0); }
        100% { transform: translate3d(0, 65%, 0); }
    }
    @keyframes line {
        from {width:0%;}
        to {width:100%;}
    }
`;
const Contenido = styled(ParallaxBanner)`
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    background-position: bottom;
    background-attachment: fixed;
    background-position: center 0;
    overflow: hidden;
    .contenedor-titulo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        flex: 100%;
        width: 100%;
        max-width: 100%;
        height: 100%;
        margin: auto;
        background-color: rgba(0, 0, 0, .4);
        .blur {
            overflow: hidden;
            width: 100vw;
            max-width: 1600px;
            padding: 2rem;
            margin: auto;
            padding: 0 6rem;
            height: 50%;
            display: flex; 
            align-items: flex-start;
            flex-direction: column;
            top: 40%;
            width:100%;
            @media (min-width: 768px) {
                &::after {
                display: block;
                height: 1.9rem;
                width: 100%;
                content: "";
                border-bottom: 2px solid var(--primario);
                text-align:center;
                animation: line 1s linear forwards;
            }
            }
            .texto {
                display: inline-block;
                font-size: 3.6rem;
                font-family: 'Roboto', sans-serif;
                color: #fff;
                font-style: italic;
                 /* animation */
                transform: translate(0, 150%);
                display: inline-block;
                animation: showTopText .9s;
                animation-delay: 1.2s;
                animation-fill-mode: forwards;
                margin-bottom: 2rem;
                
            }
        }
        .titulo {
            display: inline-block;
            animation: showTopText .9s;
            animation-delay: 1.2s;
            animation-fill-mode: forwards;
            bottom: 0;
            transform: translate(0, 265%);
            /* color: var(--primario); */
            font-family: 'Lato', sans-serif;
            color: #fff;
            font-weight: 700;
            font-size: 4.5rem;
            text-align: end;
            span {
                font-weight: 400;
                color: var(--primario);
                font-style: italic;
            }
        }
    }
    @media (max-width: 768px) {
        position: relative;
        max-width: 100%;
        .contenedor-titulo {
            justify-content: center;
            width: 100%;
            .blur {
                align-items: center;
                justify-content: center;
                position: static;
                .titulo {
                    font-size: 3.6rem
                }
                .texto {
                    font-size: 1.6rem;
                }
            }

        }
    }
`;

const SeccionPrincipal = () => {

    return ( 
        <Contenedor>
            <Contenido
                layers={[
                    {
                        image: 'https://cdn.pixabay.com/photo/2018/11/04/16/28/london-3794348_960_720.jpg' ,
                        amount: .5,
                    }
                ]}
                style={{
                    height: '700px',
                }}
            >
                <Parallax 
                    className="contenedor-titulo"
                    y={['-200px', '300px' ]}
                    tagOuter="figure"
                >
                    <div 
                        className="blur"
                        
                    >
                        <h1 className="titulo">Studio <span>Wrap</span></h1>
                        <p className="texto">Sua solução em Comunicação Visual</p>
                    </div>
                </Parallax>
            </Contenido>
        </Contenedor>
     );
}
 
export default SeccionPrincipal;