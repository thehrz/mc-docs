import { defineConfig } from "vitepress"
import taskLists from "markdown-it-task-lists";

export default defineConfig({
  title: "H8 Network",
  description: "河坝Minecraft服务器-文档",
  lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "皮肤站", link: "https://auth.hfbz.net" },
      { text: "卫星地图", link: "https://map.hfbz.net" },

    ],

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
        text: "更新",
        items: [
          {
            text: "更新日志",
            link: "/update",
          },
          {
            text: "更新计划",
            link: "/plan",
          },
        ],
      },
    ],
    

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
  markdown: {
    config: (md) => {
      md.use(taskLists)
    },
    theme: {
			light: "github-light",
			dark: "github-dark",
		},
  },
})
