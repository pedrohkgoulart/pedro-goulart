import { Container } from "react-bootstrap";
import styled from 'styled-components';

import { highlightTextColorLight } from '../data';

import homeBackground from '../assets/backgrounds/home-background.svg'

const StyledHeader = styled.header`
    background-attachment: scroll;
    background-color: ${highlightTextColorLight};
    background-image: url(${homeBackground});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledContainer = styled(Container)`
    display: flex;
    min-height: 25rem;
`;

const TitleContainer = styled.div`
    align-self: center;

    @media (max-width: 991px) {
        margin: 0 auto;
    }
`;

const StyledTitle = styled.h1`
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
`;

const StyledSubtitle = styled.h3`
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <TitleContainer>
                    <StyledTitle>
                        Pedro Goulart
                    </StyledTitle>
                    <StyledSubtitle>
                        Creator. Coder. Designer.
                    </StyledSubtitle>
                </TitleContainer>
            </StyledContainer>
        </StyledHeader>
    );
}
