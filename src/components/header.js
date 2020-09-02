import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Navegacion from './navegacion';
import {css} from '@emotion/core';

const Header = () => {

    // consultar el logo
    const {logo, } = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
            publicURL
            }
        }
    `);

    return ( 
        <header css={css`
            position: fixed;
            width: 100%;
            /* background: rgba(40,30,37, .6) ; */
            /* background-color: transparent; */
            background-color: #281e25;
            padding: 1rem;
            z-index: 1;

            background: rgba(194,33,108,1);
            background: -moz-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
            background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(194,33,108,1)), color-stop(100%, rgba(245,0,8,1)));
            background: -webkit-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
            background: -o-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
            background: -ms-linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
            background: linear-gradient(45deg, rgba(194,33,108,1) 0%, rgba(245,0,8,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c2216c', endColorstr='#f50008', GradientType=1 );
        `}>
            <div css={css`
                max-width: 90vw;
                margin: 0 auto;
                text-align: center;

                @media (min-width: 768px) {
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
            `}
            >
                <Link to={'/'}>
                    <img css={css`
                        height:12rem;
                        margin-top: .5rem;
                        margin-right: 4rem;

                        @media (min-width: 768px) {
                            margin-right: 0;
                        }
                    `} src={logo.publicURL} alt="Logotipo studio wrap"/>
                </Link>

                <Navegacion />
            </div>
        </header>
     );
}
 
export default Header;