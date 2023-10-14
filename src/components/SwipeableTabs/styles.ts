import styled, { css } from 'styled-components';
import { mediaQuery } from '../../common/media';

export const Mobile = css`
    .swiper-content {
        display: flex;
        align-items: stretch;
        & > div {
            padding: 0;
            display: flex;
            align-items: stretch;
        }
    }
`;
export const Tablet = css`
    .swiper {
        position: fixed;
        bottom: 0;
        .swiper-slide {
            .slide-button {
                padding: 20px 30px;

                &:not(.active):hover {
                    border-color: transparent !important;
                }
            }
        }
    }
`;

export const SwipeableTabsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color: #fff;
    .swiper-content {
        flex: 1;
        background-color: #fbfcfc;
    }
    .swiper {
        max-width: 100%;
        width: fit-content;
        margin: auto;
        background: #fff;

        .swiper-slide {
            background: #fff;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: row;
            width: fit-content;

            &:not(:last-child) {
                border-right: solid 1px rgb(0 0 0 / 8%);
            }

            .slide-button {
                padding: 30px 40px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 14px;
                user-select: none;
                border: 4px solid transparent;
                transition: border-color 0.4s;

                &:not(.active):hover {
                    border-color: var(--primary-color);
                }

                &-icon {
                    width: 56px;
                    height: 56px;
                    position: relative;
                    img {
                        filter: grayscale(1);
                        opacity: 0.8;
                        transition: filter 0.4s;
                    }
                    @property --pgPercentage {
                        syntax: '<number>';
                        inherits: false;
                        initial-value: 100;
                    }
                    & > span {
                        position: absolute;
                        border-radius: 100%;
                        border: solid 1px transparent;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 2;
                        left: 0;
                        top: 0;
                        background-color: #fff;
                    }
                    &::before {
                        content: '';
                        --size: 60px;
                        position: absolute;
                        z-index: 1;
                        top: -2px;
                        left: -2px;
                        width: var(--size);
                        height: var(--size);
                        border-radius: 100%;
                        display: grid;
                        place-items: center;
                        background: conic-gradient(
                            rgb(0 0 0 / 8%) calc(var(--pgPercentage) * 1%),
                            var(--primary-color) 0%
                        );
                    }
                    @keyframes growProgressBar {
                        0% {
                            --pgPercentage: 100;
                        }
                        100% {
                            --pgPercentage: 0;
                        }
                    }
                }

                &-text {
                    color: #0b172a;
                    font-size: 20px;
                    font-weight: 500;
                    white-space: nowrap;
                }

                &.active {
                    background-color: rgb(3 129 255 / 3%);
                    .slide-button-icon {
                        img {
                            filter: grayscale(0);
                            opacity: 1;
                        }
                        &::before {
                            animation: growProgressBar 1s forwards;
                        }
                    }
                }
            }
        }
    }
    ${mediaQuery.lessThan('tablet')`${Tablet}`}
    ${mediaQuery.lessThan('mobile')`${Mobile}`}
`;
