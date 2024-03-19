import { FC } from 'react'
import './Header.scss'
import MenuBurger from '../MenuBurger/MenuBurger'
import ContactButton from '../ContactButton/ContactButton'
import MenuButton from '../MenuButton/MenuButton'
import Logo from '../../assets/flower.svg'


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

					<div className='header__menu-burger'>
						<MenuBurger />
					</div>

					<div className='header__menu-button'>
						<ContactButton />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header

