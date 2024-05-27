import { format } from 'prettier';
import React from 'react'
import { TbCopy } from "react-icons/tb";
import { MdContentPaste } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShareModal } from './ShareModal';

const CodeShare = async ({ code }: { code: string }) => {
    // Format the code using Prettier
    console.log(code)
    const formattedCode = await format(code, { semi: false, parser: "babel" });
    console.log(formattedCode)
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
        <div className='bg-slate-900 relative max-w-5xl w-full overflow-hidden min-h-[90vh] text-white text-center rounded-md'>
            <div className='bg-slate-800 min-h-10 p-1 flex justify-between items-center px-3 gap-3'>
                <div className='flex justify-start items-center gap-3'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-600'></div>
                    <div className='size-3 rounded-full bg-green-600'></div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <ShareModal />
                    <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type="button"><TbCopy /></button>
                    <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type="button"><MdContentPaste /></button>
                </div>
            </div>
            <textarea

                readOnly className='absolute focus:outline-none bg-black/30 w-full h-full resize-none right-0' name="" id=""></textarea>
            <SyntaxHighlighter language="jsx" style={dark} customStyle={customStyle}>

                {formattedCode}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeShare