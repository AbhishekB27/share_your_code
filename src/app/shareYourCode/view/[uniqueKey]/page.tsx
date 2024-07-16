"use client";

import CodeShare from '@/components/codeShare/CodeShare';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import React, { useEffect, useState } from 'react';

interface PageProps {
    params: {
        uniqueKey: string;
    },
    searchParams: {
        isPrivate: string;
    }
}

interface DataType {
    code: string
}
const Page = ({ params, searchParams }: PageProps) => {
    const [data, setData] = useState<DataType>({ code: '' });
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await fetch(`http://localhost:3000/api/shareYourCode/${params.uniqueKey}?isPrivate=${searchParams.isPrivate}`, {
                    cache: 'no-store',
                    credentials: 'include'
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await res.json();
                console.log(data, "data")
                setData(data);

                if (!data?.code) {
                    router.push(`/shareYourCode/verifyCode?uniqueKey=${params.uniqueKey}`);
                }

            } catch (error) {
                console.error(error);
                toast.error('An error occurred while fetching data');
            }
        };

        fetchData();
    }, [params.uniqueKey, searchParams.isPrivate]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='grid place-items-center relative'>
            <CodeShare isCodeShareable={false} code={data?.code} />
        </div>
    );
};

export default Page;
