"use client"

import {useFormStatus} from "react-dom";
import React from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full bg-amber-200 p-2" aria-disabled={pending}>
      Odeslat
    </button>
  )
}