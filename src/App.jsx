import "./App.css";
import Counter from "./Counter";
import Card from "./componenents/Card";
import Button from "./componenents/Button";
import reactsvg from "./assets/react.svg";
function App() {
  return (
    <>
      <Counter />
      <div className="flex items-center justify-center flex-row p-6">
        <Card
          title="Title"
          subtitle="subtitle"
          description="description description description"
          image={reactsvg}
          button={[
            <Button text="Click Me" action={() => alert("Button clicked!")} />,
            <Button
              text="Another Button"
              action={() => alert("Another button clicked!")}
            />,
            <Button
              text="Third Button"
              action={() => alert("Third button clicked!")}
            />,
          ]}
        />
        <Card
          title="Title"
          subtitle="subtitle"
          description="description description description"
          image={reactsvg}
          button={[
            <Button text="Click Me" action={() => alert("Button clicked!")} />,
            <Button
              text="Another Button"
              action={() => alert("Another button clicked!")}
            />,
            <Button
              text="Third Button"
              action={() => alert("Third button clicked!")}
            />,
          ]}
        />
        <Card
          title="Title"
          subtitle="subtitle"
          description="description description description"
          image={reactsvg}
          button={[
            <Button text="Click Me" action={() => alert("Button clicked!")} />,
            <Button
              text="Another Button"
              action={() => alert("Another button clicked!")}
            />,
            <Button
              text="Third Button"
              action={() => alert("Third button clicked!")}
            />,
          ]}
        />
      </div>
    </>
  );
}

export default App;
