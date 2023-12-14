import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { APP_COLORS_CYCLE, APP_GRADIENTS_CYCLE } from "../constants";

interface ColorCycleContextType {
  color: string;
  gradient: string;
  cycleColorsAndGradients: () => void;
}

const ColorCycleContext = createContext<ColorCycleContextType | undefined>(
  undefined
);

interface ColorCycleProviderProps {
  children: React.ReactNode;
}

export const ColorCycleProvider: React.FC<ColorCycleProviderProps> = ({
  children,
}) => {
  const colors = APP_COLORS_CYCLE;
  const gradients = APP_GRADIENTS_CYCLE; // Renamed to gradients
  const [colorIndex, setColorIndex] = useState(0);
  const [textGradientIndex, setTextGradientIndex] = useState(0);

  const cycleColorsAndGradients = useCallback(() => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setTextGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
  }, [colors.length, gradients.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleColorsAndGradients();
    }, 4000); // Cycle colors and gradients every 4 seconds

    return () => clearInterval(interval);
  }, [cycleColorsAndGradients]);

  return (
    <ColorCycleContext.Provider
      value={{
        color: colors[colorIndex],
        gradient: gradients[textGradientIndex],
        cycleColorsAndGradients,
      }}
    >
      {children}
    </ColorCycleContext.Provider>
  );
};

export const useCycleColors = (): ColorCycleContextType => {
  const context = useContext(ColorCycleContext);
  if (context === undefined) {
    throw new Error("useCycleColors must be used within a ColorCycleProvider");
  }
  return context;
};
