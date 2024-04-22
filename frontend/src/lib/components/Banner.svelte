<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/a11y';
</script>

<Swiper
	modules={[Navigation, Pagination]}
	spaceBetween={1}
	slidesPerView={1}
	centerInsufficientSlides={true}
	navigation
	pagination={{ clickable: true }}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>
	<SwiperSlide><div class="box_img"><img src="/chekbanner5.png" alt="chekbanner5" /></div></SwiperSlide>
	<SwiperSlide><div class="box_img"><img src="/chekbanner2.png" alt="chekbanner2" /></div></SwiperSlide>
	<SwiperSlide><div class="box_img"><img src="/chekbanner3.png" alt="chekbanner3" /></div></SwiperSlide>
	<SwiperSlide><div class="box_img"><img src="/chekbanner4.png" alt="chekbanner4" /></div></SwiperSlide>
	<SwiperSlide><div class="box_img"><img src="/chekbanner1.png" alt="chekbanner1" /></div></SwiperSlide>
</Swiper>

<style>
	.swiper {
		width: 100%;
		height: 500px;
	}
	.box_img{
		display:flex;
		justify-content: center;
		width:100%;
		height:100%;
		min-width: 1080px;
	}
	.box_img img{
		display: block;
		width:100%;
		height:100%;
	}
	
</style>
