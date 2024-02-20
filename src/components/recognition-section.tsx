'use client'

import { useState } from 'react'
import { Medal, ShieldCheck } from 'lucide-react'

import { Accordion, AccordionBody, AccordionHeader, Typography } from './ui'

const sampleData = [
	{
		header: 'Lorem Ipsum',
		year: '2020',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		icon: <ShieldCheck />,
	},
	{
		header: 'Lorem Ipsum of Lorem',
		year: '2019',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		icon: <Medal />,
	},
]

const RecognitionSection = () => {
	const [open, setOpen] = useState<number | null>(null)

	const handleClick = (index: number) => {
		if (open === index) {
			setOpen(null)
			return
		}
		setOpen(index)
	}

	return (
		<div className='mt-[3rem] px-3 lg:px-0'>
			<Typography placeholder={''} variant='lead'>
				Recognition
			</Typography>
			{sampleData.map((data, index) => {
				return (
					<Accordion
						className='lg:pl-2'
						placeholder={''}
						onClick={() => handleClick(index)}
						open={open === index}
						key={index}
						icon={data.icon}
					>
						<AccordionHeader
							placeholder={''}
							className='border-secondary text-[1rem] text-white text-opacity-60'
						>
							{data.header}
							{data.year}
						</AccordionHeader>
						<AccordionBody clasName='text-secondary text-[1rem]'>
							<Typography placeholder={''} variant='paragraph' color='white'>
								{data.description}
							</Typography>
						</AccordionBody>
					</Accordion>
				)
			})}
		</div>
	)
}

export default RecognitionSection
