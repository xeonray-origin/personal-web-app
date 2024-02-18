import Image from 'next/image'
import { Menu, Save } from 'lucide-react'

import { Avatar, Button, Typography } from './ui'

const Header = () => {
	return (
		<div className='w-100 flex h-[16rem] w-full flex-wrap bg-[url(/header.svg)] md:flex-row md:pl-3'>
			{/* <div className='flex w-full flex-row bg-red-400'>
				<Menu className='item-end size-8 justify-end text-white' />
			</div> */}
			<div className=' relative z-30 flex w-full items-center justify-center md:justify-start '>
				<Avatar
					className='top-[10rem] !size-[8rem]  border-2 border-white md:top-[13rem]'
					src='/photo.jpeg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div className='item-center justify-centerpt-5 mt-[10rem] h-[5rem] w-full pt-5 md:ml-2 md:mt-[8rem] md:flex md:justify-normal md:pt-1'>
				<div className='text-center md:ml-[8rem] md:grow md:text-left '>
					<Typography
						className=' truncate text-nowrap text-2xl text-white'
						placeholder={''}
						variant='h3'
					>
						Amritendu Bhattacharjee
					</Typography>
					<Typography
						className='text-md md:text-md truncate text-nowrap text-white lg:text-lg'
						placeholder={''}
						variant='lead'
					>
						Fullstack Developer | Cybersecurity Enthusiast
					</Typography>
				</div>
				<Button
					placeholder={''}
					className='invisible mx-auto mt-8 flex items-center text-nowrap !rounded-none border-none bg-secondary font-normal normal-case md:visible md:float-end md:m-0 md:mr-2 md:mt-1 md:h-[3.3rem] md:!rounded-[0.1rem] lg:mr-0'
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
