import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Button onClick={() => navigate("/welcome")}>Click Here</Button>
    </div>
  );
}
//hhome