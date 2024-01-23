const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-10-6', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到LAOGOU717.COM', url: 'https://laogou666.com' },
    { title: '点击这里可以跳转回旧版博客', url: 'https://laogou666.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享编程',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'TANGLY1024.COM',
  HEO_HERO_TITLE_4: '新版上线',
  HEO_HERO_TITLE_5: 'NotionNext4.0 轻松定制主题',
  HEO_HERO_TITLE_LINK: 'https://laogou717.com',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '🎲掷个骰子',
    '🎲 是1点哦',
    '🎲 您的点数是2点',
    '🎲 您的点数是3点',
    '🎲 您的点数是4点',
    '🎲 您的点数是5点',
    '🎲 6点!!!!!'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/laogou717.com', // 个人资料底部按钮链接

  // 用户技能图标
 HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'ChatGPT',
      img_2: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cc62bc3-4541-4593-afba-f74577308066%2Fefa256ab-4a5e-493b-8052-1fe97d1ae341%2F10%25E6%259C%258811%25E6%2597%25A5.jpg?table=block&id=1c3076e6-9057-47d6-98ad-9f727f1089c1',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Bing',
      img_1: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cc62bc3-4541-4593-afba-f74577308066%2Fcf6fcf56-1ff2-49c0-8e2e-1969d7a492aa%2Fbing.jpg?table=block&id=d05adf9b-47df-40d8-ab30-c2f5353e3b73',
      color_1: '#FFFFFF',
      title_2: 'Libre Chat',
      img_2: 'https://docs.librechat.ai/assets/LibreChat.svg',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
     title_2: ' GitHub',
      img_2: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cc62bc3-4541-4593-afba-f74577308066%2F9cac2d15-601f-4318-ba47-5cd197d65260%2FGitHub.png?table=block&id=10afae08-5be6-473e-bb4b-aa476029d0b1',
      color_2: '#000000'
    },
    {
     title_1: 'huggingface',
      img_1: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cc62bc3-4541-4593-afba-f74577308066%2F61820510-6c4a-45ac-830c-7164c5e0b7ec%2Fhuggingface_logo-noborder_(1).svg?table=block&id=36f0d7b3-9505-4444-9db8-5942102f6fe7',
      color_1: '#f7cb4f',
      title_2: 'zeabur',
      img_2: 'https://zeabur.com/icons/logo.png',
      color_2: '#000000'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Vercel',
      img_2: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0cc62bc3-4541-4593-afba-f74577308066%2Fb364effd-78cc-4061-a0b9-c1ee7a842691%2FVercel.jpg?table=block&id=4bb53b4b-357c-4009-b93e-317e4f28cbf5',
      color_2: '#FFFFFF'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
