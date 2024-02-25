import { useState } from 'react';
import { ErrorText, TimerInput } from './styled';
import { RowContainer, DescriptionText } from '../styled';

type IInputEvent = Event & { target: { value: string }};

interface IProps {
    errorTextProp: string,
    name: string
}

const BonusTimer = ({ errorTextProp, name }: IProps): JSX.Element => {
    const [errorText, updateErrorText] = useState('');
    const validate = (event: IInputEvent, max: number) => {
        if (!event) return;
        const value = event.target?.value;
        const satisfies = Number(value.split(':')[0]) <= max;
        updateErrorText( !satisfies ? errorTextProp : '');
    };
    const timers = () => {
        return [3, 4, 5, 6].map(el => {
            return <RowContainer style={{ marginBottom: '10px' }} key={el + 'row_container'}>
                <strong>{el} букв.</strong>
                <TimerInput
                    name={name + `_${el}_${el === 6 ? 'plus_' : ''}letters`}
                    id="sec_timer"
                    // @ts-ignore
                    onChange={e => validate(e, 60)}
                />
            </RowContainer>
        })
    };
    return <>
        <ErrorText>{errorText}</ErrorText>
        <DescriptionText>
            Добавление бонусных секунд за отгаданные слова определённой длины
        </DescriptionText>
        {timers()}
    </>
};

export default BonusTimer;