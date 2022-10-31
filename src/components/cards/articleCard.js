import {Button} from "@mui/material";

const ArticleCard = (props)=>{
    const {item} = props
    return(
        <div className={'border border-[#0F5098] rounded-3xl  max-w-[348px] '}>
            <div className={'flex justify-center items-center rounded-3xl p-4'}>
                <img className={'rounded-3xl overflow-hidden object-cover object-center'} src={item.image} alt={item.title}/>
            </div>
            <h2 className={'px-4 text-right'}>{item.title}</h2>
            <div className={'flex items-center justify-end  px-4 my-1'}>
                <p>{item.date}</p>
                <div><img src={'/static/icon/time.svg'} alt={'time'}/></div>
            </div>
            <p style={{direction:'rtl'}} className={'px-4 text-right'}>{item.description}</p>
            <Button variant="outlined" className={' rounded-xl mx-4 mb-4 px-8'}>ادامه</Button>
        </div>
    )
}
export default ArticleCard