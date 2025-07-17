import { useFormikContext } from "formik";
import React from "react";
import { useDebounceCallback } from "usehooks-ts";

export default function AutoSubmitFilter() {
  const { isValid, values, dirty, submitForm } = useFormikContext();

  const debounced = useDebounceCallback(submitForm, 500);

  React.useEffect(() => {
    if (isValid && dirty) {
      debounced();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // @ts-ignore
  }, [isValid, values, dirty, submitForm]);

  return null;
}
