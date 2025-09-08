import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">This is the welcome page!</h1>
      <Button variant="outline" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
}
