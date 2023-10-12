import styled from 'styled-components';

export const CircleCursorStyled = styled.div`
    .cursor {
        width: 40px;
        height: 40px;
        border: 2px solid #fefefe;
        border-radius: 100%;
        position: fixed;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: all 150ms ease;
        transition-property: background-color, opacity, transform, mix-blend-mode;
        z-index: 9999;
        mix-blend-mode: difference;
    }

    .cursor--hidden {
        opacity: 0;
    }

    .cursor--link-hovered {
        transform: translate(-50%, -50%) scale(1.25);
        background-color: #fefefe;
    }

    .cursor--clicked {
        transform: translate(-50%, -50%) scale(0.9);
        background-color: #fefefe;
    }
`;
