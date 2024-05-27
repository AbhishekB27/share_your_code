import CodeShare from '@/components/codeShare/CodeShare'
import React from 'react'

const page = () => {
    return (
        <div className='container mx-auto grid place-items-center'>
            <CodeShare code="function foo() {console.log('Hello World')};" />

        </div>
    )
}

export default page