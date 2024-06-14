import BannerCard from "../home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className= "flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">

            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell our Books 
                    <span className='text-blue-700'> for the Best Prices.</span>
                </h2>
                <p className='md:w-4/5'>lorem View the documentation for further usage examples and how to use icons from other packages. NOTE: each Icon package has is own subfolder under react-icons you import from.

                For example, to use an icon from Material Design, your import would</p>
                <div>
                    <input type='search' name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                    Search</button>
                </div>
            </div>


            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner
