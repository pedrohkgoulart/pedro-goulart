import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { navAltBackground } from '../data';

import navLogo from '../assets/logo.svg';

const StyledNavbar = styled(Navbar)`
    background-color: ${navAltBackground};
    backdrop-filter: blur(0.6rem);
	padding: 0.3rem;
`;

const StyledLogo = styled.img`
    height: 0.9em;
`;

const StyledNavContainer = styled(Nav)`
    display: flex;
    flex-flow: row wrap;
    margin-left: auto;
`

const StyledNavLink = styled(Nav.Link)`
    color: #ccc;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;

    :last-child {
        margin-right: 0;
    }

    :hover {
        color: #eee
    }
`;

type NavBarRoute = {
    to: string,
    name: string
}

type NavBarRouteHash = Array<NavBarRoute>;

type NavBarProps = {
    routes: NavBarRouteHash
}

export const NavBar = (props: NavBarProps) => {
    const { routes } = props;

    return (
        <StyledNavbar fixed="top" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <StyledLogo
                        alt="Logo for website. Text content: P. Goulart"
                        src={navLogo}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="collapsed-navbar" />
                <Navbar.Collapse id="collapsed-navbar">
                    <StyledNavContainer>
                        {routes.map(({to, name}) => <StyledNavLink key={to} to={to}>{name}</StyledNavLink>)}
                    </StyledNavContainer>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}
