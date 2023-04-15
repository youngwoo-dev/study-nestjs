import { PickType } from '@nestjs/swagger';
import { Cat } from '../../common/cats/cats.schema';

export class LoginRequestDto extends PickType(Cat, [
  'email',
  'password',
] as const) {}
