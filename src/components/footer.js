import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter, faWhatsapp, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const ContenedorFooter = styled.footer`
    background: #333;
    width: 100%;
    height: auto;
    margin: 0;
    position: relative;
    bottom: 0%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        .titulo {
            font-size: 1.2rem;
        }
    }
    .titulo {
        display: inline-block;
        color: #fff;
        font-size: 1.8rem;
        margin-top: 1rem;
        font-weight: 700;
        margin-bottom: 0;
    }
`;
const Ubicacion = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .texto {
        color: #fff;   
        margin-top: 0;
        text-align: center;
        font-size: 1.5rem;
        @media (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
    .titulo {
        margin-top: 1rem;
    }
`;

const RedesSociales = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    .contenedor-redes-sociales {
        height: 100%;
        display: flex;
        flex-direction: row;
        padding: 1rem;
        text-align: center;
        padding-bottom: 2rem;
        .iconos {
            margin-right: 1.5rem;
            color: var(--primario);
                transition: all .3s ease;
            &:hover {
                cursor: pointer;
                transform: scale(1.2, 1.2);
            }
            &:last-of-type {
                margin-right: 0;
                &::before {
                    content: "";
                    border-left: 1px solid var(--primario);
                    width: 1rem;
                    transform: translateX(-.2rem);
                    transform: translateY(-.3rem);
                }
            }
        }
        .wsp {
            display: flex;
            flex-direction: row;
            color: #25d366;
        }
        .texto {
            margin: 0;
            padding: 0;
            color: #fff;
            @media (max-width: 768px) {
            font-size: 1.3rem;
            }
        }
    }
    h3 {
        color: #fff;
    }
`;
const PoweredBy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .copyright {
        margin: 0;
        vertical-align: baseline;
        font-size: 1.3rem;
        @media (max-width: 768px) {
            span {
                display: block;
                text-align: center;
            }
        }
    }
    .contenedor-author {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: .5rem;
        .author {
            margin: 0;
            margin-right: 2rem;
            font-size: 1.3rem;
            a {
                text-decoration: none;
                color: #000;
                font-weight: bold;
            }
            @media (max-width: 768px) {
                width: 100%;
                text-align: center;
                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
        .icon {
            margin-right: 1rem;
            &:last-of-type {
                margin-right: 0;
            }
            @media (max-width: 768px) {
                margin-bottom: 1rem;
                margin-right: 3rem;
                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
        .facebook {
                color: #3b5998;
        }
        .twitter {
            color: #1da1f2;
        }
        .github {
            color: #6e5494;
        }
    }
`;


const Footer = () => {
    return (
        <> 
            <ContenedorFooter>
                <Ubicacion>
                    <p className="titulo">Localização</p>
                    <p className="texto">
                        Rua São Borja nº 433 - Boa Vista <br />
                        Joinville / SC
                    </p>
                </Ubicacion>
                <RedesSociales>
                    <p className="titulo">Contato</p>
                    <div className="contenedor-redes-sociales">
                        <div className="iconos instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </div>
                        <div className="iconos facebook">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </div>
                        <div className="iconos twitter">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </div>
                        <div className="iconos youtube">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </div>
                        <div className="iconos wsp">
                            <FontAwesomeIcon size="2x" icon={faWhatsapp}/> 
                            <p className="texto">&nbsp; +55 47 999-1234567</p>
                        </div>
                    </div>
                </RedesSociales>
            </ContenedorFooter>
            <PoweredBy>
                <p className="copyright">&#169; 2020 Studio Wrap Soluções Visuais | <span> Todos os direitos reservados.</span></p> 
                <div className="contenedor-author">
                    <p className="author">Desenvolvido por <a href="https://github.com/macs15" target="_blank">Maykell Carrillo</a></p>
                    <FontAwesomeIcon className="icon github" icon={faGithubAlt} size="2x" />
                    <FontAwesomeIcon className="icon facebook" icon={faFacebook} size="2x" />
                    <FontAwesomeIcon className="icon twitter" icon={faTwitter} size="2x" />
                </div>
                <div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </PoweredBy>
        </>
     );
}
 
export default Footer;