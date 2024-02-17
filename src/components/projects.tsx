import { Github } from 'lucide-react'

import { Button, Typography } from './ui'

const ProjectHolder = () => (
	<div className='mt-2 min-h-[10rem] min-w-10 rounded-none border-[0.1rem] border-secondary bg-primary p-3 font-thin'>
		<div className='container'>
			<div className='item-denter flex flex-row'>
				<div className='grow'>
					<Typography
						placeholder={''}
						className='font-bold'
						variant='paragraph'
					>
						Weather App
					</Typography>
				</div>
				<Github className='text-secondary' />
			</div>
			<div className='item-denter flex flex-row'>
				<Typography placeholder={''} className='text-xs' variant='small'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Typography>
			</div>
			<div className='item-denter mt-3 flex flex-row flex-wrap'>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					Typescript
				</Button>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					Nextjs
				</Button>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					Tailwind
				</Button>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					React
				</Button>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					React
				</Button>
				<Button
					disabled
					size='sm'
					placeholder={''}
					variant='text'
					className='rounded-none bg-black text-secondary'
				>
					React
				</Button>
			</div>
		</div>
	</div>
)

const Projects = () => {
	return (
		<div className='mt-[5rem]'>
			<div className='flex items-center'>
				<div className='grow'>
					<Typography className='font-bold' placeholder={''} variant='lead'>
						Most Recent Projects
					</Typography>
				</div>

				<Typography
					placeholder={''}
					className='cursor-pointer text-end text-blue-500'
					variant='paragraph'
				>
					See all projects
				</Typography>
			</div>
			<ProjectHolder />
			<ProjectHolder />
		</div>
	)
}

export default Projects
