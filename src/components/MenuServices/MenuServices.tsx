import { FC } from 'react'
import './MenuServices.scss'
import Modeling from '../../assets/modeling.jpg'
import AntiAge from '../../assets/antiage.jpg'
import SkinCare from '../../assets/skin_care.jpg'
import { Link } from 'react-router-dom'

const Services: FC = () => {

  return (
    <div className='services'>
      <div className='services__menu'>
        <Link to={'/'}>
          <div className='services__block-photo'>
            <img src={Modeling} className='services__photo' />
            <p className='services__subtitle'>Моделирование фигуры</p>
          </div>
        </Link>

        <Link to={'/'}>
          <div className='services__block-photo'>
            <img src={SkinCare} className='services__photo' />
            <p className='services__subtitle'>Уход за лицом и телом</p>
          </div>
        </Link>

        <Link to={'/'}>
          <div className='services__block-photo'>
            <img src={AntiAge} className='services__photo' />
            <p className='services__subtitle'>Эстетика</p>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Services

