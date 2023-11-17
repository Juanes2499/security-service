import axios from 'axios';
import { RecaptchaDataResponse, RecaptchaResponse } from 'src/interfaces/recaptcha.interface';

export const validateRecaptchaV3 = async(recaptchaToken: string): Promise<RecaptchaResponse> => {

    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    const recaptchaThreshold = Number(process.env.RECAPTCHA_THRESHOLD);

    const axiosInstance = axios.create({
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const urlValidate = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`

    try{
        const responseData = (await axiosInstance.post(urlValidate, {})).data as RecaptchaDataResponse;

        if(responseData.success && responseData.score < recaptchaThreshold){
            const result = {
                success: responseData.success,
            } as RecaptchaResponse;

            return result;
        }else{
            const result = {
                success: responseData.success ,
                error: responseData['error-codes']
            } as RecaptchaResponse;

            return result;
        }
    }catch{
        const result = {
            success: false,
            error: ['error request']
        } as RecaptchaResponse;

        return result;
    }
}