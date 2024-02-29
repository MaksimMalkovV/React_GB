import "./App.scss";
import Message from "./components/hm_1/Message";

const Title = "Title";
const Text = "Random text fot test";


function App() {
  return (
      <Message title={Title} text={Text} />
  );
}

export default App;
