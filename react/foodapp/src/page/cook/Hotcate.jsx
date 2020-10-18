import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import {HotCateWrap} from "./styledCook"
import {get} from "../../utils/http"
// const data = Array.from(new Array(8)).map(() => ({
//     icon: 'http://p0.meituan.net/codeman/050ce6754d32482c75273e292407f2b312356.png',
//     title:'川菜'
//   }));
export default class Hotcate extends Component {
    state={
        hotList:[]
    }
    async componentDidMount(){
        let result = await get({
            url:"/api/hotcate"
        })
        console.log(result);
        let data = result.map((v,i)=>({
            icon:v.img,
            title:v.title
        }))
        this.setState({
            hotList:data
        })
    }
    _renderItem = dataItem=>(
        <div className="item">
            {   
                <img src={dataItem.icon}/>
            }
            <span>{dataItem.title}</span>
        </div>
    )
    render() {
        return (
            <HotCateWrap>
                <header>热门分类</header>
                <Grid data={this.state.hotList}
                    columnNum={4}
                    hasLine={true}
                    renderItem={this._renderItem}
                    />
            </HotCateWrap>
        )
    }
}
