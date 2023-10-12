import { ReactElement } from 'react';
import { MagicalButtonStyled } from './styles';

interface MagicalButtonProps {
    text: string;
    url: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

const MagicalButton = ({ text, url, target = '_self' }: MagicalButtonProps): ReactElement => {
    return (
        <MagicalButtonStyled>
            <a href={url} target={target} className="pushable">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">{text}</span>
            </a>
        </MagicalButtonStyled>
    );
};
export default MagicalButton;
