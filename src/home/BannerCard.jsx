import { Swiper, SwiperSlide } from 'swiper/react';
import './BannerCard.css';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const BannerCard = () => {
  return (
    <div className='banner'>
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>    
  </Swiper>
    </div>
  )
}

export default BannerCard
