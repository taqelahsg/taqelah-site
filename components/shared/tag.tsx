import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
}

export function Tag({ children, variant = 'secondary', className }: TagProps) {
  return (
    <Badge variant={variant} className={cn('', className)}>
      {children}
    </Badge>
  )
}

interface TagListProps {
  tags: string[]
  limit?: number
  className?: string
}

export function TagList({ tags, limit, className }: TagListProps) {
  const displayTags = limit ? tags.slice(0, limit) : tags
  const remaining = limit && tags.length > limit ? tags.length - limit : 0

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {displayTags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      {remaining > 0 && <Tag>+{remaining}</Tag>}
    </div>
  )
}
