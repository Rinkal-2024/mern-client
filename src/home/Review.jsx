import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar} from 'react-icons/fa6'

// import './styles.css';
import { Avatar } from "flowbite-react";
import ProImg from '../assets/profile.jpg'

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='space-y-6'>
              <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
              </div>
              <div className='mt-7'>
              <p className='mb-5'>lorem View the documentation for further usage examples and how to use icons from other packages. NOTE: each Icon package has is own subfolder under react-icons you import from. For example, to use an icon from Material Design, your import would</p>
              <Avatar img= {ProImg} alt="avatar of Jese" rounded className='w-10 mb-4'/>
              <h5 className='text-lg font-medium'>Mark Ping</h5>
              <p className='text-base'>CEO, ABC Compony</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review
