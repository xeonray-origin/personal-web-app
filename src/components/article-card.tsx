import { Button } from '@/components/ui'

interface IArticleProps {
	imageUrl: string
	title: string
	description: string
}

const ArticleCard = () => {
	return (
		<article
			className='dark:border-secondary dark:border-1 mx-auto my-10 flex max-w-md flex-col rounded-2xl 
    bg-white-default px-4 shadow dark:bg-transparent md:max-w-5xl md:flex-row md:items-center'
		>
			<div className='my-4 shrink-0 md:mr-8 md:max-w-sm'>
				<img
					className='rounded-2xl'
					src='https://images.unsplash.com/photo-1663287695452-bf59337d8746?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
					alt=''
				/>
			</div>
			<div className='py-4 sm:py-8'>
				<a
					href='#'
					className='mb-6 block text-2xl font-medium text-gray-700 dark:text-black-default'
				>
					Long walks are helpful in decreasing stress levels
				</a>
				<p className='mb-6 text-gray-500 dark:text-black-default'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
					illum consequatur quia doloremque! Similique eius enim nostrum totam.
				</p>
				<Button
					className='dark:border-secondary-dark dark:text-white-default'
					variant='outlined'
				>
					Read More
				</Button>
			</div>
		</article>
	)
}

export default ArticleCard
