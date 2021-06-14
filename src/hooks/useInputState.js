/** Hook for input state */

import { useState } from "react";

const useInputState = (defaultValue) => {
  const [inputValue, setValue] = useState(defaultValue);
  const handleChange = (e) => setValue(e.target.value);
  const resetValue = () => setValue("");

  return [inputValue, handleChange, resetValue];
};

export default useInputState;
