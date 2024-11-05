import Achievements from "./sections/achievements/Achievements";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Home />
                <Achievements />
            </main>
        </div>
    );
}

export default App;
