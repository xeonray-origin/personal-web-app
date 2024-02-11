import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Array<ClassValue>) {
	return twMerge(clsx(inputs))
}

export const downloadResume = () => {
	const link = document.createElement('a')
	link.download = `resume.pdf`
	link.href = '/resume.pdf'
	link.click()
}
