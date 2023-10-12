import styled from 'styled-components';

export const HomePageStyled = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .swiper-slide {
        width: 80%;
    }

    .swiper-slide:nth-child(2n) {
        width: 60%;
    }

    .swiper-slide:nth-child(3n) {
        width: 40%;
    }
`;
