import { Metadata } from 'next'
import {
	About,
	AcademicTimeline,
	ExperienceTimeline,
	Header,
	Projects,
	RecognitionSection,
	Skills,
} from '@/components'

export const metadata: Metadata = {
	title: 'Amritendu Bhattacharjee',
	applicationName: 'Amritendu Bhattacharjee',
	authors: [{ name: 'Amritendu Bhattacharjee' }],
	description: 'Software Developer | Cybersecurity Enthusiast',
	icons: [
		{ rel: 'icon', url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
	],
	generator: `Amritendu Bhattacharjee, amritendu, bhattacharjee, software engineer,
		developer, fullstack developer, senior software engineer, optym, optym india,
		optym india pvt ltd, optym india pvt. ltd., optym india pvt. ltd., razrlab,
		cbnits,`,
	robots: {
		googleBot: {
			follow: true,
			index: true,
		},
	},
}

export default function Home() {
	return (
		<div>
			<div className='relative mb-[7rem]'>
				<Header />
			</div>
			<div className='flex min-h-[100vh] w-full flex-wrap'>
				<div className=' w-100 px-5 pt-5 text-white lg:w-[70%]'>
					<About />
					<ExperienceTimeline />
					<AcademicTimeline />
				</div>
				<div className=' w-full flex-wrap text-white lg:w-[30%]'>
					<Skills />
					<Projects />
					<RecognitionSection />
				</div>
			</div>
		</div>
	)
}
