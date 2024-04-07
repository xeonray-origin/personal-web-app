import { ProjectCard } from '@/components'
import { projects } from '@config'

const Projects = () => {
	return (
		<div className='mt-40 '>
			<div className='flex min-h-full !w-full flex-wrap justify-center'>
				{projects.sampleData.map((data: any) => {
					return <ProjectCard key={data.id} {...data} />
				})}
			</div>
		</div>
	)
}

export default Projects
