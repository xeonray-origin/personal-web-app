import Image from 'next/image'
import { HeroSection, ModeToggle } from '@/components'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-80'>
			<HeroSection />
		</main>
	)
}
