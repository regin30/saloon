import { FC } from 'react'
import './Preview.scss'
import ImageBlock from '../ImageBlock/ImageBlock'
import Button from '../Button/Button'

const Preview: FC = () => {
	return (
		<div className='preview'>
			<div className='preview__content'>
				<h1 className='preview__title'>Студия косметологии</h1>

				<p className='preview__text'>
					Индивидуальные программы обеспечивают максимальную пользу и результа
				</p>

				<Button
					title='Записаться на процедуру'
					fill
				/>

				<Button
					title='Выбрать услугу'
					fill={false}
				/>
			</div>

			<div className='preview__img'>
				<ImageBlock />
			</div>
		</div>
	)
}

export default Preview