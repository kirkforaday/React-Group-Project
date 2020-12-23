import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid">
                <div className="row pt-5">
                    {/* Column 1 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>Careers</li>
                            </Link>
                            <Link to="/">
                            <li>Our Staff</li>
                            </Link>
                            <Link to="/">
                            <li>Our Mascot</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 2 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>Our Halloween Store</li>
                            </Link>
                            <Link to="/">
                            <li>Our Thanksgiving Store</li>
                            </Link>
                            <Link to="/">
                            <li>Our Arbor Day Store</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 3 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>Contact Our Webmaster</li>
                            </Link>
                            <Link to="/">
                            <li>Contact Your Senator</li>
                            </Link>
                            <Link to="/">
                            <li>Contact Danny Devito</li>
                            </Link>
                        </ul>
                    </div>
                     {/* Column 4 */}
                     <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/">
                            <li>If You Try Clicking These Links</li>
                            </Link>
                            <Link to="/">
                            <li>You'll Find That</li>
                            </Link>
                            <Link to="/">
                            <li>They All Take You Home</li>
                            </Link>
                        </ul>
                    </div>
                    <p className="pt-3 pb-2 pl-5 copy-right">
                        &copy;&nbsp;Group 7
                        &nbsp;{`${new Date().getFullYear()}`}
                    </p>
                </div>
            </div>

        </FooterContainer>
    )
}

export default Footer;

// Styled Components

const FooterContainer = styled.div`

background: white !important;

ul li {
    list-style: none;
}

a {
    color: black;
    text-decoration: none;
    &:hover {
        color: black;
    }
}

.copy-right {
    color: black;
}

position: sticky;
bottom: 0;


`;