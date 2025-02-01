'use client'

import { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code, language])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className="rounded-lg bg-gray-800 p-4 whitespace-pre-wrap break-words">
        <code ref={codeRef} className={cn(`language-${language} text-sm sm:text-base`, "block w-full")}>
          {code}
        </code>
      </pre>
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-300" />
        )}
      </Button>
    </div>
  )
}

