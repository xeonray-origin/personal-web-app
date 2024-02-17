import Image from 'next/image'
import { Save } from 'lucide-react'

import { Avatar, Button, Typography } from './ui'

const Header = () => {
	return (
		<div className='flex h-[16rem] flex-col sm:h-[18rem]'>
			<div className=' bg-blue-gray-500 z-10 h-[12rem] w-full bg-[url(/header.svg)] sm:h-[10rem]' />
			<div className='sm:item-center absolute z-30 flex grow basis-full flex-row pl-2 sm:mt-[5rem] sm:items-center md:mt-[8.5rem]'>
				<Avatar
					className='!size-[8rem] border-2 border-white'
					src='/photo.jpeg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div className='h-[5rem] flex-row items-center sm:pt-[5rem] md:ml-[9rem] md:flex   md:pt-1 '>
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
					className='m-0	flex items-center !rounded-none bg-secondary font-thin normal-case'
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
