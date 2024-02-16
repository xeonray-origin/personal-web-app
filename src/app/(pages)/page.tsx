import { Save } from 'lucide-react'

import { Avatar, Button, Typography } from '@/components/ui'

export default function Home() {
	return (
		<div className='flex h-[16rem] flex-col'>
			<div className=' bg-blue-gray-500 z-10 h-[12rem] w-full' />
			<div className='absolute z-30 mt-[8.5rem] flex grow basis-full flex-row pl-2'>
				<Avatar
					className='!size-[8rem] border-2 border-white'
					src='https://docs.material-tailwind.com/img/face-2.jpg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div className='ml-[9rem] flex h-[5rem] flex-row items-center '>
				<div className='grow'>
					<Typography className='text-white' placeholder={''} variant='h3'>
						Amritendu Bhattacharjee
					</Typography>
					<Typography className='text-white' placeholder={''} variant='lead'>
						Fullstack Developer | Cybersecurity Enthusiast
					</Typography>
				</div>
				<Button
					placeholder={''}
					className='m-0	flex items-center !rounded-none bg-secondary'
					size='lg'
					variant='outlined'
				>
					<Save />
					Download Resume
				</Button>
			</div>
		</div>
	)
}
