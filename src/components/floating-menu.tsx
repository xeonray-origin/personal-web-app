'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
	AppWindow,
	Contact,
	Github,
	HomeIcon,
	PlusIcon,
	Rss,
	Save,
} from 'lucide-react'

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
	const labelProps = {
		variant: 'small',
		className:
			'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal bg-black-default p-1 text-white',
	}

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
		<SpeedDial open={open} className='bg-white'>
			<SpeedDialHandler>
				<IconButton
					onClick={() => setOpen(!open)}
					placeholder={''}
					size='lg'
					className='text-black rounded-full !bg-secondary focus:!bg-secondary  '
				>
					<PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
				</IconButton>
			</SpeedDialHandler>
			<SpeedDialContent placeholder={undefined}>
				<SpeedDialAction
					className={active === 'home' ? 'text-black bg-secondary' : ''}
					onClick={() => handleClick('home')}
					placeholder={undefined}
				>
					<HomeIcon className='h-5 w-5' />
					Home
				</SpeedDialAction>
				<SpeedDialAction
					className={active === 'projects' ? 'text-black bg-secondary' : ''}
					onClick={() => handleClick('projects')}
					placeholder={undefined}
				>
					<AppWindow className='h-5 w-5' />
					Projects
				</SpeedDialAction>
				<SpeedDialAction
					onClick={() => handleClick('contact')}
					placeholder={undefined}
				>
					<Contact className='h-5 w-5' />
					Contact
				</SpeedDialAction>
				<SpeedDialAction
					onClick={() => handleClick('blogs')}
					placeholder={undefined}
				>
					<Rss className='h-5 w-5' />
					Blogs
				</SpeedDialAction>
				<SpeedDialAction placeholder={undefined}>
					<Save className='h-5 w-5' />
					Download Resume
				</SpeedDialAction>
			</SpeedDialContent>
		</SpeedDial>
	)
}

export default FloatingMenu
