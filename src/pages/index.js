import Head from 'next/head'

import Cont from '../components/Container'

export default function Home() {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon-32x32.png" />
				<title>Frontend Mentor | Product preview card component</title>
			</Head>

			<Cont />

			<footer className="attribution">
				Challenge by{' '}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">Hudson Felipe</a>.
			</footer>
		</>
	)
}
