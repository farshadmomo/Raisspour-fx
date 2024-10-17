import './App.css'
import Header from './components/Header.jsx'
import Welcome from "./components/Welcome.jsx";
// import Test from './components/Test.jsx'
const App = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome md:w-full w-dvw">
                <Header />
                <Welcome />
                {/*<Test />*/}
            </div>
        </div>
    );
};

export default App;
