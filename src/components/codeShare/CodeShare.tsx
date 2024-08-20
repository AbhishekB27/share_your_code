"use client"
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import React, { useEffect, useState } from 'react'
import { TbCopy } from "react-icons/tb";
import { MdContentPaste } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShareModal } from './ShareModal';
import copyToClipboard from '@/lib/copyToClipboard';
import { toast } from 'sonner';

const CodeShare = ({ code, isCodeShareable }: { code: string, isCodeShareable: boolean }) => {
    // Format the code using Prettier
    const [codeContent, setCodeContent] = useState(code)
    useEffect(() => {
        if (codeContent != null && codeContent !== undefined && codeContent !== '') {
            handleFormatCode(code);
        }
    }, [code]);
    useEffect(() => {
        setCodeContent(code);
    }, [code]);

    const handleFormatCode = async (code: string) => {
        try {
            const formatted = await prettier.format(code, {
                parser: 'babel',
                plugins: [parserBabel],
            });
            setCodeContent(formatted);
        } catch (error) {
            console.error('Error formatting code:', error);
        }
    };
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
            className=' bg-inherit text-white shadow-lg relative min-h-[80vh]  max-w-5xl w-full overflow-hidden  rounded-2xl border-4 border-slate-800 bg-gradient-to-br from-slate-950/50 to-slate-900/80 mx-auto flex flex-col justify-start hover:shadow-2xl transition-shadow duration-300 '>
            <div className='relative bg-transparent border-b border-slate-800 min-h-10 p-1 flex justify-between items-center px-3 gap-3'>
                <div className='flex justify-start items-center gap-3'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-600'></div>
                    <div className='size-3 rounded-full bg-green-600'></div>
                </div>
                <div className='flex justify-center items-center gap-4 z-50'>
                    {isCodeShareable && <ShareModal codeContent={`${codeContent}`} />}
                    <button
                        onClick={async () => {
                            await copyToClipboard(codeContent)
                            toast('Copied', { position: 'top-center' })
                        }}
                        className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type='button' ><TbCopy /></button>
                    <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type="button"><MdContentPaste /></button>
                </div>

            </div>
            <div
                onPaste={(e) => isCodeShareable && setCodeContent(e.clipboardData.getData("Text"))}
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