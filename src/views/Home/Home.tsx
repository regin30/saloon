import { FC } from 'react'
import './Home.scss'

import AboutUs from '../../components/AboutUs/AboutUs'
import Services from '../../components/MenuServices/MenuServices'
import Advantages from '../../components/Advantages/Advantages'
import Reports from '../../components/Reports/Reports'
import Preview from '../../components/Preview/Preview'

const Home: FC = () => {
	return (
		<>
			<div className='home__content'>
				<Preview />

				<AboutUs />

				<Advantages />

				<Services />

				<Reports />
			</div>
		</>
	)
}

export default Home

