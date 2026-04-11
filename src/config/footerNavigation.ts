// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'VisuDrone',
		aboutText:
			'VisuDrone est un operateur de drones professionnels specialise dans l\'inspection technique de batiments et d\'ouvrages d\'art. Telepilote certifie DGAC, nous intervenons partout en France.',
		logo: {
			src: '/logo.svg',
			alt: 'VisuDrone - Inspection par drone',
			text: 'VisuDrone'
		}
	},
	footerColumns: [
		{
			category: 'Nos services',
			subCategories: [
				{
					subCategory: 'Inspection de batiments',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Thermographie infrarouge',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Topographie & metre',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Modelisation 3D',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Panneaux solaires',
					subCategoryLink: '/features'
				}
			]
		},
		{
			category: 'Informations',
			subCategories: [
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Mentions legales',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Contact',
			subCategories: [
				{
					subCategory: 'Demander un devis',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Nous contacter',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '\u00a9 VisuDrone 2026.'
	}
}
