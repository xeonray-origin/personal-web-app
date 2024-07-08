'use client'

import { useRef } from 'react'
import { Carousel, Quote } from '@/components'

const Blogs = () => {
	const swiperRef = useRef()

	return (
		<div className='w-full '>
			<Quote />
			<div className='flex h-[30rem] w-full bg-red-700'>
				<Carousel />
			</div>
		</div>
	)
}

export default Blogs
