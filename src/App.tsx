import "./App.css";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <Timeline
      items={[
        {
          name: "Test",
          events: [{ time: 200 }, { time: 300 }, { time: 350 }, { time: 1000 }],
        },
        {
          name: "Test2",
          events: [{ time: 100 }, { time: 200 }, { time: 300 }, { time: 400 }],
        },
        {
          name: "Test",
          events: [{ time: 200 }, { time: 300 }, { time: 350 }, { time: 1000 }],
        },
      ]}
    />
  );
}

export default App;
