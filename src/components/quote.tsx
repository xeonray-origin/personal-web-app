import { Typography } from './ui'

const Quote = (props: any) => {
	return (
		<blockquote className='my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-secondary-dark dark:bg-primary-dark'>
			<Typography
				variant='lead'
				className='text-xl font-medium italic leading-relaxed'
			>
				"If I have seen farther than others, it is because I have stood on the
				shoulders of giants." -- Issac Newton
			</Typography>
		</blockquote>
	)
}

export default Quote
