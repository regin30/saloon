import { FC } from 'react'
import './Services.scss'
import aesthetic from '../../db/aesthetic_services.json'
import AccordionBlock from '../Accordion/Accordion'

const Services: FC = () => {
  return (
    <>
      <AccordionBlock
        categories={aesthetic}
        type={'multiple'}
      />
    </>
  )
}

export default Services

