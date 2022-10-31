import {observer} from "mobx-react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import BaseLayout from "../../src/ui/layout/base-layout";
import HomeController from "../../src/data/controller/homeController/homeController";
import Link from "next/link";
const controller = new HomeController()
const ArticleView = (observer((props)=>{
    const router = useRouter()
    useEffect(()=>{
     controller.findData(router.query.id)
    },[router.query.id])
    return(
        <div className={'border border-[#0F5098] rounded-2xl w-full my-6 mx-auto p-4 container'}>
            <Link href={'/'}>
                <div className={'flex items-center justify-end mb-3'}>
                    <span className={'text-xl font-semibold text-[#0F5098] flex justify-end mr-4'}> بازگشت </span>
                    <div className={'flex justify-center items-center w-10'}>
                        <img className={'w-full rotate-180 '} src={'/static/icon/back.svg'} alt={'back'} />
                    </div>
                </div>

            </Link>
            <div className={'w-full p-0 md:p-4'}>
                <img className={'w-full object-fit object-center rounded-2xl'} src={controller.item.image} alt={controller.item.title} />
            </div>
            <div className={'flex items-center justify-end  px-4 my-1'}>
                <p>{controller.item.date}</p>
                <div><img src={'/static/icon/time.svg'} alt={'time'}/></div>
            </div>
            <h2 className={'px-4 text-right text-2xl font-bold mb-6'}>{controller.item.title}</h2>
            <p style={{direction:'rtl'}} className={'px-4 text-right'}>{controller.item.description}</p>
        </div>
    )
}))
ArticleView.Layout = BaseLayout
export default ArticleView