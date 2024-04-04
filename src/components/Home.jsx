import { useCallback } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from 'styled-components';

import { NavBar } from './NavBar';
import { Header } from './Header';
import { ContactBanner } from './ContactBanner';

import { sectionBackground } from '../data';

const Section = styled.section`
    padding: 1.5rem env(safe-area-inset-right) 1.5rem env(safe-area-inset-left);

    nth-child(odd) {
        background-color: ${sectionBackground};
    }
`;

const homeRoutes = [
    {
        to: "#S-about",
        name: "About"
    },
    {
        to: "#S-education",
        name: "Education"
    },
    {
        to: "#S-experience",
        name: "Experience"
    },
    {
        to: "#S-portfolio",
        name: "Portfolio"
    },
    {
        to: "#S-skills",
        name: "Skills"
    },
    {
        to: "#S-contact",
        name: "Contact"
    },
]

const Home = (props) => {

    const navigate = useNavigate();

    const gotoSongs = useCallback(() => {
        navigate("/songs")
    }, [navigate]);

    return (
        <main>
            <NavBar routes={homeRoutes} />
            <Header />

            <Section id="S-about">
                <Container>
                    <ContactBanner />
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </Section>
        </main>
    )
}

export default Home;