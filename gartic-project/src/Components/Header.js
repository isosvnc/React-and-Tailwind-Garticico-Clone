import React from 'react'



export default function Header() {
    return (
        <>

            <header className='flex justify-between w-[1018px] h-[92px]  px-4 mt-3 items-end'>
                <div>
                    <h5 className='text-sm text-white font-black'>UYGULAMALARI EDİNİN</h5>
                    <span className='flex text-white gap-x-4 items-center'>
                        <a href="#" className='flex items-center gap-x-2'>
                            <i className="fa-brands fa-google-play text-2xl"></i>
                            <p className='text-sm font-bold hover:underline'>ANDROID</p>
                        </a>
                        <a href="#" className='flex items-center gap-x-2 '>
                            <i className="fa-brands fa-apple text-2xl"></i>
                            <p className='text-sm font-bold hover:underline'>iOS</p>
                        </a>
                    </span>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://gartic.io/static/images/new/gartic.svg" alt="" className='' />
                    <span className='text-lg text-white mt-[2px] font-black'>DRAW, GUESS, WIN</span>
                </div>
                <div>
                    <h5 className='text-sm text-white font-black'>SON GÜNCELLEMELER</h5>
                    <span className='flex text-white gap-x-4 items-center'>
                        <a href="#" className='flex items-center gap-x-2'>
                            <i className="fa-brands fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className='text-sm font-semibold hover:underline'>New game: Gartic Phone</a>
                    </span>
                </div>
            </header>



        </>
    )
}
