import { useState } from "react";

interface UsePerroHook {
  count: number;
  isActive: boolean;
  increment: () => void;
  toggleActive: () => void;
}

interface UsePerroProps {
  initialCount?: number;
  initialIsActive?: boolean;
}

const usePerro: (props?: UsePerroProps) => UsePerroHook = ({
  initialCount = 0,
  initialIsActive = false,
}: UsePerroProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(initialIsActive);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return {
    count,
    isActive,
    increment,
    toggleActive,
  };
};

export default usePerro;
