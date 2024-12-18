import { Link } from '@remix-run/react'
import { cn } from '#app/utils/misc.js'

export function Logo({ className }: { className?: string }) {
	return (
		<Link to="/">
			<img
				src="/logo.png"
				alt="Metabase"
				className={cn('w-48', className)}
				loading="eager"
			/>
		</Link>
	)
}

export function IconLogo({ className }: { className?: string }) {
	return (
		<img
			src="/icon.svg"
			alt="Metabase"
			className={cn('w-8', className)}
			loading="eager"
		/>
	)
}
