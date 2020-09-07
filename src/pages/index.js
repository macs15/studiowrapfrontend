import React from 'react'
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Layout from '../components/layout';
import Nosotros from '../components/nosotros';
import Trabajos from '../components/trabajos';
import BannerServicios from '../components/bannerservicio';
import SeccionPrincipal from '../components/principal';
import Servicios from '../components/servicios';
import Footer from '../components/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

const Contenedor = styled.div`
    position: relative;
`;


const Index = () => {
        
    return ( 
        <ParallaxProvider>
            <Contenedor>
                <Layout />

                <div id="inicio">
                    <SeccionPrincipal/>
                </div>
                
                <main>
                    <div css={css`
                        /* padding-top: 90px; */
                        background-color: #ccc3;
                    `} 
                        id="nos"
                    >
                        <Nosotros />
                    </div>

                    <div css={css`
                        /* padding-top: 90px; */
                    `} id="servicos">
                        <Servicios />
                    </div>

                    <div>
                        <BannerServicios />
                    </div>

                    <div css={css`
                        /* padding-top: 90px; */
                    `} id="trabalhos">
                        <Trabajos />
                    </div>
                    <div css={css`
                        /* padding-top: 90px; */
                    `} id="contato">
                        <Footer />
                    </div>
                </main>
            </Contenedor>
        </ParallaxProvider>
     );
}
 
export default Index;