import React, { FC } from "react";

import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess: FC<FormSuccessProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="p-3 bg-emerald-500/15 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
