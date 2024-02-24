import { home } from '@/config'

import { Button, Typography } from './ui'

const SpecialButton = (props: any) => {
	const { text } = props
	return (
		<Button
			ripple={false}
			placeholder={''}
			className='m-1 rounded-[0.3rem] border-[0.01rem]  !border-secondary  !border-secondary !border-opacity-20 bg-black-default p-3 font-normal normal-case text-secondary hover:bg-inherit'
			variant='text'
		>
			{text}
		</Button>
	)
}

const Skills = () => {
	return (
		<div className='mt-6 w-full text-center md:pl-5 md:pr-1 md:text-left md:text-lg lg:mt-0 lg:pl-0'>
			<Typography
				placeholder={''}
				className='text-md lg:text-lg'
				variant='lead'
			>
				Skills and Technology
			</Typography>
			<div className='pl-1'>
				{home.skills.map((skill) => (
					<SpecialButton text={skill} />
				))}
			</div>
		</div>
	)
}

export default Skills
