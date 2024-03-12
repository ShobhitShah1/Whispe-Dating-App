import { ThemeProvider } from "./App/Contexts/AppProvider";
import RootStack from "./App/Routes/RootStack";

export default function App() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
