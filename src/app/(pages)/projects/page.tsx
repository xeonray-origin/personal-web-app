'use client'

import { projects } from '@config'
import { Github, Link } from 'lucide-react'

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Button,
	IconButton,
	Typography,
} from '@/components/ui'

const ProjectsDropdown = (props: any) => {
	const { title, longDescription, git, link, shortDescription, icon, tech } =
		props
	return (
		<Accordion
			className='!h-full !rounded-[0.5rem] border-[0.1rem] border-secondary
			border-opacity-20 shadow-secondary'
			open={true}
		>
			<AccordionHeader
				className='flex flex-row flex-wrap !rounded-[0.5rem] border-b-0 
			!border-secondary bg-black-default pl-2 text-white hover:cursor-default
			hover:!text-white'
			>
				{title && shortDescription && (
					<>
						<div className='flex flex-row space-x-2 '>
							<Typography variant='h3'>{title}</Typography>
							<IconButton ripple={false} size='lg' className='bg-transparent '>
								{icon}
							</IconButton>
						</div>
						<Typography
							className='mt-5 text-sm font-medium'
							variant='paragraph'
						>
							{shortDescription}
						</Typography>
					</>
				)}
			</AccordionHeader>
			<AccordionBody className='!rounded-[0.5rem] border-none p-2  text-white'>
				<Typography variant='paragraph' className='text-balance'>
					{longDescription}
				</Typography>

				<div
					className='!rounded-b-full-[0.3rem] absolute bottom-0 right-0 flex h-auto
				w-[100%] flex-row items-center justify-end gap-x-2 bg-secondary bg-opacity-15 px-2 py-1'
				>
					<div className='item-center pt-auto grow flex-wrap space-x-1'>
						{tech.map((value: string, index: any) => {
							return (
								<Button
									disabled
									key={index}
									className='!rounded-[0.2rem] border-secondary bg-black-default 
									font-normal normal-case text-secondary hover:cursor-pointer
									hover:text-black-default'
									variant='outlined'
									size='sm'
								>
									{value}
								</Button>
							)
						})}
					</div>
					{git && (
						<IconButton
							onClick={() => window.open(git, '_blank')}
							size='sm'
							className='bg-secondary p-3'
						>
							<Github className='text-black-default' />
						</IconButton>
					)}
					{link && (
						<IconButton
							onClick={() => window.open(link, '_blank')}
							size='sm'
							className='bg-secondary p-3'
						>
							<Link className='text-black-default' />
						</IconButton>
					)}
				</div>
			</AccordionBody>
		</Accordion>
	)
}

const Projects = () => {
	return (
		<div className='flex w-auto flex-row flex-wrap items-start lg:w-[auto]'>
			<div className='min-h-[100vh] w-[100%]'>
				<div className=' flex h-[5rem] w-full flex-row items-center justify-center bg-[url(/header.svg)]'>
					<Typography
						className='font-extrabold uppercase text-white text-opacity-20'
						variant='h1'
					>
						Projects
					</Typography>
				</div>
				<div
					className='lg:gap-right-0 flex w-full flex-row flex-wrap 
				  gap-2 px-5 pb-3 pt-5 md:gap-1 lg:gap-y-3 lg:pr-0'
				>
					{projects.sampleData.map((data) => {
						return (
							<div
								key={data.id}
								className='h-auto min-h-[20rem] w-full lg:max-w-[49.6%]'
							>
								<ProjectsDropdown key={data.id} {...data} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Projects
