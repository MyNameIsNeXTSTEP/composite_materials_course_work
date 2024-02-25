export interface IFormData {
    title: string,
    description: string,
    image?: imageForFormReq | null,
    letters: string,
    default_timer_min?: number,
    default_timer_sec?: number,
    bonus_timer_3_letters: number,
    bonus_timer_4_letters: number,
    bonus_timer_5_letters: number,
    bonus_timer_6_plus_letters: number
};

export type imageForFormReq = {
    imgBuffToSave: string | ArrayBuffer,
    imgName: string,
    type: string,
};