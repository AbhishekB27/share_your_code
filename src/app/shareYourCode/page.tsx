import CodeShare from '@/components/codeShare/CodeShare'
import React from 'react'

const page = () => {
    const isCodeShareable: boolean = true
    return (
        <div className='container mx-auto grid place-items-center'>
            <CodeShare isCodeShareable={isCodeShareable} code="function foo() {console.log('Hello World')};" />

        </div>
    )
}

export default page