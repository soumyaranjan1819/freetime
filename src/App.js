import FindAvailableTimes from "./Components/FindSlot";
import Shedule from "./Components/Shedule";
import NativePickers from "./Components/UserInput";

function App() {
  return (
    <div className="flex flex-col items-center">
      <section className=" w-[75vw] bg-white px-6 py-8">
        <h1 className=" uppercase text-lg mb-2">Find a free time</h1>
        <NativePickers />
      </section>
      <Shedule />
      {/* <FindAvailableTimes/> */}
    </div>
  );
}

export default App;
