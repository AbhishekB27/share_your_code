import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import CodeShare from "../codeShare/CodeShare"

interface CodeProps {
    code: {
        title: string,
        code: string

    }
}

const ViewCodeDialog = ({ code }: CodeProps) => {

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                    <ViewIcon className="w-5 h-5" />
                    <span className="sr-only">Copy</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl min-h-dvh md:min-h-[90vh] overflow-auto">
                <DialogHeader>
                    <DialogTitle>{code?.title}</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <CodeShare code={code.code} isCodeShareable={false} />
            </DialogContent>
        </Dialog>

    )
}

export default ViewCodeDialog


function ViewIcon(props: { className: string }) {
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
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}