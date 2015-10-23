var envexpand = function (str) {
    if (!str) return str;
    return str.replace(/\$([A-Za-z0-9_\-]+)/g, function (_, n) {
        return process.env[n];
    });
};
//var myhost='localhost';
var myhost='http://139.129.117.113';
module.exports = {

    api_url: envexpand(process.env.DH_API_URL) || myhost+":8080/dh/rest",
    admin_url: envexpand(process.env.DH_ADMIN_URL) || myhost+":8081",
    dashboard_url: envexpand(process.env.DH_DASHBOARD_URL) || myhost+":8082",
    swagger_url: envexpand(process.env.DH_SWAGGER_URL) || myhost+":8083",

    api: envexpand(process.env.DH_API) || myhost+":8080/dh/rest",
    api_key: process.env.DH_API_KEY || '1jwKgLYi/CdfBTI9KByfYxwyQ6HUIEfnGSgakdpFjgk=',

    secret: process.env.DH_SECRET || 'in god we trust'

};
