'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { utils } from '@/lib'
import { cn } from '@/lib/utils'
import { AppWindow, HomeIcon, PlusIcon, Save } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
	IconButton,
	SpeedDial,
	SpeedDialAction,
	SpeedDialContent,
	SpeedDialHandler,
	Typography,
} from './ui'

const FloatingMenu = () => {
	const [active, setActive] = useState('home')
	const router = useRouter()
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	const handleClick = (name: string) => {
		router.push(`/${name === 'home' ? '' : name}`, { scroll: false })
	}

	const { theme, setTheme } = useTheme()

	useEffect(() => {
		console.log(pathname)
		if (pathname === '/') {
			setActive('home')
		} else {
			setActive(pathname.replace('/', ''))
		}
	}, [pathname])

	return (
		<SpeedDial open={open} className='bg-white !z-50'>
			<SpeedDialHandler>
				<IconButton
					onClick={() => setOpen(!open)}
					placeholder={''}
					size='lg'
					className='rounded-full !bg-secondary-default text-black-default focus:!bg-secondary-default  '
				>
					<PlusIcon className='size-5 transition-transform group-hover:rotate-45' />
				</IconButton>
			</SpeedDialHandler>
			<SpeedDialContent>
				<SpeedDialAction
					className={
						active === 'home'
							? '!bg-secondary-default text-white-default'
							: 'border-secondary-default !bg-white-default dark:!bg-secondary-dark dark:!text-[#212121]'
					}
					onClick={() => handleClick('home')}
				>
					<HomeIcon className='size-4' />
					<Typography
						color='blue-gray'
						className={cn(
							'text-[0.5rem] font-bold dark:text-white-default',
							active === 'home' ? 'text-white-default' : '!text-[#212121]',
						)}
						placeholder={undefined}
					>
						Home
					</Typography>
				</SpeedDialAction>
				<SpeedDialAction
					className={
						active === 'projects'
							? 'bg-secondary-default text-white-default'
							: 'border-secondary-default !bg-white-default bg-opacity-10 dark:!bg-secondary-dark dark:!text-[#212121]'
					}
					onClick={() => handleClick('projects')}
					placeholder={undefined}
				>
					<AppWindow className='size-4' />
					<Typography
						color='blue-gray'
						className={cn(
							'text-[0.5rem] font-bold dark:text-white-default',
							active === 'projects' ? 'text-white-default' : '!text-[#212121]',
						)}
						placeholder={undefined}
					>
						Projects
					</Typography>
				</SpeedDialAction>
				<SpeedDialAction
					onClick={utils.downloadResume}
					className='border-secondary-default !bg-white-default bg-opacity-10 dark:!bg-secondary-dark dark:!text-[#212121] md:hidden'
					placeholder={undefined}
				>
					<Save className='size-4' />
					<Typography
						color='blue-gray'
						className={cn('text-[0.5rem] font-bold dark:text-[#212121]')}
						placeholder={undefined}
					>
						Resume
					</Typography>
				</SpeedDialAction>
				<SpeedDialAction
					onClick={() =>
						theme == 'dark' ? setTheme('light') : setTheme('dark')
					}
					className='border-secondary-default !bg-white-default bg-opacity-10 dark:!bg-secondary-dark dark:!text-[#212121] md:hidden'
					placeholder={undefined}
				>
					<Save className='size-4' />
					<Typography
						color='blue-gray'
						className={cn('text-[0.5rem] font-bold dark:text-[#212121]')}
						placeholder={undefined}
					>
						Dark
					</Typography>
				</SpeedDialAction>
			</SpeedDialContent>
		</SpeedDial>
	)
}

export default FloatingMenu
