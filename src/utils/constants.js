// 通过 VPN 访问的应用，需要以前端应用的地址 'origin' 作为生产环境服务端接口
const SERVER_IP_MAP = {
  CRM_PRODUCT_URL: "https://crm.flksec.com/api", // 办公室内网环境访问前端应用，生产环境服务端接口
  CRM_DEV_URL: "http://47.111.119.111:8080/api",
};

const DEV_IP_MAP = [
  "localhost",
  "192.168.20.107", 
];
// 以上是开发者开发过程中会使用到的前端应用地址(包括测试环境)，可自由添加。
// 以这些地址访问应用时，测试环境服务端接口会选择相应的正确地址。

// 以下是导出各个接口服务的 IP 地址，
let CRM_IP_PORT;
const { origin, hostname } = window.location;
if (DEV_IP_MAP.includes(hostname)) {
  CRM_IP_PORT = SERVER_IP_MAP.CRM_DEV_URL;
} else {
  CRM_IP_PORT = `${origin}/api`;
}

export { CRM_IP_PORT };