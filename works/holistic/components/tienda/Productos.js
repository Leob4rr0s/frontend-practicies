import React, {useState} from 'react'
import { productos } from './data'
import { Producto } from './Producto'
import { useRouter } from 'next/router'
import Slider from 'react-slick'


export const Productos = ({products}) => {

  const router = useRouter()


  const [cant, setCant] = useState({
    val: false,
    cant: 4
  })

  const handleClick = (slug) => {
    router.push(`/tienda/product/${slug}`)
   
  }

  const handleMas = () => {
    !cant.val ? setCant({val:true, cant:8}) : setCant({val:false, cant:4})
  }


  const settings = {
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };
  
  return (
    <>
    {/* <div className='flex justify-center flex-col items-center'>
    <div className='flex flex-wrap gap-5 justify-center'> */}
    {/* slice(0,cant.cant). */}
      <Slider {...settings}>
        {products.map(producto => <div key={producto.id} onClick={() => handleClick(producto.slug)} ><Producto data={producto} /></div>)}

      </Slider>
    {/* </div>
      <p onClick={handleMas} className='mt-8 cursor-pointer dark:hover:text-lightTextSecondary transition ease duration-300 text-lg'>{cant.val ? 'Ver menos' : 'Ver más... '}</p>
    </div> */}
    </>
  )
}


