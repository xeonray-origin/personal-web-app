'use client'

import { Accordion, Button, Chip, Typography } from '@material-tailwind/react'
import { Github, Link } from 'lucide-react'

const ProjectCard = (props: any) => {
	const { title, longDescription, git, link, shortDescription, tech, imgUrl } =
		props

	return (
		<Accordion
			className='!mt-5 !h-80 w-full !space-y-1 !rounded-md border-[0.1rem] border-secondary-default shadow-md
			dark:border-secondary-dark dark:shadow-none md:mx-2 lg:w-[42rem]'
			open={true}
		>
			<div
				className='text-white hover:!text-white flex h-[17.3rem] flex-row 
				flex-wrap overflow-y-hidden !rounded-t-lg !border-none !border-none
				bg-white-default pl-2 hover:cursor-default dark:bg-black-dark'
			>
				{title && shortDescription && (
					<div className='w-3/5  pr-1'>
						<div className='mt-2 inline-block flex space-x-2 align-middle'>
							<Typography className='align-middle text-lg' variant='h3'>
								{title}
							</Typography>
						</div>
						<Typography className='md:text-md mt-3 text-sm' variant='paragraph'>
							{shortDescription}
						</Typography>
					</div>
				)}
				<div
					style={{ backgroundImage: `url('${imgUrl}')` }}
					className={`!z-0 w-2/5 overflow-y-hidden rounded-tr-[5px] bg-cover`}
				/>
			</div>
			<div
				className='!rounded-b-full-[0.3rem] bottom-0 right-0 !z-10
				flex h-auto w-full flex-row items-center justify-end 
				gap-x-2 bg-secondary-default bg-opacity-15 px-2 py-1'
			>
				<div className='grow flex-nowrap space-x-1 truncate'>
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
						onTap={() => window.open(link, '_blank')}
						className='text-secondary !rounded-[0.2rem] border-secondary-default 
						font-normal normal-case hover:cursor-pointer hover:bg-secondary-default
						hover:text-black-default'
						icon={<Link size={'sm'} />}
						value='Link'
					/>
				)}
			</div>
		</Accordion>
	)
}

export default ProjectCard
