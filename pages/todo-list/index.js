import {observer} from "mobx-react";
import React , {useEffect, useState} from "react";
import BaseLayout from "../../src/ui/layout/base-layout";
import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    Dialog, DialogActions,
    DialogTitle,
    Input, Slide,
} from "@mui/material";
import todoController from '../../src/data/controller/todoController/todoController'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const controller = new todoController()
const TodoList = (observer((props)=>{
    const [value , setValue] = useState('')
    const [dialog , setDialog] = useState(false)
    const [deletedValue , setItem] = useState({})
    useEffect(()=>{
        controller.getList()
    },[])
    const sendData = () =>{
        controller.create(value , ()=>{
            setValue('')
        })
    }
    const sendCompleted = (  item , index) => {
        controller.update(item , index)
    }
    const deleteItem = () => {
        console.log('deleted item')
        let data = deletedValue.item
        let index = deletedValue.index
        controller.delete(data , index)
    }
    const setDeletedItem = (item , index)=> {
        setItem({item : item , index: index})
        setDialog(true)
    }
    const handleUpdate = (item)=>{
        setValue(item.title)
    }
    return(
        <Box className={'  w-full my-6 mx-auto p-4 container relative'}>
            <Dialog
                open={dialog}
                onClose={()=>setDialog(false)}
                aria-labelledby="alert-dialog-title"
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle id="alert-dialog-title" className={'px-8'}>
                    {"Are you sure delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button  className={'text-[#e32232]'} onClick={()=>setDialog(false)}>No</Button>
                    <Button onClick={deleteItem} >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Card >
                <CardContent>
                    {
                        controller.limitPosts.map((item , index) => {
                            return   <Card className={'p-3 flex items-center justify-between my-2 '} key={item.userId}>

                                <div className={'flex items-center'}>
                                    <p className={'mr-4 md:w-8 text-center'}>{controller.page*index + 1 }</p>
                                    <Checkbox checked={item.completed} onClick={(e)=>sendCompleted( item , index)}/>
                                    <p className={`${item.completed ? ' font-semibold line-through  ' : ''}`}>{item.title}</p>
                                </div>
                                <div className={'flex items-center min-w-[56px]'}>
                                    <div onClick={()=>setDeletedItem(item . index)} className={'cursor-pointer mr-2'}>
                                        <img src={'/static/icon/delete.svg'}/>
                                    </div>
                                    <div onClick={()=>handleUpdate(item)} className={'cursor-pointer'}>
                                        <img src={'/static/icon/edit.svg'}/>
                                    </div>
                                </div>
                            </Card>
                        })
                    }
                </CardContent>
                {/*<div className={'flex justify-center items-center'}>*/}
                {/*    <Pagination onChange={(e ,page)=>controller.setPagination(page , 20)} page={controller.page} count={controller.posts.length/10} variant="outlined" color="secondary" />*/}
                {/*</div>*/}

                <CardActions>
                    <Input loading={controller.loading} className={'w-full'} placeholder={'please enter todo title'} value={value} onChange={(e)=>setValue(e.target.value)}/>

                        <div onClick={sendData} className={'cursor-pointer'} >
                            <img className={'w-full h-full'} src={'/static/icon/send.svg'}/>
                        </div>



                </CardActions>
            </Card>

        </Box>
    )
}))
TodoList.Layout = BaseLayout
export default TodoList