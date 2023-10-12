import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { HomePageStyled } from './styles';
import 'swiper/css';

const HomePage = () => {
    return (
        <HomePageStyled>
            <Header />
            <Container style={{ background: '#fff', height: '436px' }}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 'auto',
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    <SwiperSlide>Document Scanner</SwiperSlide>
                    <SwiperSlide>Sign & Stamp</SwiperSlide>
                    <SwiperSlide>Batch Scanning</SwiperSlide>
                    <SwiperSlide>Advanced Filters</SwiperSlide>
                    <SwiperSlide>Export & Share</SwiperSlide>
                </Swiper>
            </Container>
            <Footer />
        </HomePageStyled>
    );
};
export default HomePage;
