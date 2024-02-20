import { Card, Typography } from '@/components/ui'

const ProjectCard = () => {
	return (
		<Card
			className='h-[15rem] w-[100%] !rounded-[0.2rem] border-[0.1rem]  border-secondary bg-transparent'
			placeholder={''}
		>
			<Typography placeholder={''}>Project 1</Typography>
		</Card>
	)
}

const Projects = () => {
	return (
		<div className='h-[100vh] p-7 pr-0 '>
			<div className='grid-flow-rows grid w-full grid-flow-row-dense grid-cols-3 gap-2'>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	)
}

export default Projects
