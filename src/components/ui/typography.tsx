import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const h1Variants = cva('', {
	variants: {
		variant: {
			default: 'font-brand text-4xl font-light',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const h2Variants = cva('', {
	variants: {
		variant: {
			default: 'text-3xl font-bold',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const h3Variants = cva('', {
	variants: {
		variant: {
			default: 'text-xl font-medium',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const h4Variants = cva('', {
	variants: {
		variant: {
			default: 'text-lg font-bold',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const h5Variants = cva('', {
	variants: {
		variant: {
			default: 'text-sm font-bold',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const h6Variants = cva('', {
	variants: {
		variant: {
			default: 'text-sm font-medium uppercase opacity-80',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const pVariants = cva('', {
	variants: {
		variant: {
			default: 'text-base',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof h1Variants>,
		VariantProps<typeof h2Variants>,
		VariantProps<typeof h3Variants>,
		VariantProps<typeof h4Variants>,
		VariantProps<typeof h5Variants>,
		VariantProps<typeof h6Variants> {}

export const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h1
			ref={ref}
			className={cn(h1Variants({ variant, className }))}
			{...props}
		/>
	),
)
H1.displayName = 'Heading1'

export const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h2
			ref={ref}
			className={cn(h2Variants({ variant, className }))}
			{...props}
		/>
	),
)
H2.displayName = 'Heading2'

export const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn(h3Variants({ variant, className }))}
			{...props}
		/>
	),
)
H3.displayName = 'Heading3'

export const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h4
			ref={ref}
			className={cn(h4Variants({ variant, className }))}
			{...props}
		/>
	),
)
H4.displayName = 'Heading4'

export const H5 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h5
			ref={ref}
			className={cn(h5Variants({ variant, className }))}
			{...props}
		/>
	),
)
H5.displayName = 'Heading5'

export const H6 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<h6
			ref={ref}
			className={cn(h6Variants({ variant, className }))}
			{...props}
		/>
	),
)
H6.displayName = 'Heading6'

export const P = React.forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, variant, ...props }, ref) => (
		<p ref={ref} className={cn(pVariants({ variant, className }))} {...props} />
	),
)

P.displayName = 'Paragraph'
