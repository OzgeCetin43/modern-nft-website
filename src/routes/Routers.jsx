import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Collections from '../pages/Collections/Collections'
import Search from '../pages/Search/Search'
import AuthorProfile from '../pages/AuthorProfile/AuthorProfile'
import NFTDetail from "../pages/NFTDetail/NFTDetail"
import AccountSettings from '../pages/AccountSettings/AccountSettings'
import UploadItem from '../pages/UploadItem/UploadItem'
import ConnectWallet from '../pages/ConnectWallet/ConnectWallet'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Subscription from '../pages/Subscription/Subscription'
import Dashboard from '../pages/Dashboard/Dashboard'
import LivePricing from '../pages/LivePricing/LivePricing'
import VoteExplore from '../pages/VoteExplore/VoteExplore'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collections />} />
            <Route path='/search' element={<Search />} />
            <Route path='/author-profile' element={<AuthorProfile />} />
            <Route path='/nft-detail' element={<NFTDetail />} />
            <Route path='/account-settings' element={<AccountSettings />} />
            <Route path='/upload-item' element={<UploadItem />} />
            <Route path='/connect-wallet' element={<ConnectWallet />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/live-pricing' element={<LivePricing />} />
            <Route path='/vote-explore' element={<VoteExplore />} />
        </Routes>
    )
}

export default Routers