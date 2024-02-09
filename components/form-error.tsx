import React, { FC } from "react";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

const FormError: FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="p-3 bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
