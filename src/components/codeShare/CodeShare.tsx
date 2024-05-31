"use client"
import { format } from 'prettier';
import React, { useState } from 'react'
import { TbCopy } from "react-icons/tb";
import { MdContentPaste } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShareModal } from './ShareModal';

const CodeShare = ({ code }: { code: string }) => {
    // Format the code using Prettier
    const [codeContent, setCodeContent] = useState('// Paste Your Code...')
    format(code, { semi: false, parser: "babel" }).then(code => {
        console.log(code, "code")
        setCodeContent(code)
    }).catch(err => console.error(err));
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
        <form
            className='bg-slate-900 relative max-w-5xl w-full overflow-hidden min-h-[80vh] text-white text-center rounded-md'>
            <div className='relative bg-slate-800 min-h-10 p-1 flex justify-between items-center px-3 gap-3'>
                <div className='flex justify-start items-center gap-3'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-600'></div>
                    <div className='size-3 rounded-full bg-green-600'></div>
                </div>
                <div className='flex justify-center items-center gap-4 z-50'>
                    <ShareModal codeContent={`${codeContent}`} />
                    <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' ><TbCopy /></button>
                    <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type="button"><MdContentPaste /></button>
                </div>

            </div>
            <div
                onPaste={(e) => setCodeContent(e.clipboardData.getData("Text"))}
                className='absolute focus:outline-none bg-white/10 w-full h-full resize-none right-0'
                id="" ></div>
            <SyntaxHighlighter language="jsx" style={dark} customStyle={customStyle}>
                {codeContent}
                {/* {formattedCode} */}
            </SyntaxHighlighter>
        </form>
    )
}

export default CodeShare