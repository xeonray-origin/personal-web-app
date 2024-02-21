import { projects } from '@config'
import { Github, Link } from 'lucide-react'

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Button,
	Card,
	IconButton,
	Typography,
} from '@/components/ui'

const ProjectCard = () => {
	return (
		<Card
			className='h-[15rem] min-w-[30rem] !rounded-[0.2rem] border-[0.1rem]  border-secondary bg-transparent'
			placeholder={''}
		>
			<div></div>
			<Typography placeholder={''}>Project 1</Typography>
		</Card>
	)
}

const ProjectsDropdown = (props: any) => {
	const { title, longDescription, git, shortDescription, icon } = props
	return (
		<Accordion
			className='!h-full !rounded-[0.5rem] border-[0.1rem] border-secondary border-opacity-20  shadow-secondary'
			placeholder={''}
			open={true}
		>
			<AccordionHeader
				placeholder={''}
				className='bg-black-default flex  flex-row flex-wrap !rounded-[0.5rem] border-b-0 !border-secondary pl-2 text-white hover:cursor-default hover:!text-white'
			>
				<div className='flex flex-row space-x-2 '>
					<Typography placeholder={''} variant='h3'>
						{title}
					</Typography>
					<IconButton placeholder={''} className='bg-transparent'>
						{icon}
					</IconButton>
				</div>

				<Typography
					placeholder={''}
					className='text-sm font-medium'
					variant='paragraph'
				>
					{shortDescription}
				</Typography>
			</AccordionHeader>
			<AccordionBody className='!rounded-[0.5rem] border-none p-2  text-white'>
				<Typography
					placeholder={''}
					variant='paragraph'
					className='text-balance'
				>
					{longDescription}
				</Typography>

				<div className='!rounded-b-full-[0.3rem] absolute bottom-0 right-0 flex h-auto w-[100%] flex-row items-center justify-end gap-x-2 bg-secondary bg-opacity-15 px-2 py-1'>
					<div className='item-center pt-auto grow flex-wrap space-x-1'>
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='bg-black-default rounded-md text-secondary'
						>
							Typescript
						</Button>
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='bg-black-default rounded-md text-secondary'
						>
							Nextjs
						</Button>
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='bg-black-default rounded-md text-secondary'
						>
							Tailwind
						</Button>
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='bg-black-default rounded-md text-secondary'
						>
							React
						</Button>
						<Button
							size='sm'
							placeholder={''}
							variant='text'
							className='bg-black-default rounded-md text-secondary'
						>
							React
						</Button>
					</div>
					<IconButton size='sm' className='bg-secondary p-3'>
						<Github className='text-black-default' />
					</IconButton>
					<IconButton size='sm' className='bg-secondary p-3'>
						<Link className='text-black-default' />
					</IconButton>
				</div>
			</AccordionBody>
		</Accordion>
	)
}

const Projects = () => {
	return (
		<div className='flex w-auto flex-row flex-wrap items-start lg:w-[calc(100vw-16rem)]'>
			<div className='min-h-[100vh] w-full'>
				<div className=' flex h-[5rem] w-full flex-row items-center justify-center bg-[url(/header.svg)]'>
					<Typography
						placeholder={''}
						className=' font-extrabold uppercase text-white text-opacity-20'
						variant='h1'
					>
						Projects
					</Typography>
				</div>
				<div className='lg:gap-right-0 flex  !h-[100%] w-full flex-row flex-wrap gap-2 px-5 pb-3 pt-5 md:gap-1 lg:gap-y-3 lg:pr-0'>
					{projects.sampleData.map((data) => {
						return (
							<div className='h-auto min-h-[26rem] w-full lg:max-w-[49.6%]'>
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
