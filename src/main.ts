import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 跨域
  app.enableCors();
  // 全局路由前缀
  app.setGlobalPrefix('api');

  /**
   * 注册错误方法
   * 通过 @nestjs/common 引入 HttpException
   * throw new HttpException('禁止修改', HttpStatus.BAD_REQUEST);
   */
  app.useGlobalFilters(new HttpExceptionFilter());

  // 注册成功拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 添加dto错误校验
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
