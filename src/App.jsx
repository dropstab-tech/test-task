import logo from "./images/drop.png";

export function App() {
  return (
    <div class="p-10">
      <div class="mb-10 flex items-center space-x-4">
        <img src={logo} class="h-10" />
        <h1 class="text-3xl font-bold text-gray-800">Here we come</h1>
      </div>

      <div class="h-80 w-full rounded bg-gray-100" />
    </div>
  );
}
