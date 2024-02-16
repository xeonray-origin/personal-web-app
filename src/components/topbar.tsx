import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import ModeToggle from './mode-toggle'

const Topbar = () => {
	return (
		<div className='flex w-full flex-wrap justify-between px-80 pt-2'>
			<div className=''>
				<Avatar className='size-[3rem] items-start'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
			<ModeToggle />
		</div>
	)
}

export default Topbar
