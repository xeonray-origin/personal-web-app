import { Button, Typography } from './ui'

const Skills = () => {
	return (
		<>
			<Typography placeholder={''} className='font-bold' variant='lead'>
				I write
			</Typography>
			<div className='pl-3'>
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
		</>
	)
}

export default Skills
