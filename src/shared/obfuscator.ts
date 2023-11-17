import {maskPassword as maskString} from 'maskdata';

export const obfuscateName = (name: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedStartCharacters: 2,
    }

    const nameObfuscated = maskString(name, maskConfig);

    return nameObfuscated;
}

export const obfuscateLastName = (lastName: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedStartCharacters: 2,
    }

    const lastNameObfuscated = maskString(lastName, maskConfig);

    return lastNameObfuscated;
}

export const obfuscateDocumentNumber = (documentNumber: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedStartCharacters: 2,
        unmaskedEndCharacters: 2,
    }

    const documentNumberObfuscated = maskString(documentNumber, maskConfig);

    return documentNumberObfuscated;
}

export const obfuscateMotor = (motor: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedEndCharacters: 3,
    }

    const motorObfuscated = maskString(motor, maskConfig);

    return motorObfuscated;
}

export const obfuscateVin = (vin: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedEndCharacters: 3,
    }

    const vinObfuscated = maskString(vin, maskConfig);

    return vinObfuscated;
}

export const obfuscateChasis = (chasis: string): string => {
    const maskConfig = {
        maskWith: "*",
        maxMaskedCharacters: 100,
        unmaskedEndCharacters: 3,
    }

    const chasisObfuscated = maskString(chasis, maskConfig);

    return chasisObfuscated;
}


