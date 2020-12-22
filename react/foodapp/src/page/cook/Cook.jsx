import React, { Component } from 'react'
import Header from "./Header"
import HotCate from "./Hotcate"
import Swiper from "./Swiper"
import Search from "../../components/search/Search"
 

export default class Cook extends Component {
    render() {
        return (
            <div>
                <Header />
                <Swiper />
                <Search />
                <HotCate />
            </div>
        )
    }
}