import * as ST from './styled';

const Menu = (): JSX.Element => {
    return (
        <ST.MenuWrapepr>
            <ST.MenuItem href='#materials'>Материалы</ST.MenuItem>
            <ST.MenuItem href='#create-materials'>Добавление материала</ST.MenuItem>
            <ST.MenuItem href='#orders'>Заказы</ST.MenuItem>
            <ST.MenuItem href='#users'>Пользователи</ST.MenuItem>
        </ST.MenuWrapepr>
    )
}

export default Menu;