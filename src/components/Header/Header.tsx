import { FC } from 'react'
import './Header.scss'
import ContactButton from '../ContactButton/ContactButton'
import MenuButton from '../MenuButton/MenuButton'
import Logo from '../../assets/logo.png'
import Menu from '../../assets/menu.svg'
import MenuMini from '../MenuMini/MenuMini'
import { useMyContext } from '../../context/context'
import { ContextValue } from '../../types/types'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
	const navigate = useNavigate()
	const { setValue, value } = useMyContext<ContextValue>()

	function handleTabButton(number: number) {
		setValue({ ...value, menuTab: number, modalOpened: true })
	}

	return (
		<>
			<div className='header'>
				<div className='header__block-content'>
					<div className='header__logo'>
						<img src={Logo} className='header__logo-img' alt='Flower' />
					</div>

					<div className='header__menu'>
						<MenuButton title='Главная' onClick={() => navigate('/')} />
						<MenuButton title='О центре' onClick={() => handleTabButton(1)} />
						<MenuButton title='Услуги' onClick={() => handleTabButton(2)} />
						<MenuButton title='Акции' onClick={() => handleTabButton(3)} />
						<MenuButton title='Отзывы' onClick={() => handleTabButton(4)} />
						<MenuButton title='Контакты' onClick={() => handleTabButton(5)} />
					</div>

					<div className='header__menu-button'>
						<ContactButton />
					</div>

					<button
						className='menu-mini__button'
						onClick={() => setValue({ ...value, menuMiniOpened: true })}
					>
						<img src={Menu} className='menu-mini__icon' />
					</button>
				</div>

				<MenuMini />
			</div>
		</>
	)
}

export default Header

