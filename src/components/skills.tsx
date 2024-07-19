import { home } from '@/config'

import { Button, Typography } from './ui'

interface ISpecialButtonProps {
	text: string
	key: string | number
}

const SpecialButton = (props: ISpecialButtonProps) => {
	const { text } = props
	return (
		<Button
			ripple={false}
			placeholder={''}
			size='sm'
			className='size-sm text-secondary m-1 rounded-[0.3rem] border-[0.01rem] 
			bg-black-default !p-2 font-normal normal-case hover:cursor-default 
			hover:bg-black-default dark:border-secondary-dark dark:bg-black-dark dark:bg-black-dark'
			variant='text'
		>
			{text}
		</Button>
	)
}

const Skills = () => {
	return (
		<div
			className='mt-7 w-full text-center md:pl-5 md:pr-1 md:text-left md:text-lg 
			lg:mt-4 lg:pl-0'
		>
			<Typography
				placeholder={''}
				className='text-md lg:text-lg'
				variant='lead'
			>
				Skills and Technology
			</Typography>
			<div className='mt-4 pl-1'>
				{home.skills.map((skill, index) => (
					<SpecialButton key={index} text={skill} />
				))}
			</div>
		</div>
	)
}

export default Skills
