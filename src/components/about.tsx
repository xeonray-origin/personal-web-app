import { home } from '@/config'

import { Typography } from './ui'

const SECTION_HEADER = 'About me'

const About = () => {
	return (
		<div className='pr-1'>
			<Typography
				placeholder={''}
				className='text-center font-bold md:text-left '
				variant='lead'
			>
				{SECTION_HEADER}
			</Typography>
			<Typography
				className='text-center font-medium md:text-left'
				placeholder={''}
				variant='paragraph'
			>
				{home.about}
			</Typography>
		</div>
	)
}

export default About
