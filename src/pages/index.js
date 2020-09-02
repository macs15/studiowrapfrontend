import React from 'react'
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout';
import useInicio from '../hooks/use-inicio';
import Nosotros from '../components/nosotros';
import Trabajos from '../components/trabajos';
import BannerServicios from '../components/bannerservicio';
import SeccionPrincipal from '../components/principal';
import Servicios from '../components/servicios';
import Footer from '../components/footer';

const Contenedor = styled.div`
    position: relative;
`;
const ImagenBackground = styled(BackgroundImage)`
    background-repeat: repeat;
    background-size: auto;
`;


const Index = () => {

    const inicio = useInicio();
    const { imagen } = inicio[0];
        
    return ( 
        <>
            <Contenedor>
                <Layout />
                <ImagenBackground
                    id="inicio"
                    tag="section"
                    fluid={imagen.sharp.fluid}
                    fadeIn="soft"
                >
                <SeccionPrincipal />

                </ImagenBackground>
                <main>
                    <div id="nos">
                        <Nosotros />
                    </div>

                    <div id="servicos">
                        <Servicios />
                    </div>

                    <div>
                        <BannerServicios />
                    </div>

                    <div id="trabalhos">
                        <Trabajos />
                    </div>
                    <div id="contato">
                        <Footer />
                    </div>
                </main>
            </Contenedor>
        </>
     );
}
 
export default Index;