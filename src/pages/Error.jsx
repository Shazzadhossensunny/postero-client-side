
import { Link } from 'react-router-dom'
import errorImg from '../assets/error.jpg'
export default function Error() {

  return (
    <div className="container mx-auto my-9">
      <div>
        <img className='h-full md:h-[400] lg:h-[700px] mx-auto' src={errorImg} alt="" />
      </div>
      <Link to='/' className='flex justify-center'>
       <button className='btn btn-warning'>Go to Home</button>
      </Link>

    </div>
  )
}
