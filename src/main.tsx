import "./styles/index.css";

import { StrictMode } from "react";

import { TransportProvider } from "@connectrpc/connect-query";
import { createConnectTransport } from "@connectrpc/connect-web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import { ErrorDisplay } from "./components/error-display";
import { NotFound } from "./components/not-found";
import { PendingComponent } from "./components/pending-component";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";


const connectTransport = createConnectTransport({
  baseUrl: import.meta.env.VITE_API_URL || "http://localhost:8080",
  // We use useBinaryFormat false during development to make it easier to debug
  // We should enable it in production
  useBinaryFormat: true,
  // Interceptors apply to all calls running through this transport.
  // Could be useful for logging, authentication, etc.
  interceptors: [],
});

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: ErrorDisplay,
  defaultNotFoundComponent: NotFound,
  defaultPendingComponent: PendingComponent,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TransportProvider transport={connectTransport}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </TransportProvider>
    </StrictMode>,
  );
}
