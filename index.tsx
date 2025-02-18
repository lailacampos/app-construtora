// index.ts (na raiz do projeto)
import { ExpoRoot } from "expo-router";
import { registerRootComponent } from "expo";

export function App() {
  return <ExpoRoot context={require.context("./app")} />;
}

registerRootComponent(App);
