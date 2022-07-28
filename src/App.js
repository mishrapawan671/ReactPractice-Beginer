import ConditionalRender from "./ConditionalRender";
import ParentChildCommunication from "./ParentChildCommunication";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ParentChildCommunication />
      <ConditionalRender status={true} />
    </div>
  );
}
