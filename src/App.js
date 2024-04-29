import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "./App.css";
import { RadixComponent } from "./RadixComponent/RadixComponent";

function App() {
  return (
    <div className="App">
      <Theme
        accentColor="blue"
        panelBackground="solid"
        radius="large"
        scaling="110%"
        
      >
        <RadixComponent></RadixComponent>
      </Theme>
    </div>
  );
}

export default App;
