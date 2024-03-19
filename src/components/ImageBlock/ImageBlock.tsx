import { FC } from 'react'
import './ImageBlock.scss'
import Image from '../../assets/face.png'


const ImageBlock: FC = () => {
  return (
    <img src={Image} alt='Image' className='image-block'/>
  )
}

export default ImageBlock

