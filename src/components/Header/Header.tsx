import { FC, useState } from 'react'
import './Header.scss'
import ContactButton from '../ContactButton/ContactButton'
import MenuButton from '../MenuButton/MenuButton'
import Logo from '../../assets/flower.svg'
import Menu from '../../assets/menu.svg'
import MenuMini from '../MenuMini/MenuMini'

const Header: FC = () => {
	const [openMenuMini, setOpenMenuMiny] = useState<boolean>(false)
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

					<button
						className='menu-mini__button'
						onClick={() => setOpenMenuMiny(true)}
					>
						<img src={Menu} className='menu-mini__icon' />
					</button>
				</div>

				<MenuMini closeModal={setOpenMenuMiny} opened={openMenuMini}/>
			</div>
		</>
	)
}

export default Header

