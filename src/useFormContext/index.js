import { useForm, FormProvider } from "react-hook-form";
import React from "react";

const ReactHookFormProvider = ({ children }) => {
  const methods = useForm({
    defaultValues: {
      name: "muharis",
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReactHookFormProvider;
