interface Title {
	title: string
}

interface IButtonProps extends Title {
	fill?: boolean
}

interface IButtonStyle {
	backgroundColor: string,
	color: string,
	border?: string
}

interface Service {
	id: number,
	name: string,
	price: number
}

interface BeautyCategory extends Title {
	services: Service[]
}

interface BeautyServices {
	obj: BeautyCategory[]
}

interface IAccordionProps {
	categories: BeautyServices,
	type: 'single' | 'multiple'
}

export type {
	IButtonProps,
	IButtonStyle,
	IAccordionProps
}