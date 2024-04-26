import { FC } from 'react'
import './Footer.scss'

import Location from '../../assets/location.svg'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import SocialNetworks from '../SocialNetworks/SocialNetworks'


const Footer: FC = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer__contacts'>
					<h3 className='footer__title'>Связаться с нами</h3>

					<div className='footer__list'>
						<div className='footer__list-item'>
							<img src={Location} className='list-item__icon' />

							<span>Адрес</span>
						</div>
						<div className='footer__list-item'>
							<img src={Phone} className='list-item__icon' />

							<span>Телефон</span>
						</div>
						<div className='footer__list-item'>
							<img src={Email} className='list-item__icon' />

							<span>Почта</span>
						</div>
					</div>

					<SocialNetworks />
				</div>

				<div className='footer__documentation'>
					<span className='footer__list-item'>Правовые документы</span>
					<span className='footer__list-item'>Политика конфиденциальности</span>
				</div>
			</div>
		</>
	)
}

export default Footer

