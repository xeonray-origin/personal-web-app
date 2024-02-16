import { Avatar } from '@/components/ui/avatar'

import { AvatarFallback, AvatarImage, H1, H2, H5 } from './ui'

const HeroSection = () => {
	return (
		<div className='h-[50rem] w-full pt-[3rem]'>
			{/* <div className=' mt-4 flex w-full bg-red-400'>
				<Avatar className='size-[10rem] self-center'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div> */}
			<div className='mt-4'>
				<H5>Hi, I am Amrit a fullstack developer !</H5>
			</div>
			<div className='mt-4 w-full justify-center text-left align-middle'>
				<H2>
					A fullstack web developer with more than 4 years of experience and a
					real passion towards making complex systems and interactive UI
				</H2>
			</div>
		</div>
	)
}

export default HeroSection
