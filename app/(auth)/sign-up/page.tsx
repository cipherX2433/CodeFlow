"use client";

import AuthForm from '@/components/forms/AuthForm'
import React from 'react'
import { SignUpSchema } from '@/lib/validation';

const SignUp = () => {
  return (
    <AuthForm 
      formType="SIGN_UP" 
      schema={SignUpSchema} 
      defaultValues={{ email: "" , password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp