// Types need to be shared between frontend and backend
export interface ITask {
    id?: number,
    title: string,
    description: string,
    image: string,
    letters: string,
    default_timer_min: number,
    default_timer_sec: number,
    bonus_timer_3_letters: number,
    bonus_timer_4_letters: number,
    bonus_timer_5_letters: number,
    bonus_timer_6_plus_letters: number
};
