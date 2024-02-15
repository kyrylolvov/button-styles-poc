import { Button } from './components/ui/button';

function App() {
  return (
    <div className="h-screen w-scree grid grid-cols-2">
      <div className="bg-background text-foreground grid place-items-center">
        <div className="grid grid-cols-2 gap-4">
          <Button>Solid Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>
      <div className="dark bg-background text-foreground grid place-items-center">
        <div className="grid grid-cols-2 gap-4">
          <Button>Solid Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
