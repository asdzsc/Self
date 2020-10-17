import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import cook from "../assets/cook.png"
import cookActive from "../assets/cook-active.png"
import location from "../assets/location.png"
import locationActive from "../assets/location-active.png"
import menu from "../assets/menu.png"
import menuActive from "../assets/menu-active.png"
import more from "../assets/more.png"
import moreActive from "../assets/more-active.png"

import Cook from "./cook/Cook"

 export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cook',
      hidden: false,
      fullScreen: true,
    };
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#333"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="cook"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cook}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookActive}) center center /  21px 21px no-repeat`}}
            />
            }
            selected={this.state.selectedTab === 'cook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cook',
              });
            }}
          >
             <Cook></Cook>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="menu"
            selected={this.state.selectedTab === 'menu'}
            onPress={() => {
              this.setState({
                selectedTab: 'menu',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="美食地图"
            key="location"
            selected={this.state.selectedTab === 'location'}
            onPress={() => {
              this.setState({
                selectedTab: 'location',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

 
 




 