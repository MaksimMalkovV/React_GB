import "./App.scss";
import Message from "./components/Message";

const Title = "Title";
const Text = "Random text fot test";


function App() {
  return (
    <Message title={Title} text={Text} />
  );
}

export default App;
