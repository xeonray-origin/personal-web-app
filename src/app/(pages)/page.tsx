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
			<Header />
			<div className='mt-3 flex min-h-[100vh] w-full flex-wrap md:flex-row'>
				<div className=' w-full px-5 pt-5 text-white md:w-[70%]'>
					<About />
					<ExperienceTimeline />
				</div>
				<div className='w-full flex-wrap px-2 py-1 text-white md:w-[30%]'>
					<Skills />
					<Projects />
				</div>
			</div>
		</div>
	)
}
