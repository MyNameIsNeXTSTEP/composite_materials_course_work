import styled, { css } from "styled-components";

const STKeyboard = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 205px;
    padding-bottom: 20px;
    margin-top: 10px;
    align-self: center;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    white-space: nowrap;
    background-color: lightgray;
`;

const STKeyButton = styled.button<{active: boolean}>`
    display: inline-block;
    width: 33px;
    height: 43px;
    background: lightgray;
    text-decoration: none;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-right: 5px;
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
    font-family: 'helvetica';
    box-shadow: 0px 1px 1px 0px gray;
    ${p => p.active && css`background: white;`};
`;

const STRow = styled.div`
    display: inline;
    height: 43px;
    margin-bottom: 8px;
    align-self: center;
`;

const STInput = styled.input`
    display: inline;
    background: white;
    width: 100%;
    /* height: 45px;
    margin-bottom: 15px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px; */
    border-radius: 20px;
    text-align:center;
    font-size: 1.2rem;
    font-weight: 200;
    font-family: 'helvetica';
    :focus { outline: none; }
`;

const STTimer = styled.span`
    display: inline;
    width: 2rem;
    font-weight: 400;
    font-size: xx-large;
    margin-right: 5px;
`;

const STInfoBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 45px;
    margin-bottom: 15px;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

interface IProps {
    activeLetters: string[],
    timer?: number,
};

const Keyboard = ({ activeLetters, timer }: IProps): JSX.Element => {
    const letters1stRow = ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х"];
    const letters2dRow = ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"];
    const letters3dRow = ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"];
    const lettersForKeyboard = [letters1stRow, letters2dRow, letters3dRow];

    return <STKeyboard id={"keyboard"}>
        <STInfoBlock>
            {/* @todo: timer */}
            <STTimer>{timer || 99}</STTimer>
            <STInput readOnly placeholder="Слово"/>
        </STInfoBlock>
        {lettersForKeyboard.map((lettersRow, idx) => {
            return <STRow className={`${idx}_Row`}>
                {lettersRow.map(letter => {
                    const isActive = activeLetters.includes(letter); 
                    return <STKeyButton disabled={!isActive} active={isActive}>{letter}</STKeyButton>
                })}
            </STRow>
        })}
    </STKeyboard>
};

export default Keyboard;