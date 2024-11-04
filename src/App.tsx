import Header from "./sections/Header";
import Home from "./sections/home/Home";

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
