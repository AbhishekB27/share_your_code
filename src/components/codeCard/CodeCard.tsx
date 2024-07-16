import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,

    CardHeader,
} from "@/components/ui/card"
import ViewCodeDialog from '../viewCode/ViewCodeDialog'
interface CodeProps {
    code: {
        title: string,
        code: string

    }
}
const CodeCard = ({ code }: CodeProps) => {
    return (
        <Card className="shadow-lg flex flex-col justify-start hover:shadow-2xl transition-shadow duration-300 bg-card overflow-auto  ">
            <CardHeader className="bg-muted-foreground/10 mb-4 px-6 py-3 rounded-b-md">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary px-3 line-clamp-1">{code.title}</div>
                    <div className="flex items-center gap-2">
                        <ViewCodeDialog code={code} />
                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                            <CopyIcon className="w-5 h-5" />
                            <span className="sr-only">Copy</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                            <ShareIcon className="w-5 h-5" />
                            <span className="sr-only">Share</span>
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className=''>
                <pre className="bg-muted rounded-md p-4 overflow-auto">
                    <code className="text-sm font-mono text-card-foreground">{code.code}</code>
                </pre>
            </CardContent>

        </Card>
    )
}

export default CodeCard

function CopyIcon(props: { className: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}





function ShareIcon(props: { className: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}

