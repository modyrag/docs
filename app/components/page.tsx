import { CodeBlock } from "@/components/CodeBlock";

export default function Components() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold">Components</h1>
      <p className="text-sm sm:text-base">
        This starter includes several custom components to help you build your
        documentation:
      </p>
      <h2 className="text-xl sm:text-2xl font-bold">CodeBlock</h2>
      <p className="text-sm sm:text-base">
        The CodeBlock component provides syntax highlighting and a copy button:
      </p>
      <CodeBlock
        code={`import { CodeBlock } from '@/components/CodeBlock'

export default function MyComponent() {
  return (
    <CodeBlock
      code={\`console.log('Hello, World!');\`}
      language="javascript"
    />
  )
}`}
        language="jsx"
      />
    </>
  );
}
