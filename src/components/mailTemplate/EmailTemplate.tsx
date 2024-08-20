import * as React from 'react';



export const EmailTemplate = ({ verificationLink }: { verificationLink: string }) => (
    <div>
        <h1>Welcome, <a href={verificationLink} target='_blank'>{verificationLink}</a></h1>
    </div>
);
