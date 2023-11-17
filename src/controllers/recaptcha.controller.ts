import { Body, Controller, Post } from '@nestjs/common';
import { RecaptchaRequest, RecaptchaResponse } from '../interfaces/recaptcha.interface';
import { validateRecaptchaV3 } from '../shared/recaptcha';

@Controller('recaptcha')
export class RecaptchaController {

  @Post('validateV3')
  async validateV3 (@Body() body: RecaptchaRequest): Promise<RecaptchaResponse> {
    const dataResult = validateRecaptchaV3(body.recaptchaV3);
    return dataResult;
  }
}
