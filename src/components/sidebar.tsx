import { AppWindow, CircleUser, Contact, Github, Home, Rss } from 'lucide-react'

import { List, ListItem, ListItemPrefix, Typography } from './ui'

const Sidebar = () => {
	return (
		<div className='fixed h-[100vh] w-[15rem] bg-black'>
			<div className='container mt-5 flex grow flex-row place-content-center'>
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
				<List className='p-4' placeholder={''}>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<Home />
						</ListItemPrefix>
						Home
					</ListItem>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<AppWindow />
						</ListItemPrefix>
						My Projects
					</ListItem>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<CircleUser />
						</ListItemPrefix>
						About me
					</ListItem>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<Contact />
						</ListItemPrefix>
						Contact me
					</ListItem>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<Github />
						</ListItemPrefix>
						My Github
					</ListItem>
					<ListItem placeholder={''}>
						<ListItemPrefix placeholder={''}>
							<Rss />
						</ListItemPrefix>
						Blogs
					</ListItem>
				</List>
			</div>
		</div>
	)
}

export default Sidebar
