import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SubmitData {
  @ApiProperty({ description: '姓名' })
  readonly name: string;

  @ApiProperty({ description: '年龄' })
  readonly age: number;

  @ApiProperty({ description: '性别' })
  readonly sex: number;

  @ApiPropertyOptional({ description: '城市' })
  readonly city: string;
}