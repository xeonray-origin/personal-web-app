'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
	AppWindow,
	ChevronLeft,
	Github,
	Home,
	Lightbulb,
	Linkedin,
} from 'lucide-react'
import { useTheme } from 'next-themes'

import {
	IconButton,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
} from './ui'

const Sidebar = () => {
	const [active, setActive] = useState('home')
	const router = useRouter()
	const pathname = usePathname()
	const { systemTheme, theme, setTheme } = useTheme()
	const handleClick = (name: string) => {
		router.push(`/${name === 'home' ? '' : name}`, { scroll: false })
	}

	useEffect(() => {
		if (pathname === '/') {
			setActive('home')
		} else {
			setActive(pathname.replace('/', ''))
		}
	}, [pathname])
	console.log('hello', theme)
	return (
		<div className='xs:max-md:relative !bg-secondary fixed hidden h-[100vh] w-[14rem]  lg:block'>
			<div className='container mt-5  flex grow flex-row place-content-center'>
				<Image
					height={120}
					width={120}
					alt='Not Found'
					src={
						theme === 'light' || !theme ? '/logo_dark.svg' : '/logo_light.svg'
					}
				/>
			</div>
			<div className='mt-5 flex grow flex-row place-content-center'>
				<List className='space-y-1 p-4'>
					<ListItem
						selected={false}
						onClick={() => handleClick('home')}
						className='rounded-1 text-white hover:bg-secondary focus:text-white focus:bg-transparent'
					>
						<ListItemPrefix>
							<Home />
							<div className='' />
						</ListItemPrefix>
						Home
						{active === 'home' && (
							<ListItemSuffix className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem>
					<ListItem
						selected={false}
						onClick={() => handleClick('projects')}
						className='rounded-1 text-white hover:bg-secondary focus:text-white focus:bg-transparent'
					>
						<ListItemPrefix>
							<AppWindow />
						</ListItemPrefix>
						My Projects
						{active === 'projects' && (
							<ListItemSuffix className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem>
				</List>
			</div>
			<div className='absolute bottom-0 left-0 flex h-12 w-[100%] flex-row items-center justify-center gap-x-5 '>
				<IconButton
					variant='outlined'
					onClick={() => window.open('https://github.com/xeonray-origin')}
					className='border-secondary text-secondary hover:bg-secondary subpixel-antialiased hover:text-black-default'
					size='sm'
				>
					<Github className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					onClick={() => window.open('https://www.linkedin.com/in/xeonray/')}
					variant='outlined'
					className='border-secondary text-secondary hover:bg-secondary subpixel-antialiased	hover:text-black-default'
					size='sm'
				>
					<Linkedin className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					onClick={() =>
						theme == 'dark' ? setTheme('light') : setTheme('dark')
					}
					variant='outlined'
					className='border-secondary text-secondary hover:bg-secondary subpixel-antialiased	hover:text-black-default'
					size='sm'
				>
					<Lightbulb className='size-4 subpixel-antialiased' />
				</IconButton>
			</div>
		</div>
	)
}

export default Sidebar
