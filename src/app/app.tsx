import { AppProvider } from "./app-provider";
// import { AppRouter } from "./app-router";

export function App() {
  return (
    <AppProvider>
      <div>Home Page</div>
      {/* <AppRouter /> */}
    </AppProvider>
  );
}
