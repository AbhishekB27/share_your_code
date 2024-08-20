import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,

    CardHeader,
} from "@/components/ui/card"
import ViewCodeDialog from '../viewCode/ViewCodeDialog'
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { TbCopy } from "react-icons/tb";
import { MdContentPaste } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface CodeProps {
    code: {
        title: string,
        code: string

    }
}
const CodeCard = ({ code }: CodeProps) => {
    const customStyle = {
        background: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: 'inherit',
        padding: '0.5rem 1rem',
        border: 'none',
        boxShadow: 'none',

    };
    return (
        <Card className=" bg-inherit text-white shadow-lg relative h-full w-full overflow-hidden  rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/50 to-slate-900/80 mx-auto max-w-3xl flex flex-col justify-start hover:shadow-2xl transition-shadow duration-300 ">
            <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
            <span className="absolute right-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0"></span>
            <CardHeader className=" mb-4 px-6 py-3 border-b border-slate-800">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium bg-indigo-500 px-3 py-1 rounded-md line-clamp-1">{code?.title}</div>
                    <div className="flex items-center gap-2">
                        <ViewCodeDialog code={code} />
                        <Button size="sm" className="bg-slate-800/30 hover:bg-slate-800/70 rounded-md">
                            <CopyIcon className="w-5 h-5" />
                            <span className="sr-only">Copy</span>
                        </Button>
                        <Button size="sm" className="bg-slate-800/30 hover:bg-slate-800/70 rounded-md">
                            <ShareIcon className="w-5 h-5" />
                            <span className="sr-only">Share</span>
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className=''>
                <SyntaxHighlighter language="jsx" style={dark} customStyle={customStyle}>
                    {/* <pre className=" rounded-md p-4 overflow-auto">
                        <code className="text-sm font-mono text-card-foreground">{code.code}</code>
                    </pre> */}
                    {code.code}
                    {/* {formattedCode} */}
                </SyntaxHighlighter>

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

