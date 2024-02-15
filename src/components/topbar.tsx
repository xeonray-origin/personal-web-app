import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import ModeToggle from './mode-toggle'

const Topbar = () => {
	return (
		<div className='flex w-full flex-wrap items-center justify-between  p-1 px-3'>
			<div className='flex-1'>
				<Avatar className='size-[2rem]'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>

			<ModeToggle />
		</div>
	)
}

export default Topbar
