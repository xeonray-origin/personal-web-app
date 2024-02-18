import {
	About,
	ExperienceTimeline,
	Header,
	Projects,
	Skills,
} from '@/components'
import { Github } from 'lucide-react'

import { Button, Typography } from '@/components/ui'

export default function Home() {
	return (
		<div>
			<div className='relative mb-[7rem]'>
				<Header />
			</div>
			<div className='flex min-h-[100vh] w-full flex-wrap'>
				<div className=' px-5 pt-5 text-white lg:w-[70%]'>
					<About />
					<ExperienceTimeline />
				</div>
				<div className='xs:max-md:hidden w-full flex-wrap px-2 py-1 text-white md:w-[30%]'>
					<Skills />
					<Projects />
				</div>
			</div>
		</div>
	)
}
