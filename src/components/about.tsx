import { Typography } from './ui'

const About = () => {
	return (
		<div>
			<Typography placeholder={''} className='font-bold' variant='lead'>
				About me
			</Typography>
			<Typography placeholder={''} variant='paragraph'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus
			</Typography>
			<Typography className='mt-3' variant='paragraph' placeholder={undefined}>
				PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
				text of the printing and typesetting industry. Lorem Ipsum has been the
				industrys standard dummy text ever since the 1500s, when an unknown
				printer took a galley of type and scrambled it to make a type specimen
				book. It has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets containing
				Lorem Ipsum passages, and more recently with desktop publishing software
				like Aldus PageMaker including versions of Lorem Ipsum.{' '}
			</Typography>
			<Typography
				placeholder={''}
				className='mt-3 cursor-pointer text-blue-500'
				variant='paragraph'
			>
				Read more ...
			</Typography>
		</div>
	)
}

export default About
