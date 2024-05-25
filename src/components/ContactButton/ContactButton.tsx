import { FC } from 'react'
import './ContactButton.scss'
import { ContextValue } from '../../types/types';
import { useMyContext } from '../../context/context';

const ContactButton: FC = () => {
  const { setValue, value } = useMyContext<ContextValue>();

  return (
    <button className='button-contact' onClick={() => setValue({ ...value, menuTab: 6, modalOpened: true })}>
      Записаться
    </button>
  )
}

export default ContactButton

