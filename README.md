# Nest.js 模板

# Use
```bash
#安装nest-cli
npm i -g @nestjs/cli

#建module文件，会自动引入
nest g mo [文件夹名]
#建controller文件
nest g co [文件名]
#建service文件
nest g service [文件名]
```

# 现支持内容
- 添加swagger
  地址：/docs
  swagger声明方法见 app.controller.ts 文件
- 添加全局拦截器