import { highlightCode } from '@/lib/shiki';
import { CopyButton } from './copy-button';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  lang: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export async function CodeBlock({
  code,
  lang,
  filename,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const html = await highlightCode(code.trim(), lang);

  return (
    <div className={cn('relative group rounded-lg border overflow-hidden', className)}>
      {filename && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 text-sm font-mono border-b">
          <span className="text-muted-foreground">{filename}</span>
          <CopyButton text={code.trim()} />
        </div>
      )}
      {!filename && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <CopyButton text={code.trim()} />
        </div>
      )}
      <div
        className={cn(
          'overflow-x-auto [&>pre]:p-4 [&>pre]:m-0 text-sm',
          showLineNumbers && '[&>pre]:pl-12'
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
