import { Body, Controller, Post } from '@nestjs/common';
import { decrypt, encrypt } from '../shared/encryption';
import { encryptionData } from 'src/interfaces/encryption.interface';

@Controller('encryption')
export class EncryptionController {
  @Post('encrypt')
  encryptData(@Body() body: any): encryptionData {
    const dataEncrypted = encrypt(JSON.stringify(body));
    return dataEncrypted;
  }

  @Post('decrypt')
  decryptData(@Body() body: encryptionData): any {
    const dataDecrypted = decrypt(body);
    return dataDecrypted;
  }
}
