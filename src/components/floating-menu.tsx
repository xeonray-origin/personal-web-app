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
		<SpeedDial open={open} className='bg-white'>
			<SpeedDialHandler>
				<IconButton
					onClick={() => setOpen(!open)}
					placeholder={''}
					size='lg'
					className='rounded-full !bg-secondary-default text-black-default focus:!bg-secondary-default  '
				>
					<PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
				</IconButton>
			</SpeedDialHandler>
			<SpeedDialContent placeholder={undefined}>
				<SpeedDialAction
					className={
						active === 'home'
							? 'bg-secondary-default text-white-default'
							: 'border-secondary-default bg-white-default bg-opacity-10 dark:bg-secondary-dark'
					}
					onClick={() => handleClick('home')}
					placeholder={undefined}
				>
					<HomeIcon className='size-[1rem]' />
					<Typography
						color='blue-gray'
						className={cn(
							'text-[0.5rem] font-bold dark:text-white-default',
							active === 'home' ? 'text-white-default' : '',
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
							: 'border-secondary-default bg-white-default bg-opacity-10 dark:bg-secondary-dark'
					}
					onClick={() => handleClick('projects')}
					placeholder={undefined}
				>
					<AppWindow className='size-[1rem]' />
					<Typography
						color='blue-gray'
						className={cn(
							'text-[0.5rem] font-bold dark:text-white-default',
							active === 'projects' ? 'text-white-default' : '',
						)}
						placeholder={undefined}
					>
						Projects
					</Typography>
				</SpeedDialAction>
				<SpeedDialAction
					onClick={utils.downloadResume}
					className='border-secondary-default bg-white-default bg-opacity-10 dark:bg-secondary-dark md:hidden'
					placeholder={undefined}
				>
					<Save className='size-[1rem]' />
					<Typography
						color='blue-gray'
						className={cn('text-[0.5rem] font-bold dark:text-white-default')}
						placeholder={undefined}
					>
						Resume
					</Typography>
				</SpeedDialAction>
				<SpeedDialAction
					onClick={() =>
						theme == 'dark' ? setTheme('light') : setTheme('dark')
					}
					className='border-secondary-default bg-white-default bg-opacity-10 dark:bg-secondary-dark md:hidden'
					placeholder={undefined}
				>
					<Save className='size-[1rem]' />
					<Typography
						color='blue-gray'
						className={cn('text-[0.5rem] font-bold dark:text-white-default')}
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
