import { FC } from 'react'
import './AboutUs.scss'

import RightPhoto from '../../assets/about_us_1.jpg'
import BottomPhoto from '../../assets/about_us_2.jpg'


const AboutUs: FC = () => {
	return (
		<>
			<div className='info'>
				<div className='content'>
					<h2 className='content__title'>О нас</h2>

					<h3 className='content__subtitle'>Косметологическая студия "Наталья"</h3>

					<p className='content__text'>
						- это территория красоты и здоровья, где любой гость,
						ценящий свое время и деньги, ощутит тонкое понимание его потребностей и качественное исполнение пожеланий.
					</p>

					<p className='content__text'>
						Мы предлагаем индивидуальные программы,
						обеспечивающие максимальную пользу и результат за короткий промежуток времени.
					</p>


					<div className='content__image-container'>
						<img src={BottomPhoto} alt='Image' className='img' />
						<img src={BottomPhoto} alt='Image' className='img' />
					</div>
				</div>

				<div className='image__container'>
					<img src={RightPhoto} alt='Image' className='img' />
				</div>
			</div>
		</>
	)
}

export default AboutUs
