'use client'

import { useState, type JSX, type RefAttributes } from 'react'
import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button, type ButtonProps } from '@/components/ui/button'

const ModeToggle = (
	props: JSX.IntrinsicAttributes &
		ButtonProps &
		RefAttributes<HTMLButtonElement>,
) => {
	const { setTheme } = useTheme()
	const [isDark, setIsDark] = useState(false)

	const handleThemeChange = () => {
		setTheme(!isDark ? 'light' : 'dark')
		setIsDark(!isDark)
	}

	return (
		<Button
			className='border-0'
			{...props}
			variant='outline'
			size='sm'
			onClick={handleThemeChange}
		>
			{!isDark ? (
				<SunMedium className='size-[1.2rem] rotate-0 scale-100 transition-all' />
			) : (
				<Moon className='size-[1.2rem] rotate-0 scale-100 transition-all' />
			)}
		</Button>
	)
}

export default ModeToggle
