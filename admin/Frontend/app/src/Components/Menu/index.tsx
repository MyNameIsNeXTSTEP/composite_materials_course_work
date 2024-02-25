import * as ST from './styled';

const Menu = (): JSX.Element => {
    return (
        <ST.MenuWrapepr>
            <ST.MenuItem href='#tasks'>Задания</ST.MenuItem>
            <ST.MenuItem href='#create-tasks'>Создать задание</ST.MenuItem>
            <ST.MenuItem href='#words'>Слова</ST.MenuItem>
            <ST.MenuItem href='#users'>Пользователи</ST.MenuItem>
        </ST.MenuWrapepr>
    )
}

export default Menu;