import { FC, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import SmoothCollapse from 'react-smooth-collapse'
import './Service.scss'

import modeling from '../../db/modeling.json'
import antiAge from '../../db/skincare.json'
import aestethic from '../../db/aesthetic.json'
import description from '../../db/services_descriptions.json'
import ArrowDown from '/assets/arrow_down.svg'

const Service: FC = () => {
  const { id = null } = useParams()

  const [openedInfo, setOpenedInfo] = useState<number[]>([])

  const currentList = useMemo(() => {
    return getCurrentServices()
  }, [id])

  function getCurrentServices() {
    if (id && +id === 3) {
      return antiAge.obj
    } else if (id && +id === 1) {
      return aestethic.obj
    } else {
      return modeling.obj
    }
  }

  function getDescription(serviceId: number) {
    const serviceData = description.data.find(item => item.service_id === serviceId)
    return serviceData?.description || ''
  }

  function handleArrowButton(id: number) {
    if (openedInfo.includes(id)) {
      const updatedArray = openedInfo.filter(item => item !== id)
      setOpenedInfo(updatedArray)
    } else {
      setOpenedInfo(prev => [...prev, id])
    }
  }

  return (
    <div className='services'>
      <div className='services__container'>
        {
          currentList.map((category, index: number) => {
            return (
              <div key={index} className='services__category'>
                <h2>{category.title}</h2>
                {
                  category.services.map((service, serviceIndex: number) => {
                    return (
                      <div key={serviceIndex} className='services__category-item-container'>
                        <div className='services__category-item'>
                          {id && +id !== 1 &&
                            <button
                              className='services__category-item-button'
                              onClick={() => handleArrowButton(service.id)}>
                              <img
                                src={ArrowDown}
                                className={
                                  openedInfo.includes(service.id) ? 'arrow--up'
                                    : 'arrow--down'
                                }
                              />
                            </button>
                          }

                          <span className='services__category-item-name'>{service.name}</span>
                          <span className='services__category-item-price'>
                            {service.price.length > 1 ? 'от ' + service.price[0] : service.price[0]}
                          </span>
                        </div>

                        <SmoothCollapse expanded={openedInfo.includes(service.id)}>
                          <div className='services__category-item-info'>
                            {service.place &&
                              service.place.map((el, placeIndex) => {
                                return (
                                  <div key={placeIndex} className='services__category-item-place'>
                                    <span className='services__category-item-place-name'>{el}</span>
                                    <span className='services__category-item-place-price'>
                                      {service.price[placeIndex]}
                                    </span>
                                  </div>
                                )
                              })
                            }

                            <p
                              className='services__category-item-description'
                              dangerouslySetInnerHTML={{ __html: getDescription(service.id) }}
                            >
                            </p>
                          </div>
                        </SmoothCollapse>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Service

