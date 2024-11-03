import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Metabase' }]

export default function HomePage() {
	return <div></div>
}
