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
                <Button size="sm" className="bg-slate-800/30 hover:bg-slate-800/70 rounded-md">
                    <ViewIcon className="w-5 h-5" />
                    <span className="sr-only">Copy</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-5xl border-none p-0 bg-transparent overflow-auto">

                <div className=" w-full py-20 h-full relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute  pointer-events-none inset-0 flex items-center justify-center "></div>

                    <CodeShare code={code?.code} isCodeShareable={false} />
                </div>

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