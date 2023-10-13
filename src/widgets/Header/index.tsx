import { ReactElement } from 'react';
import { HeaderStyled } from './styles';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import MagicalButton from '../../components/MagicalButton';

const Header = (): ReactElement => {
    const activeTab = useSelector((state: any) => state.tabControl);

    return (
        <HeaderStyled>
            <Container>
                <header className="header">
                    <div className="header-left">
                        <div className="header-section">
                            <div className="header-section-subtitle">Inspect</div>
                            <div className="header-section-title">
                                State
                                <span className="count" key={activeTab}>
                                    {`${activeTab.padStart(2, '0')}`
                                        .split('')
                                        .map(function (char: string, index: number) {
                                            const style = { animationDelay: 0.3 + index / 10 + 's' };
                                            return (
                                                <span aria-hidden="true" key={index} style={style}>
                                                    {char}
                                                </span>
                                            );
                                        })}
                                </span>
                            </div>
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
