export interface RecaptchaDataResponse {
    success: boolean
    challenge_ts?: string
    hostname?: string
    score?: number
    action?: string,
    "error-codes"?: string[]
}

export interface RecaptchaResponse {
    success: boolean;
    error?: string[];
}

export interface RecaptchaRequest {
    recaptchaV3: string;
}