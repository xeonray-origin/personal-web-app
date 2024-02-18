import { Github } from 'lucide-react'

import { Button, Typography } from './ui'

const ProjectHolder = () => (
	<div className='mt-2 min-h-[5rem] min-w-full rounded-none border-[0.1rem] border-secondary bg-primary p-3 font-thin'>
		<div className='item-center flex'>
			<div className='grow'>
				<Typography placeholder={''} className='font-bold' variant='paragraph'>
					Weather App
				</Typography>
			</div>
			<Github className='text-secondary' />
		</div>
		<div className='item-start flex flex-row'>
			<Typography placeholder={''} className='text-xs' variant='small'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</Typography>
		</div>
		<div className='item-end mt-3  h-[100%] grid-flow-row'>
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
)

const Projects = () => {
	return (
		<div className='mt-[2rem]'>
			<div className='flex items-start px-2 lg:px-0'>
				<div className='grow'>
					<Typography
						className='sm:text-md text-nowrap  text-sm font-bold md:text-lg lg:text-lg'
						placeholder={''}
						variant='lead'
					>
						Most Recent Projects
					</Typography>
				</div>

				<Typography
					placeholder={''}
					className='cursor-pointer  text-nowrap text-end text-sm text-blue-500 lg:text-sm'
					variant='paragraph'
				>
					See all projects
				</Typography>
			</div>
			<div className=' w-100 px-0 sm:mx-5 md:mx-2 lg:mx-0'>
				<ProjectHolder />
				<ProjectHolder />
			</div>
		</div>
	)
}

export default Projects
