import { useRef } from 'react';
import { Button } from './components/ui/button';
import { getCssVariableValue } from './utils/common';

function App() {
  const lightModeContainer = useRef<HTMLDivElement | null>(null);
  const darkModeContainer = useRef<HTMLDivElement | null>(null);

  console.log(getCssVariableValue('--background', lightModeContainer.current!));
  console.log(getCssVariableValue('--background', darkModeContainer.current!));

  return (
    <div className="h-screen w-scree grid grid-cols-2">
      <div className="bg-background text-foreground grid place-items-center" ref={lightModeContainer}>
        <div className="grid grid-cols-2 gap-4">
          <Button>Solid Button</Button>
          <Button variant="outline" isNeumorphic>
            Outline Button
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>
      <div className="dark bg-background text-foreground grid place-items-center" ref={darkModeContainer}>
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
