import { FC } from 'react'
import './SocialNetworks.tsx.scss'

import Inst from '../../assets/instagram.svg'
import WA from '../../assets/whatsapp.svg'
import VK from '../../assets/vkontakte.svg'


const SocialNetworks: FC = () => {
	return (
		<div className='networks'>
			<img src={Inst} className='networks__icon' />
			<img src={WA} className='networks__icon' />
			<img src={VK} className='networks__icon' />
		</div>
	)
}

export default SocialNetworks

