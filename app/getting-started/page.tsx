import { CodeBlock } from "@/components/CodeBlock";

export default function GettingStarted() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold">Getting Started</h1>
      <p className="text-sm sm:text-base">
        To get started with this documentation starter, follow these steps:
      </p>
      <ol className="list-decimal list-inside text-sm sm:text-base">
        <li>Clone the repository</li>
        <li>Install dependencies</li>
        <li>Run the development server</li>
      </ol>
      <h2 className="text-xl sm:text-2xl font-bold">Installation</h2>
      <CodeBlock
        code={`git clone https://github.com/your-repo/docs-starter.git
cd docs-starter
npm install
npm run dev`}
        language="bash"
      />
    </>
  );
}
