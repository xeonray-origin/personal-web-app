import { Card, Typography } from '@/components/ui'

const ProjectCard = () => {
	return (
		<Card
			className='h-[15rem] min-w-[100%] !rounded-[0.2rem] border-[0.1rem]  border-secondary bg-transparent'
			placeholder={''}
		>
			<div></div>
			<Typography placeholder={''}>Project 1</Typography>
		</Card>
	)
}

const Projects = () => {
	return (
		<div className=''>
			<div className='rounded-2 rounded-2 flex h-[5rem]  w-[100vw] flex-row flex-wrap items-center justify-center bg-[url(/header.svg)] pr-5 md:pl-3 lg:w-[calc(100vw-15rem)]'>
				<Typography
					placeholder={''}
					className=' font-extrabold uppercase text-white text-opacity-10'
					variant='h1'
				>
					Projects
				</Typography>
			</div>
			<div className=' w-100 h-[100%] p-7 pr-7 lg:w-[calc(100vw-15rem)] '>
				<div className='item-center flex  flex-row flex-wrap gap-4'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</div>
	)
}

export default Projects
