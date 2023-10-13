import styled from 'styled-components';

export const SwipeableTabsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background-color: #fff;
    .swiper-content {
        flex: 1;
        padding: 30px;
        background-color: #fbfcfc;
    }
    .swiper {
        max-width: 100%;
        width: fit-content;
        margin: auto;

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
                padding: 30px 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 16px;
                user-select: none;
                border: 2px solid transparent;
                transition: border-color 0.4s;

                &:not(.active):hover {
                    border-color: var(--primary-color);
                }

                &-icon {
                    @property --pgPercentage {
                        syntax: '<number>';
                        inherits: false;
                        initial-value: 100;
                    }
                    @keyframes growProgressBar {
                        0%,
                        33% {
                            --pgPercentage: 100;
                        }
                        100% {
                            --pgPercentage: 0;
                        }
                    }

                    width: 56px;
                    height: 56px;
                    position: relative;
                    & > span {
                        position: absolute;
                        border-radius: 100%;
                        border: solid 1px rgb(0 0 0 / 8%);
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
                        color: var(--primary-color);
                        &::before {
                            animation: growProgressBar 1s forwards;
                        }
                    }
                }
            }
        }
    }
`;
