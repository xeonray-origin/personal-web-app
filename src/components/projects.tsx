import { Github, Link } from 'lucide-react'

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Button,
	Chip,
	Typography,
} from './ui'

const ProjectHolder = () => (
	<Accordion
		className=' !min-h-[10rem] rounded-sm border-[0.1rem] border-secondary border-opacity-20 pb-2 shadow-sm'
		placeholder={''}
		open={true}
	>
		<AccordionHeader
			placeholder={''}
			className=' space-x-1 border-b-0 !border-secondary p-2 pl-2 pr-0
			text-white hover:cursor-default hover:!text-white'
		>
			<div className='grow'>
				<Typography placeholder={''} className='' variant='paragraph'>
					Weather App
				</Typography>
			</div>
			<Chip
				size='sm'
				className='hover:text-black-default !rounded-[0.3rem] border-secondary 
				font-thin normal-case text-secondary hover:cursor-pointer hover:bg-secondary'
				variant='outlined'
				icon={<Link size={'sm'} />}
				value='Link'
			/>
			<Chip
				size='sm'
				className=' hover:text-black-default !rounded-[0.3rem] border-secondary 
				font-thin normal-case text-secondary hover:cursor-pointer	hover:bg-secondary'
				icon={<Github size={'sm'} />}
				value='Repo'
				variant='outlined'
			/>
		</AccordionHeader>

		<AccordionBody className='mt-3 flex flex-col border-none pt-0 text-white'>
			<div className=' w-full pl-2 pt-0'>
				<Typography placeholder={''} className='text-xs' variant='small'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Typography>
			</div>
			<div className='absolute bottom-0 left-0 right-0 flex w-full flex-row flex-wrap justify-end space-x-1'>
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
		</AccordionBody>
	</Accordion>
)

const Projects = () => {
	return (
		<div className='mt-[2rem]'>
			<div className='mt-2 flex items-start px-2 lg:px-0'>
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
					className='cursor-pointer text-nowrap text-end text-sm text-blue-500 lg:text-sm'
					variant='paragraph'
				>
					See all projects
				</Typography>
			</div>
			<div className=' w-100 flex flex-col justify-center space-y-2 sm:mx-0 sm:pr-[0rem] md:mx-2 lg:mx-0 lg:pl-2'>
				<ProjectHolder />
				<ProjectHolder />
			</div>
		</div>
	)
}

export default Projects
