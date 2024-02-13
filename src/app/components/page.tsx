import { Card, CardContent, CardTitle } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { H1, H2, H3, H4, P } from '@/components/ui/typography'

const Components = () => {
	return (
		<div className='container mx-auto my-5'>
			<div className='grid grid-cols-2 grid-rows-3 gap-4'>
				<Card>
					<CardTitle>Buttons</CardTitle>
					<CardContent>
						<Button className='m-1' variant={'default'} size={'sm'}>
							Button
						</Button>
						<Button className='m-1' variant={'destructive'} size={'sm'}>
							Destructive
						</Button>
						<Button className='m-1' variant={'outline'} size={'sm'}>
							Outline
						</Button>
						<Button className='m-1' variant={'ghost'} size={'sm'}>
							Ghost
						</Button>
						<Button className='m-1' variant={'link'} size={'sm'}>
							Link
						</Button>
						<Button className='m-1' variant={'secondary'} size={'sm'}>
							Secondary
						</Button>
					</CardContent>
				</Card>
				<Card>
					<CardTitle>Typography</CardTitle>
					<CardContent>
						<H1 variant={'default'}>Heading 1</H1>
						<H2 variant={'default'}>Heading 2</H2>
						<H3 variant={'default'}>Heading 3</H3>
						<H4 variant={'default'}>Heading 4</H4>
						<P variant={'default'}>Paragraph</P>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Components
