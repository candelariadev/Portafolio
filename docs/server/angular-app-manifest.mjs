
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portafolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2226, hash: '9e402c5ecdd2ec6193218ccb086236107d2a5503db909f28c3156f6358916208', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1586, hash: '625e0114a7ab433d5721163df12b03a5409ba5d9a5708e93223e711e339de6c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UJYRXEQK.css': {size: 96399, hash: 'QolypY7uDfo', text: () => import('./assets-chunks/styles-UJYRXEQK_css.mjs').then(m => m.default)}
  },
};
