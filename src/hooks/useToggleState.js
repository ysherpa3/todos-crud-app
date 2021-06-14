/** Hook for toggle state */

import { useState } from "react";

const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);
  const toggle = () => setState(!state);

  return [state, toggle];
};

export default useToggleState;
