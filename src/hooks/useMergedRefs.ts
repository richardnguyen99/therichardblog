/**
 * A useMergedRefs hook to work with internal and external ref
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

type RefObj<T = any> = React.MutableRefObject<T> | React.LegacyRef<T>;

const useMergeRefs = <T = any>(refs: Array<RefObj<T>>): React.RefCallback<T> => {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
};

export default useMergeRefs;
