import { FC } from 'react'
import './MenuButton.scss'
import { IButtonProps } from '../../types/types'

const MenuButton: FC<IButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <button className='menu-button' onClick={onClick}>{title}</button>
    </>
  )
}

export default MenuButton

