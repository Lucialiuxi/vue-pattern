const routes = [
    {
        path: "./",
        name:"home",
        component: ()=>import("../components/AboutApi")
    },
    {
        path: "./api",
        name:"api",
        component: ()=>import("../components/AboutApi")
    },
    {
        
        path: "./event",
        name:"事件",
        component: ()=>import("../components/AboutEvent")
    },
    {
        path: "./filers",
        name:"过滤器",
        component: ()=>import("../components/AboutFilters")
    },
    {
        path: "./props",
        name:"props",
        component: ()=>import("../components/AboutProps")
    },
    {
        path: "./function-jsx",
        name:"渲染函数 & JSX",
        component: ()=>import("../components/AboutRenderFunctionsJSX")
    },
    {
        path: "./custom-directive",
        name:"自定义指令",
        component: ()=>import("../components/AboutCustomDirective")
    },
    {
        path: "./slot",
        name:"插槽",
        component: ()=>import("../components/AboutSlot")
    },
    {
        path: "./components-dynamic-async",
        name:"动态组件 & 异步组件",
        component: ()=>import("../components/AboutSpecilComponent")
    },
    {
        path: "./transitions",
        name:"过渡 & 动画",
        component: ()=>import("../components/AboutTransitionAndAnimation")
    }
];

export default routes;

