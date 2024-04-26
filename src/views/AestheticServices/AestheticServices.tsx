import { FC } from 'react'
import { BeautyCategory } from '../../types/types'
import SmoothCollapse from 'react-smooth-collapse'
import services from '../../db/aesthetic.json'

const AestheticServices: FC = () => {
	console.log(services)

	return (
		<div className='aesthetic-services'>
			{
				services.obj.map((item: BeautyCategory, index: number) => (
					<section key={index}  className='aesthetic-service__section'>
						<div className='aesthetic-service__header'>
							<h2 className='aesthetic-service__title'>{item.title}</h2>
							<span className='aesthetic-service__arrow'>+</span>
						</div>

						<SmoothCollapse expanded>
							{item.services.map((serv) => (
								<div className='aesthetic-service__list'>
										<div className='aesthetic-service__item'>
											<span className='aesthetic-service__name'>{serv.name}</span>
											<span className='aesthetic-service__price'>{serv.price}</span>
										</div>
								</div>
							))}
						</SmoothCollapse>
					</section>
				))
			}
		</div>
	)
}

export default AestheticServices