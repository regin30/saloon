import { FC } from 'react'
import './MenuButton.scss'
import { IButtonProps } from '../../types/types'

const MenuButton: FC<IButtonProps> = ({ title }) => {
  return (
    <>
      <button className='menu-button'>{title}</button>
    </>
  )
}

export default MenuButton

