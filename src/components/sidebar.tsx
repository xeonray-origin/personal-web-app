'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { sidebarConfig } from '@/config'
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
	Typography,
} from './ui'

const SidebarListItem = (props: any) => {
	const { handleClick, active, page, icon } = props
	return (
		<ListItem
			selected={false}
			onClick={() => handleClick(page)}
			className='rounded-1  hover:bg-secondary-default focus:bg-[transparent]'
		>
			<ListItemPrefix className='dark:text-white-default'>
				{icon}
			</ListItemPrefix>
			<Typography className='capitalize dark:text-white-default' variant='h6'>
				{page}
			</Typography>
			{active === page && (
				<ListItemSuffix className='text-seconday-default dark:text-secondary-dark'>
					<ChevronLeft />
				</ListItemSuffix>
			)}
		</ListItem>
	)
}

const Sidebar = () => {
	const [active, setActive] = useState('home')
	const router = useRouter()
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()
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
					{sidebarConfig.pages.map((page) => (
						<SidebarListItem
							active={active}
							handleClick={handleClick}
							page={page.link}
							icon={page.icon}
						/>
					))}
				</List>
			</div>
			<div className='absolute bottom-0 left-0 flex h-12 w-[100%] flex-row items-center justify-center gap-x-5 '>
				<IconButton
					variant='outlined'
					onClick={() => window.open('https://github.com/xeonray-origin')}
					className='border-2 border-secondary-default text-secondary-default subpixel-antialiased 
					hover:bg-secondary-default hover:text-white-default dark:border-secondary-dark 
					dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-white-default'
					size='sm'
				>
					<Github className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					onClick={() => window.open('https://www.linkedin.com/in/xeonray/')}
					variant='outlined'
					className='border-2 border-secondary-default text-secondary-default subpixel-antialiased 
					hover:bg-secondary-default hover:text-white-default dark:border-secondary-dark 
					dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-white-default'
					size='sm'
				>
					<Linkedin className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					onClick={() =>
						theme == 'dark' ? setTheme('light') : setTheme('dark')
					}
					variant='outlined'
					className='border-2 border-secondary-default text-secondary-default subpixel-antialiased 
					hover:bg-secondary-default hover:text-white-default dark:border-secondary-dark 
					dark:text-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-white-default'
					size='sm'
				>
					<Lightbulb className='size-4 subpixel-antialiased' />
				</IconButton>
			</div>
		</div>
	)
}

export default Sidebar
