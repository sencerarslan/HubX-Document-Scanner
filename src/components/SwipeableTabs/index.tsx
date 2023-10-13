import { ReactElement } from 'react';
import { SwipeableTabsStyled } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface DataProps {
    button: {
        icon: string;
        title: string;
    };
    content: ReactElement;
}

interface SwipeableTabsProps {
    data: DataProps[];
}

const SwipeableTabs = ({ data }: SwipeableTabsProps): ReactElement => {
    return (
        <SwipeableTabsStyled>
            <Swiper
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        centeredSlides: false,
                    },
                }}
            >
                {data.map((item: DataProps, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="slide-button">
                                <div className="slide-button-icon">{item.button.icon}</div>
                                <div className="slide-button-text">{item.button.title}</div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SwipeableTabsStyled>
    );
};
export default SwipeableTabs;
