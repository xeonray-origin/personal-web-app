import { ReactElement } from 'react'
import { FolderKanban, Home } from 'lucide-react'

export type pageLinkType = 'home' | 'projects'

export interface IPageConfig {
	link: pageLinkType
	icon: ReactElement
}

export const pages: IPageConfig[] = [
	{
		link: 'home',
		icon: <Home />,
	},
	{
		link: 'projects',
		icon: <FolderKanban />,
	},
]
