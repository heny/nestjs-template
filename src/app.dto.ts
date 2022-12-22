import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
/**
 * @see https://github.com/typestack/class-validator#validation-messages
 */
import { IsNotEmpty, IsNumber } from 'class-validator'

export class SubmitData {
  @ApiProperty({ description: '姓名' })
  readonly name: string;

  @IsNotEmpty({ message: '缺少年龄' })
  @ApiProperty({ description: '年龄' })
  readonly age: number;

  @IsNumber({}, { message: '必须是数字类型' })
  @ApiProperty({ description: '性别' })
  readonly sex: number;

  @ApiPropertyOptional({ description: '城市' })
  readonly city: string;
}