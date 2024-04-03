'use client'

import { useState } from 'react'
import { Medal, ShieldCheck } from 'lucide-react'

import { Accordion, AccordionBody, AccordionHeader, Typography } from './ui'

const sampleData = [
	{
		header: 'Hacker Rank React',
		year: '2020',
		description: 'Certified React Developer',
		icon: <ShieldCheck />,
	},
	{
		header: 'Hacker Rank Javascript',
		year: '2020',
		description: 'Certified Javascript Developer.',
		icon: <ShieldCheck />,
	},
	{
		header: 'Best Team of the Quarter',
		year: '2019',
		description:
			'I was recognized as a part the best team of the quarter for my contribution to the project.',
		icon: <Medal />,
	},
	{
		header: 'Star Performer',
		year: '2019',
		description:
			'I was honored as the star performer of the year for my exceptional performance in the project.',
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
				Certifications and Recognitions
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
							className='border-secondary !text-black text-[1rem] dark:text-white-default'
						>
							{data.header} {data.year}
						</AccordionHeader>
						<AccordionBody>
							<Typography
								className='text-[0.8rem] font-normal text-black-dark dark:text-white-default'
								placeholder={''}
								variant='paragraph'
								color='white'
							>
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
