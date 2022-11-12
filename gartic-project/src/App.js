import Header from "./Components/Header";
import Screen from "./Components/Screen";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App bg-Bg  bg-bgColor w-100 h-[100vh] flex justify-center items-center">
      <div className='w-[1058px] h-[790px] flex flex-col items-center'>
      <Header/>
      <Screen/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
