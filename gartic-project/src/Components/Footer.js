import React from 'react'

export default function Footer() {
  return (
    <>
    <footer>
        <div className='w-[1058px] h-[26px] flex justify-between items-center mt-1'>
            <div className='flex items-center'>
                <img src="https://gartic.io/static/images/new/gartic_footer.svg" alt="" className='w-[95px] h-[26px]'/>
            </div>
            <nav className='flex items-center'>
                <ul className='flex items-center'>
                    <li className='flex'><a href="#" className='flex text-[12px] font-bold items-center text-white'>DOSYALAR</a></li>
                    <li><a href="#" className='flex text-[12px] font-bold items-center text-white before:w-[2px] before:h-[10px] before:bg-white before:mx-[7px]'>KULLANIM KOSULLARI</a></li>
                    <li><a href="#" className=' flex text-[12px] font-bold items-center text-white before:w-[2px] before:h-[10px] before:bg-white before:mx-[7px]'>GIZLILIK</a></li>
                    <li><a href="#" className=' flex text-[12px] font-bold items-center text-white before:w-[2px] before:h-[10px] before:bg-white before:mx-[7px]'>TESEKKURLER</a></li>
                    <li><a href="#" className=' flex text-[12px] font-bold items-center text-white before:w-[2px] before:h-[10px] before:bg-white before:mx-[7px]'>ILETISIM</a></li>
                </ul>
            </nav>
            <div className='flex items-center '>
                <ul className='flex w-[180px] justify-between'>
                    <li><a href="#" ><i class="fa-brands fa-twitter text-[24px]  text-white  hover:text-[#d3e3f4]"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube text-[24px] text-white hover:text-[#d3e3f4] "></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram text-[24px] text-white hover:text-[#d3e3f4] "></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-discord text-[24px] text-white hover:text-[#d3e3f4] "></i></a></li>
                </ul>

            </div>

        </div>
    </footer>


    
    </>
  )
}
