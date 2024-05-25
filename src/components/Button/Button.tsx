import { FC } from 'react'
import './Button.scss'
import { IButtonProps, IButtonStyle } from '../../types/types'

const Button: FC<IButtonProps> = ({ title, fill }) => {
	function getStyle(): IButtonStyle {
		if (fill) {
			return {
				backgroundColor: 'var(--palette-middle)',
				color: 'var(--palette-white)',
				border: '2px solid var(--palette-middle)'
			}
		} else {
			return {
				backgroundColor: 'var(--palette-white)',
				color: 'var(--palette-middle)'
			}
		}
	}

	return (
		<button
			className='button'
			style={getStyle()}
		>
			{title}
		</button>
	)
}

export default Button
