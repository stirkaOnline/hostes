"use client";

import { Button } from "@/shared/ui/button";
import React from "react";

function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <Button className="w-full bg-blue-800 hover:bg-blue-800/80" type="submit">
      {children}
    </Button>
  );
}

export default SubmitButton;
