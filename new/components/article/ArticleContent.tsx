import * as React from 'react';

interface ArticleContentProps {
    content: string;
}

export default function ArticleContent(props: ArticleContentProps) {
    return <section dangerouslySetInnerHTML={{ __html: props.content }}></section>;
}