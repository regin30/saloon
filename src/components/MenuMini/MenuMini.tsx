import { FC, useState } from 'react'
import './MenuMini.scss'
import { Modal } from 'antd'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import SmoothCollapse from 'react-smooth-collapse';
import { useMyContext } from '../../context/context';
import { ContextValue } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const MenuMini: FC = () => {
  const navigate = useNavigate()
  const [openContacts, setOpenContacts] = useState<boolean>(false)
  const { setValue, value } = useMyContext<ContextValue>();

  function goTo(path: string) {
    navigate(path)

    setValue({ ...value, menuMiniOpened: false })
  }

  function openTab(tab: number) {
    setValue({
      ...value,
      menuTab: tab,
      menuMiniOpened: false,
      modalOpened: true
    })
  }

  return (
    <Modal
      open={value.menuMiniOpened}
      onCancel={() => setValue({ ...value, menuMiniOpened: false })}
      footer={null}
    >
      <div className='menu-modal'>
        <div className='menu-modal__container'>
          <button
            className='menu-modal__item'
            onClick={() => goTo('/')}>
            Главная
          </button>

          <button
            className='menu-modal__item'
            onClick={() => openTab(1)}>
            О нас
          </button>

          <button
            className='menu-modal__item'
            onClick={() => openTab(2)}>
            Услуги
          </button>

          <button
            className='menu-modal__item'
            onClick={() => openTab(3)}>
            Акции
          </button>

          <button
            className='menu-modal__item'
            onClick={() => openTab(4)}>
            Отзывы
          </button>

          <button
            onClick={() => setOpenContacts(prev => !prev)}
            className='menu-modal__item'
          >
            Контакты
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

