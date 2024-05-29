import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Tooltip,
	Typography,
} from '../ui'

interface IBlogCards {
	title?: string
	heroImageSrc?: string
}

const BlogCards = (props: IBlogCards) => {
	return (
		<Card className='m-1 max-h-[30rem] max-w-[24rem] shrink-0 overflow-hidden'>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className='m-0 rounded-none'
			>
				<img
					src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
					alt='ui/ux review check'
				/>
			</CardHeader>
			<CardBody>
				<Typography variant='h4' color='blue-gray'>
					UI/UX Review Check
				</Typography>
				<Typography
					variant='paragraph'
					color='gray'
					className='mt-3 font-normal'
				>
					Because it&apos;s about motivating the doers. Because I&apos;m here to
					follow my dreams and inspire others.
				</Typography>
			</CardBody>
			<CardFooter className='flex items-center justify-between'>
				<div className='flex items-center -space-x-3'>
					<Button size='sm' variant='outlined' className=''>
						Read more
					</Button>
				</div>
				<Typography className='font-normal'>January 10</Typography>
			</CardFooter>
		</Card>
	)
}

export default BlogCards
