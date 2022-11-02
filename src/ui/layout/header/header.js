import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import {Button, Divider, Drawer} from "@mui/material";
const Header = inject('CoreStore')(
    observer((props) => {
        const { CoreStore } = props
        const [showMenu , setShowMenu] = useState(false)
        return (
            <header>
                <Drawer
                    anchor={'right'}
                    open={showMenu}
                    onClose={()=>setShowMenu(false)}
                >
                    <ul className={'px-4 pt-8 w-full flex justify-end items-center flex-col'}>
                        <Link href={'/'}>
                            <li className={'py-3'}>صفحه اصلی</li>
                            <Divider/>
                        </Link>

                        <Link href={'/todo-list'}>
                            <li className={'py-3'}>{'todo list'}</li>
                            <Divider/>
                        </Link>

                        <Link href={'/'}>
                            <li className={'py-3'}>مراکز خدمات درمانی</li>
                            <Divider/>
                        </Link>

                        <Link href={'/'}>
                            <li className={'py-3'}>شعبه‌های ما</li>
                            <Divider/>
                        </Link>

                        <Link href={'/'}>
                            <li className={'py-3'}>سوال‌‌های متداول</li>
                        </Link>
                    </ul>
                </Drawer>
                <nav className=" bg-white md:min-h-[72px] px-2 sm:px-4 py-2.5  shadow-[0_4px_4px_4px_rgba(18,18,18,0.2)] mix-blend-normal">
                    <ul className={'hidden lg:block'}>
                    <div className="container text-[#1158A7] text-sm font-normal flex-row-reverse flex flex-wrap px-4 justify-between items-center mx-auto ">
                        {/** logo **/}
                        <li>
                            <Link href={'/'}>
                                <img  src={'/static/icon/logo.svg'} alt={'ایران sos لوگو'}/>
                            </Link>
                        </li>
                        <Link href={'/'}>
                            <li>صفحه اصلی</li>
                        </Link>
                        <Link href={'/todo-list'}>
                            <li>{'todo list'}</li>
                        </Link>
                        <Link href={'/'}>
                            <li>مراکز خدمات درمانی</li>
                        </Link>
                        <Link href={'/'}>
                            <li>شعبه‌های ما</li>
                        </Link>
                        <Link href={'/'}>
                            <li>سوال‌‌های متداول</li>
                        </Link>
                       <li>
                           <Button  className={'bg-[#1158A7] text-white py-2 px-5 rounded-2xl text-sm font-normal shadow-[0_2px_2px_2px_rgba(18,18,18,0.1)] hover:bg-[#3B4B95]'}>
                               <span className={'button-style-font'}>
                               ورود و فعال سازی
                               </span>
                           </Button>
                       </li>


                </div>
                    </ul>
                    <ul className={'block lg:hidden'}>
                        <div className="container text-[#1158A7] text-sm font-normal flex-row-reverse flex flex-wrap px-4 justify-between items-center mx-auto ">
                        <li>
                                <Button onClick={()=>setShowMenu(true)}>
                                    <img  src={'/static/icon/menu.svg'} alt={'menu'}/>
                                </Button>
                        </li>
                        <li>
                        <Link href={'/'}>
                            <img className={'block sm:hidden'} src={'/static/icon/mini-logo.svg'} alt={'ایران sos لوگو'}/>
                            <img className={'hidden sm:block'} src={'/static/icon/logo.svg'} alt={'ایران sos لوگو'}/>
                        </Link>
                    </li>
                        <li>
                            <Button  className={'bg-[#1158A7] text-white py-2 px-5 rounded-2xl text-sm font-normal shadow-[0_2px_2px_2px_rgba(18,18,18,0.1)] hover:bg-[#3B4B95]'}>  ورود و فعال سازی </Button>
                        </li>
                        </div>
                    </ul>
                </nav>

            </header>
        )
    }),
)
export default Header
//loginModal
