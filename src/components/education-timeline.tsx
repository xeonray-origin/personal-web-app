import { BellIcon, DollarSign, GraduationCap, HomeIcon } from 'lucide-react'

import {
	Timeline,
	TimelineBody,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineItem,
	Typography,
} from './ui'

const EducationTimeline = () => {
	return (
		<div className='mt-[2rem]'>
			<Typography
				className='mt-[1rem] text-center md:text-left'
				placeholder={''}
				variant='lead'
			>
				Academic Chronology
			</Typography>
			<div className='mt-5 w-[90%]'>
				<Timeline>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader>
<<<<<<< HEAD
							<TimelineIcon className='bg-secondary p-2 text-black-default'>
=======
							<TimelineIcon className='p-2'>
>>>>>>> 759029fe8012b9b6e700287ed6c8dfd24c4c08ef
								<GraduationCap />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								University of Southampton, MS in Cybersecurity
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								2015-2016
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineHeader>
<<<<<<< HEAD
							<TimelineIcon className='bg-secondary p-2 text-black-default'>
=======
							<TimelineIcon className='p-2'>
>>>>>>> 759029fe8012b9b6e700287ed6c8dfd24c4c08ef
								<GraduationCap />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								West Bengal University of Technology, Bachelor of Computer
								Application
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								2011-2014
							</Typography>
						</TimelineBody>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	)
}
export default EducationTimeline
