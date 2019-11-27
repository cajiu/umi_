// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/login',
      component: '../layouts/LoginLayout/login',
      routes: [
        {
          path: '/login',
          component: '../pages/login/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasisLayout/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],  
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'umi-app',
        dll: true,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
