import { Body, Controller, Get, Post, Req, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SubmitData } from './app.dot';

/**
 * ApiTags添加当前分类描述
 * ApiOperation  用来在url后面加描述
 */

@ApiTags('默认路径')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // 任何参数没写默认引导
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: '获取list' })
  @Get('list')
  getList(@Req() request: Request): BaseObject {
    console.log(request.query, 'body')
    return this.appService.getList();
  }

  @ApiOperation({ summary: '修改内容' })
  @Post('/submit')
  updateInfo(@Req() request: Request, @Body() body: SubmitData): string {
    console.log(request.body, 'body', body)
    throw new HttpException('禁止修改', HttpStatus.BAD_REQUEST);
  }
}
