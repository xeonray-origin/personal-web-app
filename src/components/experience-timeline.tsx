import { BellIcon, DollarSign, HomeIcon } from 'lucide-react'

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
				className='mt-[1rem] text-center font-bold md:text-left'
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
								<HomeIcon className='size-4' />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Timeline Title Here.
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineConnector />
						<TimelineHeader>
							<TimelineIcon className='p-2'>
								<BellIcon className='size-4' />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Timeline Title Here.
							</Typography>
						</TimelineHeader>
						<TimelineBody className='pb-8'>
							<Typography placeholder={''} className='font-normal text-white'>
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
					<TimelineItem>
						<TimelineHeader>
							<TimelineIcon className='p-2'>
								<DollarSign className='size-4' />
							</TimelineIcon>
							<Typography
								placeholder={''}
								variant='h5'
								className='text-secondary'
							>
								Timeline Title Here.
							</Typography>
						</TimelineHeader>
						<TimelineBody>
							<Typography placeholder={''} className='font-normal text-white'>
								The key to more success is to have a lot of pillows. Put it this
								way, it took me twenty five years to get these plants, twenty
								five years of blood sweat and tears, and I&apos;m never giving
								up, I&apos;m just getting started. I&apos;m up to something. Fan
								luv.
							</Typography>
						</TimelineBody>
					</TimelineItem>
				</Timeline>
			</div>
		</div>
	)
}
export default ExperienceTimeline
