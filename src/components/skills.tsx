import { Button, Typography } from './ui'

const Skills = () => {
	return (
		<div className='mt-6 w-full text-center md:pl-5 md:pr-1 md:text-left md:text-lg lg:mt-0 lg:pl-0'>
			<Typography
				placeholder={''}
				className='text-md font-bold lg:text-lg'
				variant='lead'
			>
				I write
			</Typography>
			<div className=''>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					HTML, CSS, Javascript
				</Button>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					NodeJS
				</Button>
				<Button
					placeholder={''}
					className=' m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					ReactJS
				</Button>

				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					ElectronJS
				</Button>
				<Button
					placeholder={''}
					className=' m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					ReactNative
				</Button>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					MaterialUI
				</Button>

				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					TailwindCSS
				</Button>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					Python
				</Button>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					NextJS
				</Button>
				<Button
					placeholder={''}
					className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
					variant='text'
				>
					NestJS
				</Button>
			</div>
		</div>
	)
}

export default Skills
