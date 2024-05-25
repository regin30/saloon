interface Title {
	title: string
}

interface IMenuTab {
	menuTab: number
}

interface IButtonProps extends Title {
	fill?: boolean,
	onClick?: () => void
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

interface ContextValue {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export type {
	IButtonProps,
	IButtonStyle,
	BeautyServices,
	BeautyCategory,
	ContextValue,
	IMenuTab
}