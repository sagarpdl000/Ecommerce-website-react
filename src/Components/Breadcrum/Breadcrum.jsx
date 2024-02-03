import React from 'react'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='my-3 mx-16 text-sm font-poppins'>
        Home <FontAwesomeIcon icon={faArrowRight}/> Shop <FontAwesomeIcon icon={faArrowRight} /> {product.category} <FontAwesomeIcon icon={faArrowRight} /> {product.name}
    </div>
  )
}

export default Breadcrum