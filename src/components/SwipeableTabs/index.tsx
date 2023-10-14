import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { SwipeableTabsStyled } from './styles';
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import 'swiper/css';
import { tabState } from '../../store/reducers/dataSlice';
import Container from '../Container';

export interface DataProps {
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
    const swiperRef = useRef<SwiperRef>(null);
    const [activeTab, setActiveTab] = useState<number>(0);
    const dispatch = useDispatch();

    const handleClick = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);

            setActiveTab(index);
            const audio = new Audio('/assets/sound/click.mp3');
            audio.play();
        }
    };

    useEffect(() => {
        dispatch(tabState(String(activeTab + 1)));
    }, [activeTab]);

    return (
        <SwipeableTabsStyled>
            <div className="swiper-content" key={activeTab}>
                <Container>{data[activeTab].content}</Container>
            </div>
            <Swiper
                ref={swiperRef}
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
                            <div
                                className={`slide-button ${index === activeTab ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                <div className="slide-button-icon">
                                    <span>
                                        <img src={item.button.icon} alt={item.button.icon} />
                                    </span>
                                </div>
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
