const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '罗同学',
      area: '广东·广州',
      school: '暨南大学',
      major: '计算机科学与技术',
      degree: '本科',
      hometown: '广东',
      onSchoolTime: {
        beginTime: '2021.09',
        endTime: '2025.06',
      },
    },
    contact: {
      phone: '166****6666',
      email: '166666666@qq.com',
      github: '暂无',
    },
    work: {
      job: '计算机工程师',
      city: '广州｜深圳',
      cityList: ['广州', '深圳'],
    },
    hobby: '编程、运动、阅读',
    skill:
      '熟悉 React，了解并使用 Hooks 特性｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
    skillList: [
      '熟悉 React，了解并使用 Hooks 特性',
      '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
      '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
      '了解 MYSQL，了解数据库优化常用方法',
      '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
    ],
    evaluation:
      '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境 | 自我学习能力强，对新技术具有钻研精神',
    evaluationList: [

      '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境',
      '自我学习能力强，对新技术具有钻研精神',
    ],
    certificate: '全国大学生数据分析大赛一等奖 | 微信开发者大赛二等奖',
    certificateList: [
      '全国大学生数据分析大赛一等奖',
      '微信开发者大赛二等奖',
    ],
    schoolExperience: [
      {
        beginTime: '2022.09',
        endTime: '2023.09',
        post: '文艺部部长',
        department: '校团委学生会',
        content:
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        parseContent: [
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        ],
        date: 1621145137865,
      },
    ],
    workExperience: [
      {
        beginTime: '2022.09',
        endTime: '2023.04',
        post: '学生网络工程师',
        department: '暨南大学网络中心',
        content:
          '担任暨南大学网络中心工作室学生网络工程师 | 协助老师管理校园网络',
        parseContent: [
          '担任暨南大学网络中心工作室学生网络工程师',
          '协助老师管理校园网络',
        ],
        date: 1621145137865,
      },
    ],
    projectExperience: [
      {
        beginTime: '2023.12',
        endTime: '2024.1',
        projectName: 'visResumeMook 交互式简历平台',
        post: '前端&后端开发',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，自定义组件模版',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
          '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
          '通过 indexDB 方式实现历史简历缓存，自定义组件模版',
        ],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;
