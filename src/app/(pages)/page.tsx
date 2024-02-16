import { About, Header } from '@/components'

import { Button, Typography } from '@/components/ui'

export default function Home() {
	return (
		<div>
			<Header />
			<div className='mt-3 flex h-[80vh] w-full flex-row'>
				<About />
				<div className='w-[30%] flex-wrap px-2 py-1 text-white'>
					<Typography placeholder={''} className='font-bold' variant='lead'>
						I write:
					</Typography>
					<div className='pl-3'>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							HTML, CSS, Javascript
						</Button>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							NodeJS
						</Button>
						<Button
							placeholder={''}
							className=' m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							ReactJS
						</Button>

						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							ElectronJS
						</Button>
						<Button
							placeholder={''}
							className=' m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							ReactNative
						</Button>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							MaterialUI
						</Button>

						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							TailwindCSS
						</Button>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							Python
						</Button>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							NextJS
						</Button>
						<Button
							placeholder={''}
							className='m-1 rounded-none bg-black p-3 font-thin normal-case text-secondary'
							variant='text'
						>
							NestJS
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
