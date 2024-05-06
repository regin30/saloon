import { FC } from 'react'
import './MenuMini.scss'
import { Modal } from 'antd'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

interface IMenuMiniProps {
  closeModal: (arg: boolean) => void;
  opened: boolean
}

const MenuMini: FC<IMenuMiniProps> = ({ closeModal, opened }) => {
  return (
    <Modal
      open={opened}
      onCancel={() => closeModal(false)}
    >
      <div className='menu-modal'>
        <span className='menu-modal__item'>О нас</span>
        <span className='menu-modal__item'>Услуги</span>
        <span className='menu-modal__item'>Акции</span>
        <span className='menu-modal__item'>Отзывы</span>

        <div className='menu-modal__contacts'>
          <h2 className='menu-modal__subtitle'>Контакты</h2>

          <span className='menu-modal__item'>Телефон</span>
          <span className='menu-modal__item'>Адрес</span>
          <span className='menu-modal__item'>Почта</span>

          <SocialNetworks />
        </div>
      </div>
    </Modal>
  )
}

export default MenuMini

