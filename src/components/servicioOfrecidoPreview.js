import React, { useState } from 'react';
import styled from '@emotion/styled';
import {Button, Collapse, Card} from 'react-bootstrap';

const Contenedor = styled.li`
    margin-right: 2rem;
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
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        .signo {
            font-size: 2rem;
            padding: 0;
            margin: 0;
            font-weight: bold;
            color: #000;
        }
    }
    .bg {
        .card {
            color: #fff;
            font-size: 1.3rem;
        }
    }
`;
const ServicioOfrecidoPreview = ({servicio}) => {

    // state del collapse
    const [open, setOpen] = useState(false);

    // funcion que abre y cierra el collapse

    const { descripcion, nombre } = servicio;

    return ( 
        <Contenedor>
            <Button
                as="h3"
                className="title bg-transparent border-0 pb-2 my-auto text-left "
                block
                onClick={() => setOpen(!open)}
                aria-controls="descripcion"
                aria-expanded={open}
            >{open ? (<span className="signo">-</span>) : (<span className="signo">+</span>) }&nbsp; {nombre}</Button>
            <Collapse 
                in={open}
            >
                <div
                    id="descripcion"
                    className="bg"
                >
                    <Card.Body className="card bg bg-dark">{descripcion}</Card.Body>
                </div>
            </Collapse>
        </Contenedor>
     );
}
 
export default ServicioOfrecidoPreview;