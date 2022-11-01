import {observer} from "mobx-react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import BaseLayout from "../../src/ui/layout/base-layout";
import {Box, Card, CardActions, CardContent, Checkbox, Fab, Input, Pagination, TextField} from "@mui/material";
import todoController from '../../src/data/controller/todoController/todoController'
const controller = new todoController()
const TodoList = (observer((props)=>{
    const router = useRouter()
    useEffect(()=>{
        controller.getList()
    },[])
    return(
        <Box className={'  w-full my-6 mx-auto p-4 container relative'}>
            <Card >
                <CardContent>
                    {
                        controller.limitPosts.map((item , index) => {
                            return   <Card className={'p-3 flex items-center justify-between '} key={item.userId}>

                                <div className={'flex items-center'}>
                                    <p className={'mr-2'}>{controller.page*index + 1 }</p>
                                    <Checkbox checked={item.completed}/>
                                    <p>{item.title}</p>
                                </div>
                                <div className={'flex items-center'}>
                                    <div>
                                        <img src={'/static/icon/delete.svg'}/>
                                    </div>
                                    <div>
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
                    <Input className={'w-full'} placeholder={'please enter todo title'}/>

                        <div >
                            <img className={'w-full h-full'} src={'/static/icon/send.svg'}/>
                        </div>



                </CardActions>
            </Card>

        </Box>
    )
}))
TodoList.Layout = BaseLayout
export default TodoList