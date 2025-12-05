
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portafolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2226, hash: 'f073e86e9ca3118bb884499421807db9f6dd81de85d1fdc416538635e56a7c49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1586, hash: '2365bd33bd99a4264c823255b8dd03b49789e49623a6a8b3cf14e80533ac750c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UJYRXEQK.css': {size: 96399, hash: 'QolypY7uDfo', text: () => import('./assets-chunks/styles-UJYRXEQK_css.mjs').then(m => m.default)}
  },
};
