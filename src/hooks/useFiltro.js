import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Button } from 'react-bootstrap';

const Label = styled.label`
    width: 100%;
    text-align: start;
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    margin: 2rem auto 1rem auto;
`;
const Formulario = styled.form`
    width: 89%;
    display: flex;
    border: 1px solid var(--primario);
    margin: 0 auto 0 auto;
    display: inline-block;
    @media (max-width:768px) {
        width: 100%;
    }
`;
const Select = styled.select`
    width: 100%;
    font-size: 1.7rem;
    flex: 1;
    padding: .5rem;
    appearance: none;
    border: none;
    font-family: 'Lato', sans-serif;
    margin-bottom: 0;
`;
const Boton = styled(Button)`
    width: 10%;
    padding: 0;
    height: 37px;
    margin-right: auto;
    &.btn {
        font-size: 1.6rem;
        background-color: #333;
        border: none;
        transition: background-color .5 ease-in-out;
    }
    &.btn:hover {
        background-color: var(--primario);
    }
    @media (max-width:768px) {
        width: 50%;
        margin: 1rem auto 0 auto;
    }
`;

const useFiltro = () => {

    // leemos la categoria
    const [ category, setCategory ] = useState('');

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                nodes {
                    id
                    nombre
                }
            }
        }
    `);
    const categorias = resultado.allStrapiCategorias.nodes;

    const handleCleaner = () => {
        const form = document.getElementById('form') 
            form.reset();
            setCategory('');
    }
    
    const FiltroUI = () => (
        <div css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            max-width: 1200px;
            margin: 0;
            padding: 0;
        `}>
            <Label htmlFor="form" >Selecione uma Categoria: </Label>
            <Formulario id="form">
                <Select
                    onChange={ e => setCategory(e.target.value)}
                >
                    <option value="">-- Filtrar --</option>
                    { categorias.map( opcion => (
                        <option key={opcion.id} value={opcion.nombre}>{opcion.nombre}</option>
                    ))}
                </Select>
            </Formulario>
            <Boton
                onClick={handleCleaner}
            >Limpar</Boton>
        </div>
    )

    return {
        category,
        FiltroUI
    }
}
 
export default useFiltro;