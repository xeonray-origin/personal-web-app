'use client'

import { useMemo } from 'react'
import { projects } from '@config'
import { Github, Link } from 'lucide-react'

import {
	Accordion,
	Button,
	Chip,
	IconButton,
	Typography,
} from '@/components/ui'

const ProjectsDropdown = (props: any) => {
	const { title, longDescription, git, link, shortDescription, tech, imgUrl } =
		props

	return (
		<Accordion
			className=' m-1 !h-[20rem] w-[100%] !rounded-md border-[0.1rem] border-secondary-default
			shadow-md dark:border-secondary-dark dark:shadow-none lg:w-[42rem]'
			open={true}
		>
			<div
				className='text-white hover:!text-white flex h-[89%] flex-row 
				flex-wrap !rounded-t-[0.5rem] !border-none !border-none bg-white-default
				pl-2 hover:cursor-default dark:bg-black-dark'
			>
				{title && shortDescription && (
					<div className='w-[60%] pr-1'>
						<div className='mt-2 inline-block flex space-x-2 align-middle'>
							<Typography className='align-middle' variant='h3'>
								{title}
							</Typography>
						</div>
						<Typography className='mt-3 text-[1rem]' variant='paragraph'>
							{shortDescription}
						</Typography>
					</div>
				)}
				<div
					style={{ backgroundImage: `url('${imgUrl}')` }}
					className={`w-[40%] rounded-tr-[5px] bg-blue-500 bg-cover`}
				/>
			</div>
			<div
				className='!rounded-b-full-[0.3rem] absolute bottom-0 right-0 flex h-auto
				w-[100%] flex-row items-center justify-end gap-x-2 bg-secondary-default 
				bg-opacity-15 px-2 py-1'
			>
				<div className='grow flex-wrap space-x-1'>
					{tech.map((value: string, index: any) => {
						return (
							<Button
								size='sm'
								ripple={false}
								placeholder={''}
								variant='text'
								className='m-[0.1rem] rounded-[2px] bg-secondary-default !p-[0.3rem] text-[0.6rem] 
							font-normal normal-case text-white-default hover:cursor-default hover:bg-black-default
							dark:bg-black-dark'
							>
								{value}
							</Button>
						)
					})}
				</div>
				{git && (
					<Chip
						variant='outlined'
						onTap={() => window.open(git, '_blank')}
						size='sm'
						icon={<Github size={'sm'} />}
						value='Repo'
						className=' text-secondary !rounded-[0.2rem] border-secondary-default
						font-normal normal-case hover:cursor-pointer hover:bg-secondary-default 
						hover:text-black-default dark:hover:bg-secondary-dark'
					/>
				)}
				{link && (
					<Chip
						size='sm'
						variant='outlined'
						onClick={() => window.open(link, '_blank')}
						className='text-secondary !rounded-[0.2rem] border-secondary-default 
						font-normal normal-case hover:cursor-pointer hover:bg-secondary-default
						hover:text-black-default'
						icon={<Link size={'sm'} />}
						value='Link'
					>
						<Link className='text-black-default' />
					</Chip>
				)}
			</div>
		</Accordion>
	)
}

const Projects = () => {
	return (
		<div className='mt-[10rem] '>
			<div className='flex min-h-[100%] !w-[100%] flex-wrap justify-center'>
				{projects.sampleData.map((data) => {
					console.log(data)
					return <ProjectsDropdown key={data.id} {...data} />
				})}
			</div>
		</div>
	)
}

export default Projects
