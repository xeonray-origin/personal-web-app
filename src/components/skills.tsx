import { home } from '@/config'

import { Button, Typography } from './ui'

const SpecialButton = (props: any) => {
	const { text, key } = props
	return (
		<Button
			key={key}
			ripple={false}
			placeholder={''}
			className='size-sm dark:bg-black-dark m-1 rounded-[0.3rem] border-[0.01rem] 
			!border-secondary !border-opacity-20 bg-black-default p-3 font-normal normal-case text-secondary 
			hover:cursor-default hover:bg-inherit'
			variant='text'
		>
			{text}
		</Button>
	)
}

const Skills = () => {
	return (
		<div className='mt-7 w-full text-center md:pl-5 md:pr-1 md:text-left md:text-lg lg:mt-4 lg:pl-0'>
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
