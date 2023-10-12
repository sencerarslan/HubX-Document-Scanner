import styled from 'styled-components';

export const MagicalButtonStyled = styled.div`
    .pushable {
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
        text-decoration: none;
        outline-offset: 4px;
        transition: filter 250ms;
        .shadow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 46px;
            background: #000;
            will-change: transform;
            transform: translateY(2px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }
        .edge {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 46px;
            background: #000;
        }
        .front {
            display: block;
            position: relative;
            padding: 18px 32px;
            border: solid 1px #000;
            border-radius: 46px;
            font-size: 1.25rem;
            color: #000;
            background: #fff;
            will-change: transform;
            transform: translateY(-4px);
            transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
        }
        &:hover {
            filter: brightness(110%);
            .front {
                transform: translateY(-6px);
                transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
            }
            .shadow {
                transform: translateY(4px);
                transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
            }
        }
        .pushable:hover .front {
            transform: translateY(-6px);
            transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
        }
        &:active {
            .front {
                transform: translateY(-2px);
                transition: transform 34ms;
            }
            .shadow {
                transform: translateY(1px);
                transition: transform 34ms;
            }
        }
        &:active &:focus:not(:focus-visible) {
            outline: none;
        }
    }
`;
