import { useState } from 'react';
import { ErrorText, TaskTimer, TimerInput } from './styled';

type IInputEvent = Event & { target: { value: string }};
interface IProps {
    errorTextProp: string,
    name: string,
}

const Timer = ({ errorTextProp, name }: IProps): JSX.Element => {
    const [errorText, updateErrorText] = useState('');
    const validate = (event: IInputEvent, max: number) => {
        if (!event) return;
        const value = event.target?.value;
        const satisfies = Number(value.split(':')[0]) <= max;
        updateErrorText( !satisfies ? errorTextProp : '');
    };
    return <>
        <ErrorText>{errorText}</ErrorText>
        <TaskTimer>
            Мин:
            <TimerInput
                name={name + '_min'}
                placeholder='1'
                id="min_timer"
                // @ts-ignore
                onChange={e => validate(e)}
            />
            Сек:
            <TimerInput
                name={name + '_sec'}
                placeholder='0'
                id="sec_timer"
                // @ts-ignore
                onChange={e => validate(e)}
            />
        </TaskTimer>
    </>
};

export default Timer;