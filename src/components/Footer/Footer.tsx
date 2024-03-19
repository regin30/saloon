import { FC } from 'react'
import './Footer.scss'

import Location from '../../assets/location.svg'
import Phone from '../../assets/phone.svg'
import Email from '../../assets/email.svg'
import Inst from '../../assets/instagram.svg'
import WA from '../../assets/whatsapp.svg'
import VK from '../../assets/vkontakte.svg'


const Footer: FC = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer__contacts'>
					<h3 className='footer__title'>Связаться с нами</h3>

					<ul className='footer__list'>
						<li className='footer__list-item'>
							<img src={Location} className='list-item__icon'/>
							Адрес
						</li>
						<li className='footer__list-item'>
							<img src={Phone} className='list-item__icon'/>
							Телефон
						</li>
						<li className='footer__list-item'>
							<img src={Email} className='list-item__icon'/>
							Почта
						</li>
						<li className='footer__list-item'>
							<img src={Inst} className='list-item__icon-network'/>
							<img src={WA} className='list-item__icon-network'/>
							<img src={VK} className='list-item__icon-network'/>
						</li>
					</ul>
				</div>

				<div className='footer__documentation'>
					<h3 className='footer__title'>Правовая база</h3>

					<ul className='footer__list'>
						<li className='footer__list-item'>Правовые документы</li>
						<li className='footer__list-item'>Политика конфиденциальности</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Footer

