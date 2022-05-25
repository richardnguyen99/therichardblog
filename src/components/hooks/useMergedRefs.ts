/**
 * A useMergedRefs hook to work with internal and external ref
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

type RefObj<T = any> = React.MutableRefObject<T> | React.LegacyRef<T>;

const useMergedRefs = <T = any>(refs: Array<RefObj<T>>) => {
  const targetRef = React.useRef();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export default useMergedRefs;
