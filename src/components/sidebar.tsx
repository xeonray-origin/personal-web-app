'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
	AppWindow,
	ArrowLeftIcon,
	ChevronLeft,
	CircleUser,
	Contact,
	Github,
	Home,
	Instagram,
	Linkedin,
	Rss,
} from 'lucide-react'

import {
	IconButton,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
	Typography,
} from './ui'

const Sidebar = () => {
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
		<div className='xs:max-md:relative fixed hidden h-[100vh] w-[14rem] bg-black-default lg:block'>
			<div className='container mt-5  flex grow flex-row place-content-center'>
				<Image
					height={120}
					width={120}
					alt='Not Found'
					src={'/logo_light.svg'}
				/>
			</div>
			<div className='mt-5 flex grow flex-row place-content-center'>
				<List className='space-y-1 p-4' placeholder={''}>
					<ListItem
						selected={false}
						onClick={() => handleClick('home')}
						className='rounded-1 text-white hover:bg-secondary focus:bg-transparent focus:text-white'
						placeholder={''}
					>
						<ListItemPrefix placeholder={''}>
							<Home />
							<div className='' />
						</ListItemPrefix>
						Home
						{active === 'home' && (
							<ListItemSuffix placeholder={''} className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem>
					<ListItem
						selected={false}
						onClick={() => handleClick('projects')}
						className='rounded-1 text-white hover:bg-secondary focus:bg-transparent focus:text-white'
						placeholder={''}
					>
						<ListItemPrefix placeholder={''}>
							<AppWindow />
						</ListItemPrefix>
						My Projects
						{active === 'projects' && (
							<ListItemSuffix placeholder={''} className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem>
					{/* <ListItem
						selected={false}
						onClick={() => handleClick('contact')}
						className='rounded-1 text-white hover:bg-secondary focus:bg-transparent focus:text-white'
						placeholder={''}
					>
						<ListItemPrefix placeholder={''}>
							<Contact />
						</ListItemPrefix>
						Contact me
						{active === 'contact' && (
							<ListItemSuffix placeholder={''} className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem> */}
					{/* <ListItem
						selected={false}
						onClick={() => setActive('blogs')}
						className='rounded-1 text-white hover:bg-secondary focus:bg-transparent focus:text-white'
						placeholder={''}
					>
						<ListItemPrefix placeholder={''}>
							<Rss />
						</ListItemPrefix>
						Blogs
						{active === 'blogs' && (
							<ListItemSuffix placeholder={''} className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem> */}
				</List>
			</div>
			<div className='absolute bottom-0 left-0 flex h-12 w-[100%] flex-row items-center justify-center gap-x-5 '>
				<IconButton
					placeholder={''}
					variant='outlined'
					onClick={() => window.open('https://github.com/xeonray-origin')}
					className='border-secondary text-secondary subpixel-antialiased hover:bg-secondary hover:text-black-default'
					size='sm'
				>
					<Github className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					placeholder={''}
					onClick={() => window.open('https://www.linkedin.com/in/xeonray/')}
					variant='outlined'
					className='border-secondary text-secondary subpixel-antialiased hover:bg-secondary	hover:text-black-default'
					size='sm'
				>
					<Linkedin className='size-4 subpixel-antialiased' />
				</IconButton>
			</div>
		</div>
	)
}

export default Sidebar
