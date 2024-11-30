import { defineConfig } from "vitepress"

export default defineConfig({
  title: "H8 Network",
  description: "河坝Minecraft服务器-文档",
  themeConfig: {
    nav: [{ text: "主页", link: "/" }, { text: "皮肤站", link: "https://auth.hfbz.net" }],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "简介", link: "/introduction" },
          { text: "快速开始", link: "/getting-started" },
        ],
      },
      {
        text: "服务器",
        items: [{ text: "主服务器", link: "/server/main" }],
      },
      {
        text: "更新日志",
        link: "/update",
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
})
