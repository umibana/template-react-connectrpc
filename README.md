# React 19 + TypeScript + ConnectRPC Template


## Key Features
- **TypeScript** - Type-safe development 
- **TailwindCSS** - Utility-first CSS 
- **TanStack Router** - Type-safe routing with code splitting
- **ConnectRPC** - Web RPC with Protocol Buffers
- **Zustand** - Global state management


### Getting Started

#### Installing dependencies
Two options here either use github's `Use this template` button or do it by cloning the code

```bash
# Clone the repository
git clone https://github.com/umibana/template-react-connectrpc my-app

# Navigate to project directory
cd my-app

# Install dependencies
npm install

# Start development server
npm dev
```

#### Setting up the environment
1. The .env.example should be renamed to .env and change the values according to the endpoint of your backend server.
2. We need to generate the files according to your protocol buffer file definitions.
  - We use buf generate to build typescript files from the protocol buffers
  - In this case, we have the protos in another folder (Backend folder)
  - ```buf generate``` will follow the config detailed in **buf.gen.yaml**
  ```js
  bunx buf generate connect-go-test/greet/v1/greet.proto  
  ```
  - After this command is completed, we will get files written to the generated/greet folder
  - We will import the file that ends with connectquery.ts to handle useQuery
  - For types, we will import the *_pb.ts files

### Available Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| \`npm dev\`        | Start development server   |
| \`npm build\`      | Build for production       |
| \`npm preview\`    | Preview production build   |

### Project Structure

```
.
├── eslint.config.js
├── index.html (Entrypoint)
├── package.json
├── public
│   ├── React-icon.svg
│   ├── tailwind.png
│   ├── tanstack.webp
│   └── vite.svg
├── README.md
├── src
│   ├── components
│   ├── main.tsx
│   ├── generated (Typescript auto-generated files)
│   ├── routes
│   ├── styles (imports Tailwind)
│   └── lib (Tailwind utils)
├── tailwind.config.ts
├── buf.gen.yaml (Configuration for buf command)
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Tools and Libraries for React Development

We use the following libraries to make DX better

### State Management

[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction): A minimal, unopinionated state management library cwith a simple API and hooks.

### UI/UX Libraries

[Tailwind](https://tailwindcss.com/): CSS library for easier css in React components.

[shadcn/ui](https://ui.shadcn.com): A modern library that combines design tokens and utility classes for rapid UI development.

### Requests and Data transfer
[ConnectRPC](https://connectrpc.com/docs/web/getting-started/): RPC compatible with gRPC,Protocol Buffers and JSON, can auto generate code.
[Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview): Requests state management made easier, compatible with ConnectRPC.
---

<div align="center">


[⬆ Back to top](#react-19--typescript--vite-template)

</div>
