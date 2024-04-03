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
							<TimelineIcon className='bg-secondary-default p-2 text-black-default text-black-default dark:bg-secondary-dark dark:text-black-dark'>
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
							<Typography placeholder={''} className='text-white font-normal'>
								Exposure to live pentesting techniques and tools. Learned
								indepth about cyberspace and cyber crimes. Learned about
								cryptography. Exposure to Security Analysis lifecycle and
								implementation strategies. The dissertation was about
								demonstrating vulnerabilities of Near Field Communication
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineHeader>
							<TimelineIcon className='bg-secondary-default p-2 text-black-default text-black-default dark:bg-secondary-dark dark:text-black-dark'>
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
						<TimelineBody className='pb-8'></TimelineBody>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	)
}
export default EducationTimeline
