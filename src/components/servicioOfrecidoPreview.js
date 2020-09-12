import React from 'react';
import styled from '@emotion/styled';
import {Card, Accordion} from 'react-bootstrap';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Contenedor = styled.div`
    margin-right: 2rem;
    align-items: center;
    &:hover {
        h3.btn {
            color: #fff;
            span {
                color: #fff;
            }
        }
    }
    &:last-of-type {
        margin-right: 0;
        @media (max-width: 630px) {
            margin-right: 2rem;
        }
    }
    &:nth-of-type(odd) {
        color: var(--primario);
    }
    .title {
        white-space: nowrap;
        font-size: 1.5rem;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        padding: 1rem;
        color: #fff;
        width: 100%;
        .signo {
            font-size: 2rem;
            padding: 0;
            margin: 0;
            font-weight: bold;
            color: #000;
        }
    }
    .bg {
        background-color: #fff !important;
        color: #000 !important;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .img {
            height: 150px;
            cursor: auto;
            flex: 45%;
            max-width: 45%;
            font-size: cover;
            object-fit: cover;
            vertical-align: bottom;
        }
        .card {
            color: #fff;
            font-size: 1.5rem;
            cursor: auto;
            align-items: center;
            .texto {
                padding: 1rem;
                flex: 53%;
                max-width: 53%;
            }
            .boton {
                width: 100%;
                color: #fff;
                font-weight: 400;
                font-family: 'Lato', sans-serif;
                font-size: 1.5rem;
                background-color: var(--primario);
                border: none;
                transition: background-color .3s ease;
                &:hover {
                    background-color: white;
                    color: var(--primario);
                }
            }
        }
        @media (max-width: 630px) {
            .img {
            flex: 90%;
            max-width: 90%;
            }
            .card {
                color: #fff;
                font-size: 1.5rem;
                cursor: auto;
                align-items: center;
                justify-content: center;
                p.texto {
                    padding: 1rem;
                    flex: 100%;
                    max-width: 100%;
                    align-items: center;
                }
            }
        }
    }
`;
const ServicioOfrecidoPreview = ({servicio, onChange, activeId}) => {
    
    // // state del collapse
    // const [activeId, setActiveId] = useState(0);
    // funcion que abre y cierra el collapse

    const { id, descripcion, nombre, imagen } = servicio;

    function handlerClick() {
        if(activeId === id) {
            onChange(null);
        } else {
            onChange(id);
        }
    }

    return ( 
        <Contenedor className="contenedor">
            <Accordion.Toggle
                as="h3"
                className="title btn bg-transparent border-0 my-auto text-left "
                eventKey={id}
                onClick={ () => handlerClick(id)}
            >{ activeId === id ? <span className="signo">-</span> : <span className="signo">+</span> }&nbsp; {nombre}</Accordion.Toggle>
            <Accordion.Collapse 
                eventKey={id}
            >
                <div
                    id="descripcion"
                    className="bg"
                >
                    <Card.Body className="card bg bg-dark">
                        <p className="texto">{descripcion}</p>
                        <Card.Img src={imagen.publicURL} variant="top" alt={nombre} className="p-1 img"/>
                        <AnchorLink className="boton btn mt-4" to="/#trabalhos">Veja Nossos Trabalhos</AnchorLink>
                    </Card.Body>
                    
                </div>
            </Accordion.Collapse>
        </Contenedor>
     );
}
 
export default ServicioOfrecidoPreview;