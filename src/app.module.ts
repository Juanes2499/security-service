import { Module } from '@nestjs/common';
import { EncryptionController } from './controllers/encryption.controller';
import { RecaptchaController } from './controllers/recaptcha.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ObfuscatorController } from './controllers/obfuscator.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [EncryptionController, RecaptchaController, ObfuscatorController],
  providers: [AppService],
})
export class AppModule {}
