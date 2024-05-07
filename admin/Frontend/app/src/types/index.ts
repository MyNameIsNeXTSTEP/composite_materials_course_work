export interface IFormData {
    name: string,
    description: string,
    image?: imageForFormReq | null,
    letters: string,
};

export interface ITask {
    id?: number,
    name: string,
    description: string,
    image: string,
    letters: string,
    is_active: boolean | string | number,
    is_published: boolean | string | number,
    created_at: string,
}

export type imageForFormReq = {
    imgBuffToSave: string | ArrayBuffer,
    imgName: string,
    type: string,
};