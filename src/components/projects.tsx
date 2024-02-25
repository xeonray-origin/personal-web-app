'use client'

import { useRouter } from 'next/navigation'
import { home } from '@config'
import { Github, Link } from 'lucide-react'

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Button,
	Chip,
	Typography,
} from './ui'

const ProjectHolder = (props: any) => {
	const { name, description, link, repo, tech } = props
	return (
		<Accordion
			className=' !min-h-[10rem] !rounded-md border-[0.1rem] 
			border-secondary pb-2 shadow-sm'
			placeholder={''}
			open={true}
		>
			<AccordionHeader
				placeholder={''}
				className='items-center space-x-1 border-b-0
		  !border-secondary p-1 pl-2 pr-0 text-white 
			  hover:cursor-default hover:!text-white'
			>
				<div className='grow'>
					<Typography
						placeholder={''}
						className='font-medium'
						variant='paragraph'
					>
						{name}
					</Typography>
				</div>
				<Chip
					size='sm'
					onTap={() => window.open(link, '_blank')}
					className='!rounded-[0.2rem] border-secondary font-normal 
					normal-case text-secondary hover:cursor-pointer hover:bg-secondary
				hover:text-black-default'
					variant='outlined'
					icon={<Link size={'sm'} />}
					value='Link'
				/>
				<Chip
					size='sm'
					onTap={() => window.open(repo, '_blank')}
					className=' !rounded-[0.2rem] border-secondary font-normal 
					normal-case text-secondary hover:cursor-pointer hover:bg-secondary	
					hover:text-black-default'
					icon={<Github size={'sm'} />}
					value='Repo'
					variant='outlined'
				/>
			</AccordionHeader>

			<AccordionBody className='mt-2 flex flex-col border-none pt-0 text-white'>
				<div className=' w-full pl-2 pt-0'>
					<Typography
						placeholder={''}
						className='text-xs font-medium'
						variant='small'
					>
						{description}
					</Typography>
				</div>
				<div
					className='absolute bottom-0 left-0 right-0 flex w-full 
					flex-row flex-wrap justify-end space-x-1'
				>
					{tech.map((text: string) => (
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='rounded-none  bg-black-default font-normal 
							normal-case text-secondary'
						>
							{text}
						</Button>
					))}
				</div>
			</AccordionBody>
		</Accordion>
	)
}

const Projects = () => {
	const router = useRouter()

	const handleClickAllProjects = () => {
		router.push('/projects')
	}

	return (
		<div className='mt-[2rem]'>
			<div className='mt-2 flex items-start px-2 lg:px-0'>
				<div className='grow'>
					<Typography
						className='sm:text-md text-nowrap  text-sm  md:text-lg lg:text-lg'
						placeholder={''}
						variant='lead'
					>
						Most Recent Projects
					</Typography>
				</div>

				<Typography
					onClick={handleClickAllProjects}
					placeholder={''}
					className='cursor-pointer text-nowrap text-end text-sm font-medium text-blue-500 lg:text-sm'
					variant='paragraph'
				>
					See all projects
				</Typography>
			</div>
			<div className=' w-100 flex flex-col justify-center space-y-2 px-3 md:mx-2 lg:mx-0 lg:pl-2'>
				{home.projects.map((project) => (
					<ProjectHolder
						name={project.name}
						description={project.description}
						link={project.link}
						repo={project.repo}
						tech={project.tech}
					/>
				))}

				{/* <ProjectHolder /> */}
			</div>
		</div>
	)
}

export default Projects
