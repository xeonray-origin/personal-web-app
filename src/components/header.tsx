'use client'

import { Save } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Avatar, Button, Typography } from './ui'

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme()

	const download = () => {
		const link = document.createElement('a')
		link.download = `resume.pdf`
		link.href = '/resume.pdf'
		link.click()
	}

	return (
		<div
			className={`w-100 rounded-2 rounded-2 flex h-[12rem] w-full 
		   flex-wrap bg-[url(/header_dark.svg)] dark:bg-[url(/header.svg)] md:flex-row md:pl-3`}
		>
			<div className=' relative z-30 flex w-full items-center justify-center md:justify-start '>
				<Avatar
					className='top-[8rem] !size-[8rem]  border-2 border-white md:top-[9rem]'
					src='/photo.jpeg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div
				className={`item-center justify-centerpt-5 mt-[7rem] h-[5rem] 
				w-full pt-5 md:ml-2 md:mt-[4rem] md:flex md:justify-normal md:pt-1`}
			>
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
					onClick={() => download()}
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
