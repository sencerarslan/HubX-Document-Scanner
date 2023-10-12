import { ReactElement } from 'react';
import { HeaderStyled } from './styles';
import MagicalButton from '../MagicalButton';
import Container from '../Container'; 
// import logo from '../assets/logo.svg';

const Header = (): ReactElement => {
    return (
        <HeaderStyled>
            <Container>
                <header className="header">
                    <div className="header-left">
                        <div className="header-section">
                            <div className="header-section-subtitle">Inspect</div>
                            <div className="header-section-title">State 01</div>
                        </div>
                    </div>
                    <div className="header-right">
                        <MagicalButton text="hubx.co" url="https://hubx.co" target="_blank" />
                    </div> 
                </header>
            </Container>
        </HeaderStyled>
    );
};
export default Header;
