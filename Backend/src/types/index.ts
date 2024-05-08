// Types need to be shared between frontend and backend
export interface IMaterial {
    id?: number,
    title: string,
    description: string,
    image: string,
    isActive: boolean | string | number,
    isPublished: boolean | string | number,
    createdAt: string,
};
