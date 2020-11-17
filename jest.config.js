module.exports={
    "testMatch":["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions":[
        "js",
        "json",
        // 告诉Jest 处理`*.vue` 文件
        "vue"
    ],
    "transform":{
        // `用vue-jest处理`*.vue`文件 `
        ".*\\.(vue)$":"vue-jest",
        ".*\\.(js)$":"babel-jest"
    }
}