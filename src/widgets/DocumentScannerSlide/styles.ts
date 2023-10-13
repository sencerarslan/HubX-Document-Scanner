import styled, { css } from 'styled-components';
import { mediaQuery } from '../../common/media';

export const Tablet = css`
    & > * {
        min-height: 100vh;
    }
`;

export const CardStyled = styled.div`
    .card {
        display: flex;
        align-items: center;
        min-height: 400px;
        .left {
            flex: 1;
        }
        .right {
            text-align: right;
            .sub-title {
                color: var(--primary-color);
                font-size: 16px;
                font-weight: 800;
                line-height: 40px;
                text-transform: uppercase;
            }
            .title {
                color: #0b122a;
                font-size: 32px;
                font-weight: 700;
            }
        }
    }
`;

export const DocumentScannerSlideStyled = styled.div`
    background-color: #fff;
    ${mediaQuery.lessThan('tablet')`${Tablet}`}
`;
