import { FC } from 'react'
import './ServiceategoriesList.scss'
import { Link } from 'react-router-dom'
import LogoMini from '/assets/logo-mini.png'
import ArrowRight from '/assets/arrow_right.svg'
import { ContextValue } from '../../types/types'
import { useMyContext } from '../../context/context'

const ServiceCategoriesList: FC = () => {
  const { setValue, value } = useMyContext<ContextValue>()

  function closeModal(){
    setValue({ ...value, modalOpened: false, menuTab: null })
  }

  return (
    <div className='categories-list'>
        <Link to={'/service/2'} onClick={closeModal}>
          <div className='categories-list__item'>
            <p className='categories-list__item-text'>Моделирование фигуры</p>

            <img src={ArrowRight}/>
          </div>
        </Link>

        <Link to={'/service/3'} onClick={closeModal}>
          <div className='categories-list__item'>
            <p className='categories-list__item-text'>Уход за лицом и телом</p>

            <img src={ArrowRight}/>
          </div>
        </Link>

        <Link to={'/service/1'} onClick={closeModal}>
          <div className='categories-list__item'>
            <p className='categories-list__item-text'>Эстетика</p>

            <img src={ArrowRight}/>
          </div>
        </Link>

				<img src={LogoMini} className='categories-list__img'/>
    </div >
  )
}

export default ServiceCategoriesList

