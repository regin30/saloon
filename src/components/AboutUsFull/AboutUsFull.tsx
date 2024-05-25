import { FC } from 'react'
import './AboutUsFull.scss'

const AboutUsFull: FC = () => {
	return (
		<>
			<div className='info'>
				<div className='content'>
					<h2 className='content__title'>О нас</h2>

					<h3 className='content__subtitle'>Косметологическая студия</h3>

					<p className='content__text'>
						- это территория красоты и здоровья, где любой гость,
						ценящий свое время и деньги, ощутит тонкое понимание его потребностей и качественное исполнение пожеланий.
					</p>

					<p className='content__text'>
						Мы предлагаем индивидуальные программы,
						обеспечивающие максимальную пользу и результат за короткий промежуток времени.
					</p>
				</div>
			</div>
		</>
	)
}

export default AboutUsFull
