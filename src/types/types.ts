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
	place: string[] | null,
	price: number[]
}

interface BeautyCategory extends Title {
	title: string,
	services: Service[]
}

interface BeautyServices {
	obj: BeautyCategory[]
}

export type {
	IButtonProps,
	IButtonStyle,
	BeautyServices,
	BeautyCategory
}