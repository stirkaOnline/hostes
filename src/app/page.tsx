import { Card, CardTitle } from "../shared/ui/card";
import React from "react";
import SignUpForm from "./(auth)/auth/page";

export default async function Home() {

  return (
    <div>
      {/* <Card>
        <CardTitle>User</CardTitle>
      </Card> */}
      <SignUpForm />
    </div>
  );
}
