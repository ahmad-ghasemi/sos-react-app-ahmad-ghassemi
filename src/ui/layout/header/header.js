import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import {Button} from "@mui/material";
const Header = inject('CoreStore')(
    observer((props) => {
        const { CoreStore } = props
        return (
            <header>
                <nav className=" bg-white md:min-h-[72px] px-2 sm:px-4 py-2.5  shadow-[0_8px_8px_8px_rgba(18,18,18,0.2)] mix-blend-normal">
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
                        <Link href={'/todo'}>
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
                           <Button  className={'bg-[#1158A7] text-white py-2 px-5 rounded-2xl text-sm font-normal shadow-[0_2px_2px_2px_rgba(18,18,18,0.1)] hover:bg-[#3B4B95]'}>  ورود و فعال سازی </Button>
                       </li>


                </div>
                    </ul>
                    <ul className={'block lg:hidden'}>
                        <div className="container text-[#1158A7] text-sm font-normal flex-row-reverse flex flex-wrap px-4 justify-between items-center mx-auto ">
                        <li>
                            <Link href={'/'}>
                                <img  src={'/static/icon/menu.svg'} alt={'ایران sos لوگو'}/>
                            </Link>
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
