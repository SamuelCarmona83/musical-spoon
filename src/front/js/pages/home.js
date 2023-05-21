import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CallToAction } from './home-components/callToAction'
import { Pricing } from './home-components/pricing'

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
]

const stats = [
	{ id: 1, name: 'Transactions every 24 hours', value: '44 million' },
	{ id: 2, name: 'Assets under holding', value: '$119 trillion' },
	{ id: 3, name: 'New users annually', value: '46,000' },
]

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<div className="bg-white">
				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-32">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								Announcing our next round of funding.{' '}
								<a href="#" className="font-semibold text-accent">
									<span className="absolute inset-0" aria-hidden="true" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Data to enrich your online business
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
								fugiat veniam occaecat fugiat aliqua.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
								>
									Get started
								</a>
								<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
				</div>
			</div>
			<CallToAction />
			<Pricing />
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						{stats.map((stat) => (
							<div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
				<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<figure className="mt-10">
						<blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
							<p>
								“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
								molestiae. Numquam corrupti in laborum sed rerum et corporis.”
							</p>
						</blockquote>
						<figcaption className="mt-10">
							<img
								className="mx-auto h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div className="mt-4 flex items-center justify-center space-x-3 text-base">
								<div className="font-semibold text-gray-900">Judith Black</div>
								<svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
									<circle cx={1} cy={1} r={1} />
								</svg>
								<div className="text-gray-600">CEO of Workcation</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</section>
		</>
	)
}
