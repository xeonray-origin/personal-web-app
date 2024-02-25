import { workTimeline } from '@/config/home'

import TimelineItemRenderer from './timeline-rederer'
import { Typography } from './ui'

const ExperienceTimeline = () => {
	return (
		<div className='mt-8'>
			<Typography
				className='mt-4 text-center font-bold md:text-left'
				placeholder={''}
				variant='lead'
			>
				Work Experience
			</Typography>
			<div className='mt-5 w-[90%]'>
				{workTimeline.map((item) => {
					return (
						<TimelineItemRenderer
							heading={item.heading}
							icon={item.icon}
							from={item.from}
							to={item.to}
							descriptionArr={item.descriptionArr}
						/>
					)
				})}
			</div>
		</div>
	)
}
export default ExperienceTimeline
