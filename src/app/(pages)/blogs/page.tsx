import { BlogCards } from '@/components'

import { Typography } from '@/components/ui'

const Blogs = () => {
	return (
		<div
			className='mt-40 flex !w-full flex-col p-5 
     pr-0 md:mt-28 '
		>
			<div className='flex h-12 w-full items-center justify-center md:justify-start '>
				<Typography variant='h3'>Latest</Typography>
			</div>
			<div className='item-center flex w-full  overflow-x-auto'>
				<BlogCards />
				<BlogCards />
				<BlogCards />
				<BlogCards />
			</div>
		</div>
	)
}

export default Blogs
