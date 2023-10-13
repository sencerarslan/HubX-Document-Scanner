import { ReactElement } from 'react';
import { FooterStyled } from './styles';
import Container from '../../components/Container';
import hubxlogo from '/assets/images/hubx-case-logo.svg';

const Footer = (): ReactElement => {
    return (
        <FooterStyled>
            <Container>
                <footer className="footer">
                    <div className="copyright">
                        © Copyright 2022 HubX - Shaping the future through elegantly designed mobile apps
                    </div>
                    <div className="logo">
                        <img src={hubxlogo} alt="HUBX Case" />
                    </div>
                </footer>
            </Container>
        </FooterStyled>
    );
};
export default Footer;
