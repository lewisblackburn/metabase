import { Outlet } from '@remix-run/react'
import Footer from '#app/components/footer.js'
import NavigationBar from '#app/components/navigation-bar.js'

export default function HomePageLayout() {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			<NavigationBar />

			<div className="flex-1">
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}
