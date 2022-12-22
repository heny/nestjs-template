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
- 新增接口参数校验

# 添加类型校验例子
```ts
import { IsNotEmpty, IsNumber } from 'class-validator'
export class SubmitData {
  @IsNotEmpty({ message: '缺少年龄' })
  @IsNumber({}, { message: '必须是数字类型' })
  readonly code: string;
}
```

# 添加swagger类型标注例子
```ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class SubmitData {
  @ApiProperty({ description: '报告编码' })
  // 可选的
  @ApiPropertyOptional({ description: '城市' })
  readonly code: string;
}
```

# 返回错误信息
```ts
import { HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: '信息' })
  @Post('/submit')
  updateInfo(@Req() request: Request) {
    throw new HttpException('禁止修改', HttpStatus.BAD_REQUEST);
  }
}
```