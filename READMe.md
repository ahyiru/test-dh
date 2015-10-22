# test-dh
landing localhost

playground localhost:8000

adminconsole localhost:8081

doc localhost:8888

java server localhost:8080

    api_url: envexpand(process.env.DH_API_URL) || myhost+":8080/api/rest",
    admin_url: envexpand(process.env.DH_ADMIN_URL) || myhost+":8081",
    dashboard_url: envexpand(process.env.DH_DASHBOARD_URL) || myhost+":8082",
    swagger_url: envexpand(process.env.DH_SWAGGER_URL) || myhost+":8083",

    api: envexpand(process.env.DH_API) || myhost+":8080/api/rest",
    api_key: process.env.DH_API_KEY || 'DFXFrZ8VQIkOYECScBbBwsYinj+o8IlaLsRQ81wO+l8',

    secret: process.env.DH_SECRET || 'in god we trust'