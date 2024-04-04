import styled from 'styled-components';

import { secondaryTextColorLight, mainBorderRadius, contactBanner } from '../data';

const BannerContainer = styled.div`
    background-color: ${secondaryTextColorLight};
    border-radius: ${mainBorderRadius};
    display: flex;
    margin: -3.5rem 0 2rem 0;
    padding: 0.3rem;

    @media (max-width: 991px) {
        margin-top: -5.25rem;
        padding-bottom: 0.5rem;
    }
`;

const ContactTile = styled.div`
    display: flex;
    flex: 1 1 auto;
    padding: 0.2rem;

    @media (max-width: 991px) {
        flex-flow: column wrap;
        text-align: center;
    }
`;

const IconContainer = styled.div`
    align-self: center;
    font-size: 2rem;
    margin: 0 1rem;
`;

const TitleContainer = styled.div`
    flex: 2 1 auto;
`;

const Title = styled.h5`
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
`;

const Content = styled.p`
    margin: 0;
`;

export const ContactBanner = () => {
    return (
        <BannerContainer>
            {contactBanner.map((contact) => 
                <ContactTile key={contact.id}>
                    <IconContainer>
                        <Content>{contact.icon}</Content>
                    </IconContainer>
                    <TitleContainer>
                        <Title>{contact.title}</Title>
                        <Content>{contact.content}</Content>
                    </TitleContainer>
                </ContactTile>
            )}
        </BannerContainer>
    );
}
