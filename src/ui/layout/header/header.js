import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

const Header = inject('CoreStore')(
    observer((props) => {
        const { CoreStore } = props






        return (
            <header>
                <nav className="  bg-white  px-2 sm:px-4 py-2.5  shadow-sm">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        {/** logo **/}
                        hedaer

</div>
                </nav>

            </header>
        )
    }),
)
export default Header
//loginModal
