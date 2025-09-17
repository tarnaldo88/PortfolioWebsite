'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  baseUrl?: string;
}

export function MarkdownContent({ content, baseUrl }: MarkdownContentProps) {
  return (
    <div className="markdown-body max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img({ node, src, ...props }) {
            const resolved = typeof src === 'string' ? (baseUrl ? new URL(src, baseUrl).toString() : src) : undefined;
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={resolved} {...props} />;
          },
          a({ href, ...props }) {
            const hrefStr = typeof href === 'string' ? href : undefined;
            const resolved = hrefStr ? (baseUrl ? new URL(hrefStr, baseUrl).toString() : hrefStr) : undefined;
            return <a href={resolved} target="_blank" rel="noopener noreferrer" {...props} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
