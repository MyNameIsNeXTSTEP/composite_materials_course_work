export interface IFormData {
    name: string,
    description: string,
    image?: imageForFormReq | null,
};

export interface IMaterial {
    id?: number,
    name: string,
    description?: string,
    image?: string,
    is_on_sale?: boolean | string | number,
    amount?: number,
    createdAt: string,
}

export type imageForFormReq = {
    imgBuffToSave: string | ArrayBuffer,
    imgName: string,
    type: string,
};