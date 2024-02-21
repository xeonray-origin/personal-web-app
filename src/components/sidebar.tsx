'use client'

import { useEffect, useState } from 'react'
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
		<div className='xs:max-md:relative bg-black-default fixed hidden h-[100vh] w-[14rem] lg:block'>
			<div className='container mt-5  flex grow flex-row place-content-center'>
				<Typography
					placeholder={''}
					className='items-center text-center font-bold text-white'
					variant='lead'
				>
					Xeonray
				</Typography>
				<div className='ml-1 mt-[1.2rem] size-1 rounded-lg bg-secondary' />
			</div>
			<div className='mt-5 flex grow flex-row place-content-center'>
				<List className='space-y-5 p-4' placeholder={''}>
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
					<ListItem
						selected={false}
						onClick={() => setActive('about')}
						className='rounded-1 text-white hover:bg-secondary focus:bg-transparent focus:text-white'
						placeholder={''}
					>
						<ListItemPrefix placeholder={''}>
							<CircleUser />
						</ListItemPrefix>
						About me
						{active === 'about' && (
							<ListItemSuffix placeholder={''} className='text-secondary'>
								<ChevronLeft />
							</ListItemSuffix>
						)}
					</ListItem>
					<ListItem
						selected={false}
						onClick={() => setActive('contact')}
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
					</ListItem>
					<ListItem
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
					</ListItem>
				</List>
			</div>
			<div className='absolute bottom-0 left-0 flex h-12 w-[100%] flex-row items-center justify-center gap-x-5 '>
				<IconButton
					placeholder={''}
					variant='outlined'
					className='hover:text-black-default border-secondary text-secondary subpixel-antialiased hover:bg-secondary'
					size='sm'
				>
					<Github className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					placeholder={''}
					variant='outlined'
					className='hover:text-black-default border-secondary text-secondary subpixel-antialiased	hover:bg-secondary'
					size='sm'
				>
					<Linkedin className='size-4 subpixel-antialiased' />
				</IconButton>
				<IconButton
					placeholder={''}
					variant='outlined'
					className='hover:text-black-default border-secondary text-secondary subpixel-antialiased hover:bg-secondary'
					size='sm'
				>
					<Instagram className='size-4 subpixel-antialiased' />
				</IconButton>
			</div>
		</div>
	)
}

export default Sidebar
