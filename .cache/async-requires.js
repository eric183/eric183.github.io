// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-cv-js": () => import("./../src/pages/cv.js" /* webpackChunkName: "component---src-pages-cv-js" */),
  "component---src-pages-file-system-js": () => import("./../src/pages/file-system.js" /* webpackChunkName: "component---src-pages-file-system-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-index-js": () => import("./../src/pages/projects/index.js" /* webpackChunkName: "component---src-pages-projects-index-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

