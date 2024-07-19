'use client'

import { useRef } from 'react'
import { ArticleCard, Quote } from '@/components'

const Blogs = () => {
	const swiperRef = useRef()

	return (
		<div className='w-full '>
			<Quote />
			<div className='flex flex-col'>
				<ArticleCard />
				<ArticleCard />
			</div>
		</div>
	)
}

export default Blogs
