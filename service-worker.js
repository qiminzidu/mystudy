if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const l=e=>d(e,c),n={module:{uri:c},exports:s,require:l};i[c]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(a(...e),s)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/09/28/hello-world/index.html",revision:"622ff9f8c7314c364a4e2be247570ad2"},{url:"2024/09/30/关于 hexo 主题 butterfly 的 Local Search 配置问题/index.html",revision:"5f079c37ed7018df719ac88fcc41f2b2"},{url:"2024/10/05/关于将hexo部署到GitHub的教程-收藏/index.html",revision:"4080f3c561b566c0ad27c2ce62e294d5"},{url:"2024/10/06/部署hexon对hexo博客内容进行图形化管理/index.html",revision:"1e13c5336a578ec7baf485201289648d"},{url:"404.html",revision:"97543e04ff41c48065fef1b506ba8ce6"},{url:"about/index.html",revision:"4bde973503da6ea4efdda24c7486172c"},{url:"archives/2024/09/index.html",revision:"3769157cd838bf3b959d57402e671eb6"},{url:"archives/2024/10/index.html",revision:"86b44a2e4232eb33835c0634c2bdddcd"},{url:"archives/2024/index.html",revision:"28173420ddc65840bbde00035712e7fc"},{url:"archives/index.html",revision:"1c51b42725149a61a81be6edd6bbd00d"},{url:"artitalk/index.html",revision:"36f050f69ab18273ec791272a76095c2"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"books/index.html",revision:"43dfc9f3b4158e6ba85bbf0a242cd645"},{url:"categories/index.html",revision:"21b2932f8e2b762f819325c1d14a7459"},{url:"categories/建站小记/index.html",revision:"ccb6cfda65d67785b7de75383fd05451"},{url:"css/index.css",revision:"c17f6cefe6b2bfe0a608fa62a6db0a66"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"aaf162c849a0dbe954b01088d8ccd104"},{url:"galleryGroup/index.html",revision:"c23224bfb81d0b374afd46982f76377f"},{url:"games/index.html",revision:"c5f60decd20e0b55544bdc6a7c3596d7"},{url:"images/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/微信支付.png",revision:"cac3035e921f9f76d4ab6dde24284dab"},{url:"img/支付宝.jpg",revision:"7aadf4ab8d199eb5d9f9a818cb910246"},{url:"index.html",revision:"1cb96a6c872eb53a47f676b4f5d415da"},{url:"js/main.js",revision:"26ad6fa7be2af4e864334a90fd58fcef"},{url:"js/search/algolia.js",revision:"ae3892ca76cb36de8e76fd61aecd78a2"},{url:"js/search/local-search.js",revision:"f10f1d4e86aad45b5c6d6b85afa2f550"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"64e071c53161915e23d55d47235843b2"},{url:"links/index.html",revision:"32182a605d04c50efce578c6c148a99b"},{url:"message/index.html",revision:"f6fe0c5037cdc350f765b87f6ce95465"},{url:"movies/index.html",revision:"1e38d65b7f720607ecb2304ab087cdd2"},{url:"scripts/realtime.js",revision:"234a28a9ec0f386a730581e6ca39d24b"},{url:"shuoshuo/index.html",revision:"de0872a3082938a66db2e97b9d7c9a59"},{url:"sw-register.js",revision:"79d190dd92ee43b9baecebd7d80c3295"},{url:"sw.js",revision:"022a13e7c6a3b62d0235d25ab9a00feb"},{url:"tags/butterfly/index.html",revision:"50bde1bfd27c9428e377dbc614a5edc4"},{url:"tags/hexo/index.html",revision:"d5cf2df2f99e26ce352af3ee6e16367c"},{url:"tags/hexon/index.html",revision:"632c9275518a93ea20e8615f602f2236"},{url:"tags/index.html",revision:"a34681e43b3e116b513c66444eca7655"},{url:"tags/local-search/index.html",revision:"609410b43aa9869170e667ead6c60d16"},{url:"tags/搜索/index.html",revision:"8b80a1a14ca6b2914a5840cdb0c69ca9"},{url:"tags/配置/index.html",revision:"ed0b2a521f82d54749769eb84c7d608f"}],{})}));
//# sourceMappingURL=service-worker.js.map
