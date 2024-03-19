import { FC } from 'react'
import './Home.scss'

import AboutUs from '../../components/AboutUs/AboutUs'
import Services from '../../components/Services/Services'
import Reports from '../../components/Reports/Reports'
import Preview from '../../components/Preview/Preview'

const Home: FC = () => {
	return (
		<>
			<div className='home__content'>
				<Preview />

				<AboutUs />

				<Services />

				<Reports />
			</div>
		</>
	)
}

export default Home

