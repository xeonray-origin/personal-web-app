import { studyTimeline } from '@/config/home'

import TimelineItemRenderer from './timeline-rederer'
import { Timeline, Typography } from './ui'

const EducationTimeline = () => {
	return (
		<div className='mt-8'>
			<Typography
				className='mt-4 text-center font-bold md:text-left'
				placeholder={''}
				variant='lead'
			>
				Academic Chronology
			</Typography>
			<div className='mt-5 w-[90%]'>
				<Timeline>
					{studyTimeline.map((item) => {
						return (
							<TimelineItemRenderer
								key={Math.random()}
								heading={item.heading}
								icon={item.icon}
								from={item.from}
								to={item.to}
								descriptionArr={item.descriptionArr}
							/>
						)
					})}
				</Timeline>
			</div>
		</div>
	)
}
export default EducationTimeline
