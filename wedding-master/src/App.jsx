import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
import Invition from "./components/invition/Invition";
import "./global.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loading />}
      <Invition />
    </div>
  );
}

export default App;
