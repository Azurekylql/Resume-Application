// 用来维护一份路由专用的文件

// 模块路径
const ROUTER = {
    root: '/',
    resume: '/resume/:fromPath/:templateId/:templateIndex',
    templateList: '/templateList',
    intro: '/intro',
};
export default ROUTER;

export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
    templateList: 'templateList',
    intro: 'intro',
};

// 入口模块 将ROUTER_ENTRY的类型约束为TSRouter.Item[]
export const ROUTER_ENTRY: TSRouter.Item[] = [
    {
        url: ROUTER.intro,
        key: ROUTER_KEY.intro,
        text: '软件介绍',
    },
    {
        url: ROUTER.resume,
        key: ROUTER_KEY.resume,
        text: '简历制作',

    },
    // *软件介绍页面1-2
    {
        url: ROUTER.templateList,
        key: ROUTER_KEY.templateList,
        text: '简历模版',
    },
];