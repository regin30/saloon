import { FC, useState } from 'react'
import './MenuMini.scss'
import { Modal } from 'antd'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import SmoothCollapse from 'react-smooth-collapse';
import { useMyContext } from '../../context/context';
import { ContextValue } from '../../types/types';

const MenuMini: FC = () => {
  const [openContacts, setOpenContacts] = useState<boolean>(false)
  const { setValue, value } = useMyContext<ContextValue>();

  return (
    <Modal
      open={value.menuMiniOpened}
      onCancel={() => setValue({...value, menuMiniOpened: false})}
      footer={null}
    >
      <div className='menu-modal'>
        <div className='menu-modal__container'>
          <button><span className='menu-modal__item'>О нас</span></button>
          <button><span className='menu-modal__item'>Услуги</span></button>
          <button><span className='menu-modal__item'>Акции</span></button>
          <button><span className='menu-modal__item'>Отзывы</span></button>
          <button onClick={() => setOpenContacts(prev => !prev)}>
            <span className='menu-modal__item'>Контакты</span>
          </button>

          <div className='menu-modal__contacts'>
            <SmoothCollapse expanded={openContacts}>
              <span className='menu-modal__item'>Телефон</span>
              <span className='menu-modal__item'>Адрес</span>
              <span className='menu-modal__item'>Почта</span>

              <SocialNetworks />
            </SmoothCollapse>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MenuMini

