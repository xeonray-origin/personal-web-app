import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { lightTheme } from '@/styles'

import { Button, ThemeProvider } from '@/components/ui'

import '@/styles/globals.css'

import { FloatingMenu, Header, Sidebar } from '@/components'
import { cn } from '@/lib/utils'

const font = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Amritendu Bhattacharjee',
	description: 'Software Developer | Cybersecurity Enthusiast',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={font.variable} lang='en' suppressHydrationWarning>
			<body className={cn('bg-background antialiased')}>
				<ThemeProvider
					value={{
						theme: lightTheme,
					}}
				>
					<div className='flex bg-primary'>
						<Sidebar />
						<div className=' w-100 h-[100%] max-w-[2400px]  bg-primary pb-20 pr-0 lg:ml-[14rem] lg:pr-5'>
							{children}
						</div>
						<div className='fixed bottom-5 right-5 lg:hidden'>
							<FloatingMenu />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
