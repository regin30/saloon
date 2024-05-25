import { FC } from 'react'
import './InfoModal.scss'
import { Modal } from 'antd'
import { ContextValue } from '../../types/types'
import { useMyContext } from '../../context/context'
import AboutUsFull from '../AboutUsFull/AboutUsFull'
import ServiceCategoriesList from '../SeviceCategoriesList/SeviceCategoriesList'
import Button from '../Button/Button'

const InfoModal: FC = () => {
  const { setValue, value } = useMyContext<ContextValue>()

  return (
    <Modal
      open={value.modalOpened}
      onCancel={() => setValue({ ...value, modalOpened: false, menuTab: null })}
      footer={null}
      width={value.menuTab === 1 ? 700 : 400}
    >
      <div className='modal'>
        {
          value.menuTab === 1 && <AboutUsFull />
        }

        {
          value.menuTab === 2 && <ServiceCategoriesList />
        }

        {
          value.menuTab === 6 &&
          <div className='modal-contact-button'>
            <Button
              title='Позвонить'
            />

            <Button
              title='WhatsApp'
              fill
            />
          </div>
        }
      </div>
    </Modal>
  )
}

export default InfoModal

