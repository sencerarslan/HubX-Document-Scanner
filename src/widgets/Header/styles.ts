import styled, { css } from 'styled-components';
import { mediaQuery } from '../../common/media';

export const Tablet = css`
    .header {
        display: none;
    }
`;
export const HeaderStyled = styled.div`
    .header {
        padding: 72px 0 100px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        &-left {
            flex: 1;
        }
        &-right {
            padding-right: 60px;
        }
        &-section {
            display: flex;
            flex-direction: column;
            gap: 5px;
            &-subtitle {
                font-family: 'Helvetica Now Display';
                font-size: 21px;
                font-weight: 400;
            }
            &-title {
                font-size: var(--font-title-size);
                font-weight: 800;
                .count {
                    span {
                        position: relative;
                        opacity: 0;
                        animation: move-text 0.4s forwards;
                    }

                    @keyframes move-text {
                        0% {
                            bottom: -0.2em;
                            opacity: 1;
                        }
                        50% {
                            bottom: 0.2em;
                        }
                        100% {
                            bottom: 0;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    ${mediaQuery.lessThan('tablet')`${Tablet}`}
`;
