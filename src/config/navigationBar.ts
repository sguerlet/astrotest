// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'VisuDrone - Inspection par drone',
		text: 'VisuDrone'
	},
	navItems: [
		{ name: 'Accueil', link: '/' },
		{ name: 'Services', link: '/features' },
		{
			name: 'Ressources',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Mentions legales', link: '/terms' }
			]
		},
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Devis gratuit', link: '/contact', style: 'primary', size: 'lg' }]
}
