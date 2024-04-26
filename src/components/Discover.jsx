import bgImg from '../assets/bg.webp'
export default function Discover() {
  return (
    <div className="container mx-auto my-9 lg:my-24 relative">
     <img src={bgImg} alt="" className='w-full'/>
     <div className='absolute top-1/2 -translate-y-1/2 w-[400px] left-36'>
        <h3 className='text-5xl font-bold text-white leading-[60px]'>Discover Original Works of Artists</h3>
        <button className='py-3 px-8 rounded-full bg-white text-[#ca9234] font-semibold uppercase hover:bg-[#ca9234] hover:text-black transition-all duration-100 mt-6'>Discover now</button>
     </div>
    </div>
  )
}
