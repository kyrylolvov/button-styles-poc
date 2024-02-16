import { useEffect, useRef } from 'react';
import { Button } from './components/ui/button';
import { getCssVariableValue } from './utils/common';
import tinycolor from 'tinycolor2';

function App() {
  const lightModeContainer = useRef<HTMLDivElement | null>(null);
  const darkModeContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Neumorphic outline button
    const outlineButtonBackground = getCssVariableValue('--background', lightModeContainer.current!);

    const outlineButtonShadowColor1 = tinycolor(outlineButtonBackground).isDark()
      ? tinycolor(outlineButtonBackground).lighten(29).toHexString()
      : tinycolor(outlineButtonBackground).darken(29).toHexString();

    const outlineButtonShadowColor2 = tinycolor(outlineButtonBackground).isDark()
      ? tinycolor(outlineButtonBackground).lighten(100).setAlpha(0.1).toHex8String()
      : tinycolor(outlineButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const outlineNeumorphicButtonVariable = `0rem -.0625rem 0rem 0rem ${outlineButtonShadowColor1} inset, 0rem 0rem 0rem .0625rem ${outlineButtonShadowColor2} inset, 0rem .03125rem 0rem .09375rem ${tinycolor(
      outlineButtonBackground,
    ).toHexString()} inset`;

    // Neumorphic secondary button
    const secondaryButtonBackground = getCssVariableValue('--secondary', lightModeContainer.current!);

    const secondaryButtonShadowColor1 = tinycolor(secondaryButtonBackground).isDark()
      ? tinycolor(outlineButtonBackground).lighten(29).toHexString()
      : tinycolor(outlineButtonBackground).darken(29).toHexString();

    const secondaryButtonShadowColor2 = tinycolor(secondaryButtonBackground).isDark()
      ? tinycolor(outlineButtonBackground).lighten(100).setAlpha(0.1).toHex8String()
      : tinycolor(outlineButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const secondaryNeumorphicButtonVariable = `0rem -.0625rem 0rem .0625rem ${secondaryButtonShadowColor1} inset, 0rem 0rem 0rem .0625rem ${secondaryButtonShadowColor2} inset, 0rem .03125rem 0rem .09375rem ${tinycolor(
      secondaryButtonBackground,
    ).toHexString()} inset`;

    // Neumorphic primary button
    const primaryButtonBackground = getCssVariableValue('--primary', lightModeContainer.current!);

    const primaryButtonShadowColor1 = tinycolor(primaryButtonBackground).isDark()
      ? tinycolor(primaryButtonBackground).darken(100).toHexString()
      : tinycolor(primaryButtonBackground).darken(29).toHexString();

    const primaryButtonShadowColor2 = tinycolor(primaryButtonBackground).isDark()
      ? tinycolor(primaryButtonBackground).darken(100).setAlpha(1).toHex8String()
      : tinycolor(primaryButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const primaryButtonShadowColor3 = tinycolor(primaryButtonBackground).isDark()
      ? tinycolor(primaryButtonBackground).lighten(30).setAlpha(1).toHex8String()
      : tinycolor(primaryButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const primaryNeumorphicButtonVariable = `0rem -.0625rem 0rem .0625rem ${primaryButtonShadowColor1} inset, 0rem 0rem 0rem .0625rem ${primaryButtonShadowColor2} inset, 0rem .03125rem 0rem .09375rem ${primaryButtonShadowColor3} inset`;

    // Neumorphic destructive button
    const destructiveButtonBackground = getCssVariableValue('--destructive', lightModeContainer.current!);

    const destructiveButtonShadowColor1 = tinycolor(destructiveButtonBackground).isDark()
      ? tinycolor(destructiveButtonBackground).darken(20).toHexString()
      : tinycolor(destructiveButtonBackground).darken(29).toHexString();

    const destructiveButtonShadowColor2 = tinycolor(destructiveButtonBackground).isDark()
      ? tinycolor(destructiveButtonBackground).darken(20).setAlpha(1).toHex8String()
      : tinycolor(destructiveButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const destructiveButtonShadowColor3 = tinycolor(destructiveButtonBackground).isDark()
      ? tinycolor(destructiveButtonBackground).lighten(20).setAlpha(1).toHex8String()
      : tinycolor(destructiveButtonBackground).darken(100).setAlpha(0.1).toHex8String();

    const destructiveNeumorphicButtonVariable = `0rem -.0625rem 0rem .0625rem ${destructiveButtonShadowColor1} inset, 0rem 0rem 0rem .0625rem ${destructiveButtonShadowColor2} inset, 0rem .03125rem 0rem .09375rem ${destructiveButtonShadowColor3} inset`;

    document.documentElement.style.setProperty('--neumorphic-outline-button', outlineNeumorphicButtonVariable);
    document.documentElement.style.setProperty('--neumorphic-secondary-button', secondaryNeumorphicButtonVariable);
    document.documentElement.style.setProperty('--neumorphic-primary-button', primaryNeumorphicButtonVariable);
    document.documentElement.style.setProperty('--neumorphic-destructive-button', destructiveNeumorphicButtonVariable);
  }, []);

  return (
    <div className="h-screen w-scree grid grid-cols-2">
      <div className="bg-background text-foreground grid place-items-center" ref={lightModeContainer}>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="default" isNeumorphic>
            Solid Button
          </Button>
          <Button variant="outline" isNeumorphic>
            Outline Button
          </Button>
          <Button variant="secondary" isNeumorphic>
            Secondary Button
          </Button>
          <Button variant="destructive" isNeumorphic>
            Destructive Button
          </Button>
        </div>
      </div>
      <div className="dark bg-background text-foreground grid place-items-center" ref={darkModeContainer}>
        <div className="grid grid-cols-2 gap-4">
          <Button>Solid Button</Button>
          <Button variant="outline" isNeumorphic>
            Outline Button
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
