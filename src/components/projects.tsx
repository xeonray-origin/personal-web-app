import { Github, Link } from 'lucide-react'

import { Button, Chip, Typography } from './ui'

const ProjectHolder = () => (
	<div className='mx-2 mr-[1.2rem] mt-2 min-h-[5rem] !rounded-[0.4rem] border-[1px] border-secondary bg-primary p-2 font-thin sm:mr-0'>
		<div className='item-center flex gap-x-1'>
			<div className='grow'>
				<Typography placeholder={''} className='' variant='paragraph'>
					Weather App
				</Typography>
			</div>
			<Chip
				size='sm'
				className='!rounded-[0.3rem] border-secondary font-thin normal-case text-secondary'
				variant='outlined'
				icon={<Link size={'sm'} />}
				value='Link'
			/>
			<Chip
				size='sm'
				className=' !rounded-[0.3rem] border-secondary font-thin normal-case text-secondary'
				icon={<Github size={'sm'} />}
				value='Repo'
				variant='outlined'
			/>
		</div>
		<div className='item-start flex flex-row pt-5'>
			<Typography placeholder={''} className='text-xs' variant='small'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry.
			</Typography>
		</div>
		<div className='item-end mt-3  h-[100%] grid-flow-row'>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
			>
				Typescript
			</Button>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
			>
				Nextjs
			</Button>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
			>
				Tailwind
			</Button>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
			>
				React
			</Button>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
			>
				React
			</Button>
			<Button
				size='sm'
				placeholder={''}
				variant='text'
				className='bg-black-default rounded-none text-secondary'
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
						className='sm:text-md text-nowrap  text-sm  md:text-lg lg:text-lg'
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
			<div className=' w-100 flex flex-col justify-center sm:mx-0 sm:pr-[0rem] md:mx-2 lg:mx-0'>
				<ProjectHolder />
				<ProjectHolder />
			</div>
		</div>
	)
}

export default Projects
