# React + TypeScript + ConnectRPC Template


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

#### Setting up backend for testing
This template includes a sample backend written in Go, located in the folder go-connect-template.
To get it up and running, first we need to install the dependecies.
```sh
cd go-connect-template
go mod tidy
```
Then compile the protos for it
```sh 
buf generate
```
Finally, then run it using the go executable
```sh
go run cmd/server/main.go
```
This should start your backend server on the 8080 port

### Development 


### Routes

Tanstack Router provides an easy way of routing using files using the following function. Please check ```hello.tsx``` and ```demo.tsx``` for an example.
```js
export const Route = createFileRoute('/hello')({
  component: TestPage,
})
```

Tanstack Router also provides default routes for whenever something is loading or a page had an error. you can find these in the components folder, in the following files: ```error-display.tsx```, ```not-found.tsx``` and ```pending-component.tsx```

### Sending Request and receiving responses.
For fetching data we use ConnectRPC and Tanstack Query for a better developer experience.
Before we start, we need to import the generated file (that ends with connectquery.ts).
Once we have that file, we can call that method using the following function, where greet is the method, and the rest the parameters it needs.
```js
  const {data,status,error,isLoading,refetch} = useQuery(greet,{name:nameInput}
```

### Installing Components
If you want to install Tailwind compatible pre-made components you can use shadCN to install from the command line using the following command.
```
npx shadcn@latest add button
```
You can take a look at [shadcn](https://ui.shadcn.com/docs/components) for a list of all available components.




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
│       │── ui (ShadCN components)
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

