
import Product from './Product'
import {products} from '../assets/data';

function Products() {
  return (
    <div className=' lg:p-7 md:p-5 p-1 '>
        {
          products.map((obj)=>(
            <Product obj={obj} />
          ))
        }
    </div>
  )
}

export default Products