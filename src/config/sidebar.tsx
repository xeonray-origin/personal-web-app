import { type ReactElement } from 'react'
import {
	FolderKanban,
	FolderKanbanIcon,
	Home,
	HomeIcon,
	PenToolIcon,
} from 'lucide-react'

export type pageLinkType = 'home' | 'projects' | 'blogs'

export interface IPageConfig {
	link: pageLinkType
	icon: ReactElement
}

export const pages: Array<IPageConfig> = [
	{
		link: 'home',
		icon: <HomeIcon />,
	},
	{
		link: 'projects',
		icon: <FolderKanbanIcon />,
	},
	{
		link: 'blogs',
		icon: <PenToolIcon />,
	},
]
