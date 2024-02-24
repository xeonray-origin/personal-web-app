import Image from 'next/image'
import { BellIcon, Building2, DollarSign, HomeIcon } from 'lucide-react'

import {
	Timeline,
	TimelineBody,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineItem,
	Typography,
} from './ui'

const ExperienceTimeline = () => {
	return (
		<div className='mt-[2rem]'>
			<Typography
				className='mt-[1rem] text-center md:text-left'
				placeholder={''}
				variant='lead'
			>
				Work Experience
			</Typography>
			<div className='mt-5 w-[90%]'>
				<Timeline>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader>
							<TimelineIcon className='p-2'>
								<Building2 />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Senior Software Engineer at Optym
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								Worked on the application layer of optimizer for Southwest
								Airlines. Created react components library to be used across
								projects. Successfully delivered POCs to gain new clients.
								Implemented AES encryption system for web application
								Spearheaded development of SaaS and B2B applications related to
								Logistics Optimization and Supply Chain Management and
								implemented customized Gantt Scheduler Successfully optimized
								workflows to enhance performance Mentored juniors on React and
								development patterns Established secure coding practices Worked
								on live maps, graphs and tracking features
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader>
							<TimelineIcon className='p-2'>
								<Building2 />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Software Engineer at Razrlab
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								Mostly worked on the MERN stack application Created a PaaS
								product that served 15 B2B clients from a single generator stack
								Implemented custom RSA for secure sharing Worked on tracking
								systems for the Dubai Police Implemented end-to-end encryption
								system for secure communication using WebSockets Implementing
								broker agents like RabbitMQ. Node server with caching and
								microservices
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineHeader>
							<TimelineIcon className='p-2'>
								<Building2 />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Fullstack Developer | SME at Nat IT Solved, presently CBNITS
							</Typography>
						</TimelineHeader>
						<TimelineBody>
							<Typography placeholder={''} className='font-normal text-white'>
								Implemented UI workflow for interactive learning application on
								ReactNative Created outlook add-in for seamless integration of
								security features Implemented file encryption system Worked on
								sharing and collaboration features Mentored juniors on creating
								sustainable tech stack based on SOLID principles. Implemented
								storage agnostic information rights management Established
								successful SDLCs for multiple products Successfully created POCs
								for gaining new clients
							</Typography>
						</TimelineBody>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	)
}
export default ExperienceTimeline
