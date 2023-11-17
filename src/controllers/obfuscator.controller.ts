import { Body, Controller, Post } from '@nestjs/common';
import { obfuscateChasis, obfuscateDocumentNumber, obfuscateLastName, obfuscateMotor, obfuscateName, obfuscateVin } from 'src/shared/obfuscator';

@Controller('obfuscator')
export class ObfuscatorController {

    @Post('maskData')
    maskData (@Body() body: any): any {
        const dataResult = {
            name: obfuscateName(body.name),
            lastName: obfuscateLastName(body.lastName),
            documentNumber: obfuscateDocumentNumber(body.documentNumber),
            motor: obfuscateMotor(body.motor),
            vin: obfuscateVin(body.vin),
            chasis: obfuscateChasis(body.chasis)
        };
        return dataResult;
    }
}
