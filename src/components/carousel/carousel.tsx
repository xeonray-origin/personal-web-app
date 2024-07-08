'use client'

import React from 'react'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
// import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import uniqid from 'uniqid'

import { Button, Typography } from '@/components/ui'

const BlogData = [
	{
		id: uniqid(),
		image:
			'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'React optimization',
		shortText: 'How to optimize react code',
	},
	{
		id: uniqid(),
		image:
			'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'React optimization',
		shortText: 'How to optimize react code',
	},
	{
		id: uniqid(),
		image:
			'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'React optimization',
		shortText: 'How to optimize react code',
	},
]
const Banner = ({ title, image }: any) => {
	return (
		<div>
			<span className='fixed z-50  flex size-full bg-[#212121]/60 pl-[1rem] pt-[1rem]'>
				<Typography className='text-white-default' variant='h1'>
					{title}
				</Typography>
			</span>
			<Image fill={true} src={image} alt='Blog1' />
		</div>
	)
}
const Carousel = () => {
	return (
		<Swiper
			className='flex !h-[30rem] w-full'
			modules={[Navigation, Pagination]}
			slidesPerView={2}
			spaceBetween={10}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			{BlogData.map((data) => (
				<SwiperSlide key={data.id}>
					<Banner title={data.title} image={data.image} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Carousel
