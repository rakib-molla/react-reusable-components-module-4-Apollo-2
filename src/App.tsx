// import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen flex items-center justify-center ">
        
        {/* reUseable button  */}
         <Button variant={"outline"} className="w-[500px]">click</Button>
      </div>
    </Container>
  );
}

export default App;
