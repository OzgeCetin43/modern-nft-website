import React from 'react'
import Routers from '../routes/Routers'
import { Footer, Header } from '../components/indexComponents'

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout