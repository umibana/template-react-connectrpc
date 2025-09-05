import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

// We import useQuery from @connectrpc/connect-query
// This is a wrapper around the useQuery hook from @tanstack/react-query but handles ConnectRPC logic
import { useQuery } from "@connectrpc/connect-query";
// We import the greet service from the generated file
// useQuery will automatically handle the ConnectRPC logic for us
import { greet } from "@protos/greet/v1/greet-GreetService_connectquery";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/demo")({
  component: TanStackDemo,
});

function TanStackDemo() {
  // useState to handle our input 
  const [nameInput, setNameInput] = useState("");
  // We use useQuery to send our request (nameInput) to the greet Method from GreetService
  // enabled is set to false and we use handleSend to manually trigger the request
  const {data:response, refetch:handleSend, status,error, isLoading} = useQuery(greet,{name:nameInput}, {
    enabled: false
  });

  return (
    <div className="flex h-fit flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="mb-8 text-4xl font-extrabold text-blue-400">
        gRPC Demo  
      </h1>
      <p className="mb-4 text-lg text-gray-300">
        This page demonstrates the ConnectRPC and TanStack Query integration.
      </p>
      <div className="mb-8">
        <input 
          type="text" 
          className="rounded bg-gray-800 px-4 py-2 text-white" 
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name"
        />
        <Button 
          className="ml-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => {
            console.log("Button clicked, nameInput:", nameInput);
            if (nameInput.trim()) {
              handleSend();
            } else {
              console.log("Name input is empty");
            }
          }}
          disabled={!nameInput.trim()}
        >
          Send
        </Button>
        {response && (
          // We will show what we got from the request here.
          // Since the .protos are compiled, we know what will get returned.
          <p className="mt-4 text-green-400">{response.greeting}</p>
        )}
        <p className="mt-4 text-gray-300">Current status: {status}</p>
        {status === "error" && (
          <p className="mt-4 text-red-400">{error?.message}</p>
        )}
        {status === "pending" && (
          <p className="mt-4 text-yellow-400">...pending</p>
        )}
        {isLoading && (
          <p className="mt-4 text-yellow-400">Loading...</p>
        )}
      </div>
      <div className="mb-8">
        <Link
          to="/"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
   
    </div>
  );
}
