if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const l=e=>a(e,c),n={module:{uri:c},exports:s,require:l};i[c]=Promise.all(d.map((e=>n[e]||l(e)))).then((e=>(r(...e),s)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2024/09/30/关于 hexo 主题 butterfly 的 Local Search 配置问题/index.html",revision:"0164ae97ad5b9b24bde6396c27811dae"},{url:"2024/10/05/hello-world/index.html",revision:"14a5f7963d360cfd6e773d167780f169"},{url:"404.html",revision:"9f1ac63b638f307ae0ed179b7b04fd73"},{url:"about/index.html",revision:"0d03d52ea68547852898ff1aa258868a"},{url:"archives/2024/09/index.html",revision:"d0b6d89cacc0c1c72552db380c8e8e86"},{url:"archives/2024/10/index.html",revision:"2751054e968c12c9cf287ef2981b64fd"},{url:"archives/2024/index.html",revision:"d9e209e1a46b15ff58801a59768b3e14"},{url:"archives/index.html",revision:"5f95cf86ca30cc809f7ca8eb72b49691"},{url:"artitalk/index.html",revision:"a95d4f9261b3bed9d6690c59196a17f3"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"books/index.html",revision:"cfa3f1b579232b7fb7544b54e9c456c2"},{url:"categories/hexo/index.html",revision:"d80ecb8e362f066c6885b12848ae197a"},{url:"categories/index.html",revision:"c69dd7da510aaf84203aed88c46cfe6e"},{url:"css/index.css",revision:"630bb60d491e3205738253cc54b08237"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"9c521f264086cc57394c48b53bb69853"},{url:"galleryGroup/index.html",revision:"e1a5c436507feae6807f001722a67076"},{url:"images/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/小熊.png",revision:"5c9e438ad6e0b89ecd97b3abe56d6d6c"},{url:"img/微信支付.png",revision:"cac3035e921f9f76d4ab6dde24284dab"},{url:"img/支付宝.jpg",revision:"7aadf4ab8d199eb5d9f9a818cb910246"},{url:"index.html",revision:"11cdd406f4ee0ee247d1d2c9a013ff63"},{url:"js/main.js",revision:"26ad6fa7be2af4e864334a90fd58fcef"},{url:"js/search/algolia.js",revision:"ae3892ca76cb36de8e76fd61aecd78a2"},{url:"js/search/local-search.js",revision:"f10f1d4e86aad45b5c6d6b85afa2f550"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"64e071c53161915e23d55d47235843b2"},{url:"links/index.html",revision:"46a7a6cb987e638d0440eb610ac18b46"},{url:"message/index.html",revision:"03f8542762d8d2dd170da7c3730455ea"},{url:"shuoshuo/index.html",revision:"16aeea56d0d655c5c60c68a8ae4c254d"},{url:"tags/butterfly/index.html",revision:"200427e35ac8687007e7928f0ddecc17"},{url:"tags/hexo/index.html",revision:"c0577a05a9c679289701f4551eae103f"},{url:"tags/index.html",revision:"007619d13d2d28cf03fbaa6811382cc5"},{url:"tags/local-search/index.html",revision:"d9018786ff0650b9ecba669d9d6add60"},{url:"tags/搜索/index.html",revision:"d554b19fe0147c30a67b64980cb08485"},{url:"tags/配置/index.html",revision:"a65a6776c77c916567f0726a87d4bba7"}],{})}));
//# sourceMappingURL=service-worker.js.map
