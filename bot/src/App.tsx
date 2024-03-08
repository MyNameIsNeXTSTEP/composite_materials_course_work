// import { useEffect } from "react";

declare global {
    var Telegram: { WebApp: any };
};

const tg = window.Telegram.WebApp;

const App = (): JSX.Element => {
    // useEffect(() => {
    //     tg.ready();
    // }, [])

    return <div>
        Bot
        {/* <button onClick={() => tg.close()}></button> */}
    </div>;
}

export default App;