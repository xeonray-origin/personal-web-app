'use client'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { lightTheme } from '@/styles'

import { ThemeProvider } from '@/components/ui'

import '@/styles/globals.css'

import { FloatingMenu, Sidebar } from '@/components'
import { cn } from '@/lib/utils'

const font = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
})

// export const metadata: Metadata = {
// 	title: 'Amritendu Bhattacharjee',
// 	applicationName: 'Amritendu Bhattacharjee',
// 	authors: [{ name: 'Amritendu Bhattacharjee' }],
// 	description: 'Software Developer | Cybersecurity Enthusiast',
// 	icons: [
// 		{ rel: 'icon', url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
// 	],
// 	generator: `Amritendu Bhattacharjee, amritendu, bhattacharjee, software engineer,
// 		developer, fullstack developer, senior software engineer, optym, optym india,
// 		optym india pvt ltd, optym india pvt. ltd., optym india pvt. ltd., razrlab,
// 		cbnits, `,
// 	robots: {
// 		googleBot: {
// 			follow: true,
// 			index: true,
// 		},
// 	},
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={font.variable} lang='en' suppressHydrationWarning>
			<body className={cn('bg-background antialiased')}>
				<div className='flex bg-primary'>
					<Sidebar />
					<div className='w-100 h-[100%] max-w-[2400px] bg-primary pb-20 pr-0 lg:ml-[14rem] lg:pr-5'>
						{children}
					</div>
					<div className='fixed bottom-5 right-5 lg:hidden'>
						<FloatingMenu />
					</div>
				</div>
			</body>
		</html>
	)
}
