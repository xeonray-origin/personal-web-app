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
			className={`w-100 rounded-2 rounded-2 flex h-48 w-full 
		   flex-wrap bg-[url(/header_dark.svg)] dark:bg-[url(/header.svg)] md:flex-row md:pl-3`}
		>
			<div className=' relative z-30 flex w-full items-center justify-center md:justify-start '>
				<Avatar
					className='border-white top-32  !size-32 border-2 md:top-36'
					src='/photo.jpeg'
					alt='avatar'
					placeholder={''}
				/>
			</div>
			<div
				className={`item-center justify-centerpt-5 mt-28 h-20 
				w-full pt-5 md:ml-2 md:mt-16 md:flex md:justify-normal md:pt-1`}
			>
				<div className='text-center md:ml-32 md:grow md:text-left '>
					<Typography
						className=' text-white truncate text-nowrap text-2xl'
						placeholder={''}
						variant='h3'
					>
						Amritendu Bhattacharjee
					</Typography>
					<Typography
						className='text-md text-[#212121] dark:text-[#f1f1f2]
						md:text-sm'
						placeholder={''}
						variant='paragraph'
					>
						Senior Software Engineer | Distributed Systems | Cyber Security
						Enthusiast
					</Typography>
				</div>
				<Button
					placeholder={''}
					onClick={() => download()}
					className='invisible mx-auto mt-8 flex items-center text-nowrap !rounded-none border-none
					bg-secondary-default font-normal normal-case !text-white-default dark:bg-secondary-dark dark:font-bold 
				  dark:!text-black-dark md:visible md:float-end md:m-0	md:mr-2 md:mt-1 md:h-[3.3rem] md:!rounded-[0.1rem] lg:mr-0'
					size='sm'
					variant='outlined'
				>
					<Save className='mr-1 !text-white-default dark:!text-[#212121]' />
					<Typography
						className='text-md truncate text-nowrap text-[#212121] text-white-default 
						dark:font-bold dark:text-[#212121] md:text-sm'
						placeholder={''}
						variant='paragraph'
					>
						Download Resume
					</Typography>
				</Button>
			</div>
		</div>
	)
}

export default Header
