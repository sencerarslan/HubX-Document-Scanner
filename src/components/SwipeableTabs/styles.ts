import styled from 'styled-components';

export const SwipeableTabsStyled = styled.div`
    .swiper {
        max-width: 100%;
        width: fit-content;
        height: 100%;
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
                padding: 30px 60px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 16px;
                user-select: none;

                &-icon {
                    border-radius: 100%;
                    width: 56px;
                    height: 56px;
                    border: solid 1px rgb(0 0 0 / 8%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &-text {
                    color: #0b172a;
                    font-size: 20px;
                    font-weight: 500;
                    white-space: nowrap;
                }
            }
        }
    }
`;
