import { FC } from 'react'
import './Advantages.scss'

const Advantages: FC = () => {
	return (
		<div className='advantages__wrapper'>
			<h1 className='advantages__title'>Наши преимущества</h1>
			<h1 className='advantages__title--mini'>Услуги</h1>

			<div className='advantages__content'>
				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>С 2000</h4>
					<p className='advantages__text'>
						работаем
						с медицинской лицензией
					</p>
				</div>

				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>Высокая</h4>
					<p className='advantages__text'>
						квалификация врачей
					</p>
				</div>

				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>Сертифицированное</h4>
					<p className='advantages__text'>
						оборудование и препараты
					</p>
				</div>

				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>Индивидуальный подход</h4>
					<p className='advantages__text'>
						и авторские процедуры
					</p>
				</div>

				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>Доступная</h4>
					<p className='advantages__text'>
						высококвалифицированная косметология
					</p>
				</div>

				<div className='advantages__block'>
					<h4 className='advantages__subtitle'>Более 10000</h4>
					<p className='advantages__text'>
						довольных клиентов
					</p>
				</div>

			</div>
		</div>
	)
}

export default Advantages