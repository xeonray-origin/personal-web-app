import {
	About,
	AcademicTimeline,
	ExperienceTimeline,
	Header,
	Projects,
	RecognitionSection,
	Skills,
} from '@/components'

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
