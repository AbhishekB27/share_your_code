import { format } from 'prettier';
import React from 'react'
import { TbCopy } from "react-icons/tb";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        <div className='bg-slate-900 max-w-5xl w-full overflow-hidden min-h-[90vh] text-white text-center rounded-md'>
            <div className='bg-slate-800 h-10 flex justify-between items-center px-3 gap-3'>
                <div className='flex justify-start items-center gap-3'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-600'></div>
                    <div className='size-3 rounded-full bg-green-600'></div>
                </div>
                <button className='active:scale-95 transition-all' type="button"><TbCopy /></button>
            </div>
            <SyntaxHighlighter language="jsx" style={dark} customStyle={customStyle}>

                {formattedCode}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeShare