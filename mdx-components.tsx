import type { MDXComponents } from 'mdx/types'
import { cn } from './lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, className, ...props }) => (
      <h1 className={cn('text-4xl font-bold tracking-tight mb-4', className)} {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, className, ...props }) => (
      <h2 className={cn('text-3xl font-bold tracking-tight mt-8 mb-4', className)} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, className, ...props }) => (
      <h3 className={cn('text-2xl font-semibold tracking-tight mt-6 mb-3', className)} {...props}>
        {children}
      </h3>
    ),
    p: ({ children, className, ...props }) => (
      <p className={cn('leading-7 mb-4', className)} {...props}>
        {children}
      </p>
    ),
    ul: ({ children, className, ...props }) => (
      <ul className={cn('list-disc list-inside mb-4 space-y-2', className)} {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, className, ...props }) => (
      <ol className={cn('list-decimal list-inside mb-4 space-y-2', className)} {...props}>
        {children}
      </ol>
    ),
    li: ({ children, className, ...props }) => (
      <li className={cn('leading-7', className)} {...props}>
        {children}
      </li>
    ),
    a: ({ children, className, ...props }) => (
      <a
        className={cn('text-primary underline underline-offset-4 hover:text-primary/80', className)}
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, className, ...props }) => (
      <blockquote
        className={cn('border-l-4 border-primary pl-4 italic my-4 text-muted-foreground', className)}
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => (
      <code
        className={cn('bg-muted px-1.5 py-0.5 rounded text-sm font-mono', className)}
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, className, ...props }) => (
      <pre
        className={cn('bg-muted p-4 rounded-lg overflow-x-auto mb-4', className)}
        {...props}
      >
        {children}
      </pre>
    ),
    ...components,
  }
}

export function Callout({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'danger' }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    danger: 'bg-red-50 border-red-200 text-red-900',
  }

  return (
    <div className={cn('p-4 rounded-lg border-l-4 mb-4', styles[type])}>
      {children}
    </div>
  )
}

export function VideoEmbed({ url, title }: { url: string; title?: string }) {
  return (
    <div className="aspect-video mb-4">
      <iframe
        src={url}
        title={title || 'Video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </div>
  )
}

export function CodeBlock({ children, language }: { children: React.ReactNode; language?: string }) {
  return (
    <div className="mb-4">
      {language && (
        <div className="bg-muted px-4 py-2 rounded-t-lg text-sm text-muted-foreground font-mono">
          {language}
        </div>
      )}
      <pre className={cn('bg-muted p-4 overflow-x-auto', language ? 'rounded-b-lg' : 'rounded-lg')}>
        <code className="font-mono text-sm">{children}</code>
      </pre>
    </div>
  )
}
