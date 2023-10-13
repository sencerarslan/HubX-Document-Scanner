import { ReactElement } from 'react';
import { MagicalButtonStyled } from './styles';

interface MagicalButtonProps {
    text: string;
    url: string;
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

const MagicalButton = ({ text, url, target = '_self' }: MagicalButtonProps): ReactElement => {
    const playSound = () => {
        const audio = new Audio('/assets/sound/blob.mp3');
        audio.play();

        setTimeout(() => {
            window.open(url, target);
        }, 300);
    };
    return (
        <MagicalButtonStyled>
            <button onClick={playSound} className="pushable">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front">{text}</span>
            </button>
        </MagicalButtonStyled>
    );
};
export default MagicalButton;
