import React from "react";
import CardWrapper from "@/components/auth/card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Dont have an account?"
      showSocial
      backButtonHref="/auth/register"
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
