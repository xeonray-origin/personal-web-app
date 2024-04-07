'use client'

import { type ReactElement } from 'react'

import {
	List,
	ListItem,
	TimelineBody,
	TimelineConnector,
	TimelineHeader,
	TimelineIcon,
	TimelineItem,
	Typography,
} from './ui'

export interface ITimelineItemProps {
	icon: ReactElement
	heading: string
	descriptionArr: Array<string>
	to?: string
	from?: string
}

const TimelineItemRenderer = (props: ITimelineItemProps) => {
	const { heading, icon, descriptionArr, to, from } = props
	return (
		<TimelineItem>
			<TimelineConnector />
			<TimelineHeader>
				<TimelineIcon
					className='bg-secondary-default p-2 text-white-default
          dark:bg-secondary-dark dark:text-[#212121]'
				>
					{icon}
				</TimelineIcon>
				<Typography
					placeholder={''}
					variant='lead'
					className='font-bold text-secondary-default dark:text-secondary-dark'
				>
					{heading}
				</Typography>
			</TimelineHeader>
			<TimelineBody className='pb-8'>
				<List className=''>
					{descriptionArr.map((description) => (
						<ListItem
							ripple={false}
							className='!pointer-events-none !mt-2 !p-0 text-[#212121] dark:text-white-default'
						>
							{description}
						</ListItem>
					))}
				</List>
			</TimelineBody>
		</TimelineItem>
	)
}

export default TimelineItemRenderer
