import { useEffect, useRef } from 'react';
import { Button } from './components/ui/button';
import { getCssVariableValue } from './utils/common';
import tinycolor from 'tinycolor2';

function App() {
  const lightModeContainer = useRef<HTMLDivElement | null>(null);
  const darkModeContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outlineButtonBackground = getCssVariableValue('--background', lightModeContainer.current!);

    const outlineButtonShadowColor1 = tinycolor(outlineButtonBackground).darken(29).toHexString();
    const outlineButtonShadowColor2 = tinycolor(outlineButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const outlineNeumorphicButtonVariable = `0rem -.0625rem 0rem 0rem ${outlineButtonShadowColor1} inset, 0rem 0rem 0rem .0625rem ${outlineButtonShadowColor2} inset, 0rem .03125rem 0rem .09375rem ${tinycolor(
      outlineButtonBackground,
    ).toHexString()} inset`;

    document.documentElement.style.setProperty('--neumorphic-outline-button', outlineNeumorphicButtonVariable);
  }, []);

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
