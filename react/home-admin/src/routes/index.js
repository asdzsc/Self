import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/Index";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import PageNotfound from "../pages/PageNotfound";

export const mainRoutes = [{
    path: "/login",
    component: Login
}, {
    path: "/404",
    component: PageNotfound
}]
export const adminRoutes = [{
    path: "/admin/dashboard",
    isShow: true,
    title: "看板",
    component: Index
}, {
    path: "/admin/products/",
    isShow: true,
    title: "商品管理",
    exact: true,
    component: List
}, {
    path: "/admin/products/edit/",
    isShow: false,
    component: Edit
}]