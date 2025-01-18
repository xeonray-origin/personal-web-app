import { Building2, GraduationCap } from 'lucide-react'
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
	{
		id: uniqid(),
		name: 'AI Text Contrast',
		description: `AI Text Hue takes in an RGB color value (like 255,87,51) and tells you if 
		the dominant text color should be black or white. Under the hood, it trains a neural network on 
		a dataset of RGB values paired with the ideal text color, and uses that model to make predictions.`,
		tech: ['Javascript', 'brain.js'],
		link: '',
		repo: 'https://github.com/xeonray-origin/ai-text-contrast',
	},
]

export const workTimeline = [
	{
		icon: <Building2 />,
		heading: 'Senior Software Engineer at EPAM Systems',
		from: '',
		to: '',
		descriptionArr: [
			'Working with Digital Experience Engineering as a key developer.',
		],
	},
	{
		icon: <Building2 />,
		heading: 'Senior Software Engineer at Optym',
		from: '',
		to: '',
		descriptionArr: [
			'Spearheaded react application refactoring resulting in reduction of FCP from 6.7sec to 2.8sec.',
			'Developed a reusable components library using react with storybook, facilitating consistency and collaboration across multiple projects.',
			'Designed and developed features for tracking and presenting analytics data.',
			'Collaborated closely with cross-functional teams including UI/UX designers, backend developers, and project managers to ensure seamless integration of frontend and backend components.',
			'Mentored junior developers on React lifecycle methods and effective use of state management.',
			'Conducted code reviews and provided constructive feedback to peers and junior developers.',
		],
	},
	{
		icon: <Building2 />,
		heading: 'Software Engineer at RazrLab',
		from: '',
		to: '',
		descriptionArr: [
			'Developed a B2B platform offering live tracking and analytics, catering to diverse client needs and ensuring seamless user experiences.',
			'Architected and implemented a Platform as a Service (PaaS) product, consolidating services for 15 B2B clients onto a single generator stack, resulting in significant cost savings and streamlined operations.',
			'Worked on tracking systems for the Dubai Police',
			'Integrated broker agents like RabbitMQ.',
			'Designed and developed Express API servers with caching mechanisms and microservices architecture.',
		],
	},
	{
		icon: <Building2 />,
		heading:
			'Full stack Developer and SME (InfoSec) at CBNITS (NatITSolved Pvt ltd),',
		from: '',
		to: '',
		descriptionArr: [
			'Garnered extensive experience in MERN stack development, leveraging its components to build dynamic and scalable applications.',
			'Proficiently handled PKI, cryptography, file systems, and encryption/decryption, ensuring robust security measures in software solutions.',
			'Successfully implemented storage-agnostic information rights management solutions, ensuring data security and compliance across diverse storage platforms.',
			'Implemented multi-tenancy and internationalization, catering to diverse user bases and global scalability requirements.',
			'Engineered cross-platform clients, ensuring seamless user experiences across diverse environments and devices.',
			'Demonstrated proficiency in managing international client relationships, fostering trust and collaboration for business growth.',
		],
	},
]

export const studyTimeline = [
	{
		icon: <GraduationCap />,
		heading: 'University of Southampton, MS in Cybersecurity',
		from: '',
		to: '',
		descriptionArr: [
			'Acquired practical exposure to live penetration testing techniques and tools.',
			'Explored the intricacies of cryptography.',
			'Familiarized with the Security Analysis.',
			'Wrote a dissertation showcasing vulnerabilities in Near Field Communication (NFC).',
		],
	},
	{
		icon: <GraduationCap />,
		heading: 'West Bengal University of Technology, Bachelor of Computer',
		from: '',
		to: '',
		descriptionArr: [
			'Gained a comprehensive understanding of fundamental and advanced concepts in computer science.',
			'Coursework encompassed programming languages like C, C++, Java, PHP, data structures, algorithms, database management systems, software engineering and computer networking.',
			'Actively participated in practical sessions, projects, and seminars to enhance both practical skills and theoretical knowledge of computer applications.',
		],
	},
]
