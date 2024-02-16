import Image from 'next/image'
import { Save } from 'lucide-react'

import { Avatar, Button, Typography } from './ui'

const Header = () => {
	return (
		<div className='flex h-[16rem] flex-col'>
			<div className=' bg-blue-gray-500 z-10 h-[12rem] w-full bg-[url(/header.svg)]' />
			<div className='absolute z-30 mt-[8.5rem] flex grow basis-full flex-row pl-2'>
				<Avatar
					className='!size-[8rem] border-2 border-white'
					src='/photo.jpeg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div className='ml-[9rem] flex h-[5rem] flex-row items-center '>
				<div className='grow'>
					<Typography
						className=' truncate text-nowrap text-white'
						placeholder={''}
						variant='h3'
					>
						Amritendu Bhattacharjee
					</Typography>
					<Typography
						className='truncate text-nowrap text-white'
						placeholder={''}
						variant='lead'
					>
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

export default Header
