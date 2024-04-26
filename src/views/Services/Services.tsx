import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Services: FC = () => {
	const { category } = useParams()
	const [services, setdServices] = useState({})

	useEffect(() => {
    if (category) {
      import(`../../db/${category}`)
        .then((jsonData) => {
          setdServices(jsonData.default)
        })
        .catch((error) => {
          console.error('Error loading the JSON file:', error)
          setdServices({})
        })
    }
  }, [category])

	return (
		<div>
			{
				
			}
		</div>
	)
}

export default Services