
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portafolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2226, hash: '3514296a2ac6e485c0b8f9db4a7cb31a69b64c6f61e79a536b47f5ba7e322b83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1586, hash: 'a455fffbd2c3f06f590127d9b15eab0751702a4737edfbde4b90417dd6409303', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UJYRXEQK.css': {size: 96399, hash: 'QolypY7uDfo', text: () => import('./assets-chunks/styles-UJYRXEQK_css.mjs').then(m => m.default)}
  },
};
