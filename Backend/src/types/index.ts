// Types need to be shared between frontend and backend
export interface ITask {
    id?: number,
    title: string,
    description: string,
    image: string,
    letters: string,
    is_active: boolean | string | number,
    is_published: boolean | string | number,
    created_at: string,
};
