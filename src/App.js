import ConditionalRender from "./ConditionalRender";
import ListRender from "./ListRender";
import ParentChildCommunication from "./ParentChildCommunication";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ParentChildCommunication />
      <ConditionalRender status={true} />
      <h3>List render Example below</h3>
      <ListRender />
    </div>
  );
}
