import { FC } from 'react'
import './Header.scss'
import ContactButton from '../ContactButton/ContactButton'
import MenuButton from '../MenuButton/MenuButton'
import Logo from '../../assets/flower.svg'
import Menu from '../../assets/menu.svg'
import MenuMini from '../MenuMini/MenuMini'


const Header: FC = () => {
	return (
		<>
			<div className='header'>
				<div className='header__block-content'>
					<div className='header__logo'>
						<img src={Logo} className='header__logo-img' alt='Flower' />
					</div>

					<div className='header__menu'>
						<MenuButton title='О центре' />
						<MenuButton title='Услуги' />
						<MenuButton title='Акции' />
						<MenuButton title='Отзывы' />
						<MenuButton title='Контакты' />
					</div>

					<div className='header__menu-button'>
						<ContactButton />
					</div>

					<button className='menu-mini__button'>
						<img src={Menu} className='menu-mini__icon' />
					</button>
				</div>

				<MenuMini />
			</div>
		</>
	)
}

export default Header

