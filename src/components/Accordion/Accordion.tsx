import { FC } from 'react'
import './Accordion.scss'
import * as Accordion from '@radix-ui/react-accordion'
import { IAccordionProps } from '../../types/types'

const AccordionBlock: FC<IAccordionProps> = ({ categories, type }) => {
  console.log(categories)
  return (
    <Accordion.Root type={type} className='accordion'>
      {
        categories.obj.map((item, parentIndex: number) =>
          <Accordion.Item
            key={parentIndex}
            value={`item-${parentIndex}`}
            className='accordion__item'
          >
            <Accordion.Trigger className='accordion__trigger'>{item.title}</Accordion.Trigger>

            {
              item.services.map((service, childIndex: number) =>
                <Accordion.Content
                  key={childIndex}
                  className='accordion__content'
                >
                  {service.name}
                </ Accordion.Content>
              )
            }
          </Accordion.Item>
        )
      }
    </Accordion.Root>
  )
}

export default AccordionBlock
