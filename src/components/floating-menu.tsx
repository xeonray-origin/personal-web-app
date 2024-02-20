'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AppWindow, Github, HomeIcon, PlusIcon } from 'lucide-react'

import {
	IconButton,
	SpeedDial,
	SpeedDialAction,
	SpeedDialContent,
	SpeedDialHandler,
} from './ui'

const FloatingMenu = () => {
	const [active, setActive] = useState('home')
	const router = useRouter()
	const pathname = usePathname()

	const handleClick = (name: string) => {
		router.push(`/${name === 'home' ? '' : name}`, { scroll: false })
	}

	useEffect(() => {
		console.log(pathname)
		if (pathname === '/') {
			setActive('home')
		} else {
			setActive(pathname.replace('/', ''))
		}
	}, [pathname])
	return (
		<SpeedDial className='bg-white'>
			<SpeedDialHandler>
				<IconButton
					placeholder={''}
					size='lg'
					className='rounded-full bg-secondary bg-opacity-50 text-black transition-colors hover:bg-opacity-100 group-hover:bg-opacity-100 group-hover:text-white'
				>
					<PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
				</IconButton>
			</SpeedDialHandler>
			<SpeedDialContent placeholder={undefined}>
				<SpeedDialAction
					className={active === 'home' ? 'bg-secondary text-black' : ''}
					onClick={() => handleClick('home')}
					placeholder={undefined}
				>
					<HomeIcon className='h-5 w-5' />
				</SpeedDialAction>
				<SpeedDialAction
					className={active === 'projects' ? 'bg-secondary text-black' : ''}
					onClick={() => handleClick('projects')}
					placeholder={undefined}
				>
					<AppWindow className='h-5 w-5' />
				</SpeedDialAction>
				<SpeedDialAction placeholder={undefined}>
					<Github className='h-5 w-5' />
				</SpeedDialAction>
			</SpeedDialContent>
		</SpeedDial>
	)
}

export default FloatingMenu
