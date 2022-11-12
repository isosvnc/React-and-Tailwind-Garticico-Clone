import React from 'react'

export default function Screen() {
    return (
        <>
            <div className='w-full h-[635px] bg-white rounded-xl my-3'>
                <div className='w-full h-full pt-5 px-5'>
                    <div className='flex justify-center w-full h-[85px] items-center'>
                        <span className='bg-titleBG w-[370px] h-[80px] mx-5 bg-center bg-no-repeat flex items-center'>
                            <h2 className=' title flex items-center w-full h-full justify-center mb-4 text-2xl font-black text-titleColor '>OYNA</h2>
                        </span>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-1 flex-col items-center justify-center mb-[55px] mt-5'>
                            <form className='flex flex-col items-center justify-center'>
                                <h3 className='text-[17px] text-formColor font-black mb-7'>HIZLI OYUN</h3>
                                <img src="https://gartic.io/static/images/avatar/svg/0.svg" alt="" className='w-[140px] h-[176px]' />
                                <div className='flex flex-col my-8 gap-y-3'>
                                    <div className='flex gap-x-4'>
                                        <span className='flex gap-x-3 text-formColor items-center'>
                                            <i className="fa-regular fa-user text-2xl"></i>
                                            <p className='text-sm text-[#797979] font-bold'>KULLANICI ADIN:</p>
                                        </span>
                                        <input type="text" placeholder='User 712' className='bg-blue-50 w-[154px] h-[41px] rounded-md border-2 px-3 border-[#868d96] outline-none text-lg' />
                                    </div>
                                    <div className='flex gap-x-[102px]'>
                                        <span className='flex gap-x-3 text-formColor items-center'>
                                            <i class="fa-regular fa-comment text-2xl"></i>
                                            <p className='text-sm text-[#797979] font-bold'>DIL:</p>
                                        </span>
                                        <input type="text" placeholder='User 712' className='bg-blue-50 w-[154px] h-[41px] rounded-md border-2 px-3 border-[#868d96] outline-none text-lg' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex gap-x-5'>
                                <button className='flex items-center h-[50px] w-[194px] bg-[#13bafe] rounded-3xl border-4 border-[#002043] hover:bg-[#3fc8ff]'><img src="https://gartic.io/static/images/new/ic_Rooms.svg" alt="" className='mx-3' /><strong className='block w-full mr-4 items-end text-[19px] font-black text-[#001b4]'>ODALAR</strong></button>
                                <button className='flex items-center h-[50px] w-[194px] bg-[#ffbf00] rounded-3xl border-4 border-[#002043] hover:bg-[#ffcb00]'><img src="https://gartic.io/static/images/new/ic_Play.svg" alt="" className='mx-3' /><strong className='block w-full mr-4 items-end text-[19px] font-black text-[#001b4]'>OYNA!</strong></button>
                            </div>

                        </div>
                        <div className='h-[530px] w-[54px] flex items-center justify-center'>
                            <span className=' relative flex w-[54px] h-[54px] rounded-full border items-center justify-center text-lg font-black text-[#868d96] before:w-[2px] before:h-[120px] before:bg-[#c4c5c6] before:absolute before:-bottom-32 after:w-[2px] after:h-[120px] after:bg-[#c4c5c6] after:absolute after:-top-32'>VEYA</span>
                        </div>
                        <div className='flex w-full h-[530px] flex-1 '>
                            <div className='flex flex-col mt-8 justify-between mb-[55px]'>
                                <h3 className='text-[17px] text-formColor font-black mb-7 text-center '>BURDAN GIRIS YAP</h3>
                                <div className='flex items-center justify-between gap-x-5'>
                                    <div className='flex flex-1 flex-col items-center gap-y-1'>
                                        <img src="https://gartic.io/static/images/new/advantagesLogin1.svg" alt="" className='w-[75px] h-[75px] ' />
                                        <p className='text-center text-[13px] text-[#797979] font-bold tracking-[.42px]'>YENI TEMALAR OLUSTUR</p>
                                    </div>
                                    <div className='flex flex-1 flex-col items-center  gap-y-1'>
                                        <img src="https://gartic.io/static/images/new/advantagesLogin2.svg" alt="" className='w-[75px] h-[75px]' />
                                        <p className='text-center text-[13px] text-[#797979] font-bold tracking-[.42px] mt-2'>FAVORI ODALARIN</p>
                                    </div>
                                    <div className='flex flex-1 flex-col items-center  gap-y-1'>
                                        <img src="https://gartic.io/static/images/new/advantagesLogin3.svg" alt=""  className='w-[75px] h-[75px]'/>
                                        <p className='text-center text-[13px] text-[#797979] font-bold tracking-[.42px]'>OYUNCULARLA SOHBET ET</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-y-2'>
                                    <p className='flex text-[13px] text-[#797979] font-bold before:w-[54px] before:h-[2px] before:bg-[#C4C5C6] before:mx-2 items-center after:w-[54px] after:h-[2px] after:bg-[#C4C5C6] after:mx-2 '>GIRIS YONTEMI SEC</p>
                                    <div className='flex'>
                                        <span className='text-white text-center'>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2  bg-[#13bafe] rounded-md border-4 border-[#002043] hover:bg-[#2cceff]'>
                                            <i className="fa-brands fa-twitter ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>TWITTER</span>
                                            </a>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2   bg-[#007AFF] rounded-md border-4 border-[#002043] hover:bg-[#09f]'>
                                            <i className="fa-brands fa-facebook-f ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>FACEBOOK</span>
                                            </a>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2  bg-[#FF3300] rounded-md border-4 border-[#002043] hover:bg-[#ff5141]'>
                                            <i className="fa-brands fa-google ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>GOOGLE</span>
                                            </a>
                                        </span>
                                        <span className='text-white text-center'>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2  bg-[#397BCA] rounded-md border-4 border-[#002043] hover:bg-[#528bcb]'>
                                            <i className="fa-brands fa-vk ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>VK</span>
                                            </a>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2   bg-[#FD5C20] rounded-md border-4 border-[#002043] hover:bg-[#f97645]'>
                                            <i className="fa-brands fa-reddit ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>REDDIT</span>
                                            </a>
                                            <a href="#" className='flex w-[200px] h-[43px] items-center m-2  bg-[#7289DA] rounded-md border-4 border-[#002043] hover:bg-[#869be3]'>
                                            <i className="fa-brands fa-discord ml-3 text-2xl"></i>
                                            <span className='block w-full  text-[16px] font-black text-[#001b4] '>GOOGLE</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
