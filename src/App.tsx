import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold" >Hello World!</h1>
      <Button className="bg-gray-700 text-white" >Click me</Button>
      <Camera color="black" size={48} />
    </div>
  );
}

export default App;