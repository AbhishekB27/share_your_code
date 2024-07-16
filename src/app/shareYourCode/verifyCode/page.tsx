import { PassCode } from '@/components/passCode/PassCode'
import { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PassCode />
            </Suspense>

        </div>
    )
}

export default page