/**
 * Created by bll on 16/4/15.
 */
export const TO_REGISTER="toRegister";
export const TO_FORGET="toForget";
export function toRegister(){
    return {
        type:TO_REGISTER
    }
}
export function toForget(){
    return {
        type:TO_FORGET
    }
}