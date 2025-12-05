
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portafolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2226, hash: '7e5ff30b98703f8ab86e9f420e7e08641367af7dc93cea505e0dd50cdc4f0062', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1586, hash: 'e9875be8645750e2b5bb539477b4064b454e5c19f31898ade3b8b1ded2477b25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UJYRXEQK.css': {size: 96399, hash: 'QolypY7uDfo', text: () => import('./assets-chunks/styles-UJYRXEQK_css.mjs').then(m => m.default)}
  },
};
