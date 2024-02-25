import { CloudDrizzle, Type } from 'lucide-react'
import uniqid from 'uniqid'

export const sampleData = [
	{
		id: uniqid(),
		icon: <CloudDrizzle />,
		imgUrl: '/city-weather.png',
		title: 'City Weather Report',
		shortDescription: `React application to display weather reports of major cities in India.`,
		tech: ['React', 'MUI', 'OpenWeatherMap', 'Javascript, HTML, CSS'],
		link: 'https://xeonray-origin.github.io/city-weather-report/',
		git: 'https://github.com/xeonray-origin/city-weather-report',
	},
	{
		id: uniqid(),
		icon: <Type />,
		title: 'Typescript Introspection',
		imgUrl: '/introspection.png',
		shortDescription: `Recently, the Reflect buli-in object has been enabled for javascript 
    to inspect shape and properties of an object. Even then Typescript which is a superset 
    of javascript does not support this feature by default.`,
		tech: ['Typescript', 'reflect-metadata'],
		link: '',
		git: 'https://github.com/xeonray-origin/typescript-introspection',
	},
]
