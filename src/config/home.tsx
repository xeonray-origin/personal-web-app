import { Building2, GraduationCap } from 'lucide-react'
import uniqid from 'uniqid'

export const about = `
Hi, I'm Amritendu Bhattacharjee, a Senior Software Engineer who
builds secure, scalable applications. On a typical day I turn business requirements into live features, join
architecture discussions, review code, and run sessions for junior engineers and
interns. I care about software that holds up in the real world, so I try to get
the security and failure modes right before the code ships. Away from work you'll usually find me with my dog,
building personal projects, or reading anything from human evolution to science
fiction. I think art matters as much as any other field: commerce and science
build the mind, but art helps build the soul.
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
			'Key contributor in uplifting a legacy application to a modern framework for the client, which increased development efficiency and application performance by ~20%',
			'Built a client onboarding and prospect conversion workflow that generated more than $2M ARR.',
			'Implemented enterprise-grade cryptography (AES, RSA, OAuth2.0,  SHA256) to protect PII and preserve integrity.',
			'Key contributor in multiple initiatives with on-time delivery and zero downtime.',
			'Created AI artefacts to be shared among teammates to maintain coherence and create automation workflows.',
			'Fine-tuned models by creating an evaluation pipeline for prompts.',
			'Guided juniors on maintaining coding standards and enforcing architectural best practices in the era of AI.'
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
