import { CodeBlock } from "@/components/CodeBlock";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold">
        Welcome to the Documentation Starter
      </h1>
      <p className="text-sm sm:text-base">
        This is a starter template for creating documentation sites with
        Next.js. It includes:
      </p>
      <ul className="list-disc list-inside text-sm sm:text-base">
        <li>Responsive sidebar navigation</li>
        <li>Syntax highlighting</li>
        <li>Code blocks with copy functionality</li>
        <li>Multiple pages for organization</li>
      </ul>
      <h2 className="text-xl sm:text-2xl font-bold">Example Code Block</h2>
      <CodeBlock
        code={`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`}
        language="javascript"
      />
    </>
  );
}
