"use client";

import AuthForm from '@/components/forms/AuthForm'
import React from 'react'
import { SignInSchema } from '@/lib/validation';

const Signin = () => {
  return ( 
    <AuthForm 
      formType="SIGN_IN" 
      schema={SignInSchema} 
      defaultValues={{ email: "" , password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default Signin