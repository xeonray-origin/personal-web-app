import uniqid from 'uniqid'

export const about = `
Hi, I am a Senior Software Engineer with 5+ years of experience, 
and I am passionate about creating solutions that can make a positive 
impact in the real world. A usual day in my schedule involves developing 
business requirements into live features, taking part in architectural 
discussions for feature development, peer reviewing and sometimes hosting 
sessions on various topics for juniors and interns. I am originally from 
Kolkata and currently residing in Bengaluru. At home, one will mostly find 
me spending time with my dog or working on personal projects. Other than 
that, I love to read on various topics ranging from human evolution to 
science fiction. I believe that art is as much important in a person’s 
life as any other field because it helps build the soul while commerce 
and science build the mind.
`

export const skills = [
	'React',
	'ReactNative',
	'MobX',
	'Redux',
	'Typescript',
	'MUI',
	'ReactQuery',
	'Tailwind',
	'Webpack',
	'NextJS',
	'Gatsby',
	'Storybook',
	'ShadCn',
	'Bryntum',
	'HTML, CSS, JavaScript',
	'Bootstrap',
	'AmCharts',
	'GoogleMap',
	'Mapbox',
	'NodeJS',
	'ExpressJS',
	'NestJS',
	'Encryption',
	'GraphQL',
	'Redis',
	'WebSockets',
	'RabbitMQ',
	'Postgres',
	'MongoDB',
	'DynamoDB',
	'DocumentDB',
	'AuroraDB',
	'EC2',
	'Amplify Hosting',
	'Docker',
	'Jenkins',
	'Azure Pipeline',
	'Github Actions & Workflow',
]

export const projects = [
	{
		id: uniqid(),
		name: 'City Weather Report',
		description: `React application to display weather reports of major cities in India.`,
		tech: ['React', 'MUI', 'OpenWeatherMap', 'Javascript, HTML, CSS'],
		link: 'https://xeonray-origin.github.io/city-weather-report/',
		repo: 'https://github.com/xeonray-origin/city-weather-report',
	},
	{
		id: uniqid(),
		name: 'Typescript Introspection',
		description: `Recently, the Reflect buli-in object has been enabled for javascript 
    to inspect shape and properties of an object. Even then Typescript which is a superset 
    of javascript does not support this feature by default.`,
		tech: ['Typescript', 'reflect-metadata'],
		link: '',
		repo: 'https://github.com/xeonray-origin/typescript-introspection',
	},
]
