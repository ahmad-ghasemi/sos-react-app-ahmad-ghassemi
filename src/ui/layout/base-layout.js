import {inject, observer} from "mobx-react"
import React from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

const BaseLayout = inject("CoreStore")(observer(({children}) => {

    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    )


}));
export const getLayout = (page) => (
    <BaseLayout>{page}</BaseLayout>
);
export default BaseLayout;
