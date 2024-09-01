import { Button } from '#app/components/ui/button.js'
import { Icon } from '#app/components/ui/icon.js'
import { type MetaFunction } from '@remix-run/node'
export const meta: MetaFunction = () => [{ title: 'Petal' }]

export default function Index() {
	return (
		<main>
			<Hero />
			<LogoCloud />
		</main>
	)
}

function Hero() {
	return (
		<main className="bg-secondary">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
				<div className="text-center">
					<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline">Linking Worlds</span>{' '}
						<span className="block text-indigo-600 xl:inline">
							Through Stories
						</span>
					</h1>
					<p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
						Discover the connections between films, songs, games, books, and the
						people who bring them to life.
					</p>
					<div className="mx-auto mt-5 flex max-w-md items-center gap-3 sm:flex sm:justify-center md:mt-8">
						<Button
							variant="outline"
							className="flex w-48 items-center justify-center gap-4"
						>
							<Icon name="play" />
							Watch walkthrough
						</Button>

						<Button variant="default" className="w-48">
							Start for free
						</Button>
					</div>
				</div>
			</div>
		</main>
	)
}

function LogoCloud() {
	return (
		<div className="bg-secondary">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
					<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							className="h-12"
							src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
							alt="Tuple"
						/>
					</div>
					<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							className="h-12"
							src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
							alt="Mirage"
						/>
					</div>
					<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
						<img
							className="h-12"
							src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
							alt="StaticKit"
						/>
					</div>
					<div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
						<img
							className="h-12"
							src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
							alt="Transistor"
						/>
					</div>
					<div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
						<img
							className="h-12"
							src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
							alt="Workcation"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}