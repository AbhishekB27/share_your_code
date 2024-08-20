async function handleSearch(search: string) {
  // "use server"
  console.log(search, "search")
  let res = null;
  try {
    if (search.length > 0) {
      res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/shareYourCode?search=${search}`, {
        cache: 'no-store'
      })
    } else {
      res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/shareYourCode`, {
        cache: 'no-store'

      })
    }
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


}
import { Button } from "@/components/ui/button"
import CodeCard from "@/components/codeCard/CodeCard"
import Search from "@/components/Search/Search"

interface SnippetProp {
  searchParams: {
    search: string
  }
}

interface CodeData {
  title: string;
  code: string;
}

export default async function Snippets({ searchParams }: SnippetProp) {
  console.log(searchParams, "searchParams")


  const { data, status } = await handleSearch(searchParams.search || '')

  const firstColumn = data?.filter((_: any, index: number) => index % 3 === 0);
  const secondColumn = data.filter((_: any, index: number) => index % 3 === 1);
  const thirdColumn = data?.filter((_: any, index: number) => index % 3 === 2);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-slate-100 z-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
          Explore Our Code Snippets
        </h1>
        <p className=" text-lg sm:text-xl max-w-2xl text-center">
          Browse through our collection of visually stunning and highly functional code snippets.
        </p>
      </div>
      <div className="flex items-center justify-between mb-8">
        <Search />
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className=" bg-slate-100/10 rounded-md">
            <FilterIcon className="w-5 h-5" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="ghost" size="sm" className=" bg-slate-100/10 rounded-md">
            <ListOrderedIcon className="w-5 h-5" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="grid gap-4 w-fit h-fit">
          {firstColumn?.map((code: CodeData, idx: number) => (
            <CodeCard key={idx} code={code} />
          ))}
        </div>
        <div className="grid gap-4 w-fit h-fit">
          {secondColumn?.map((code: CodeData, idx: number) => (
            <CodeCard key={idx} code={code} />
          ))}
        </div>
        <div className="grid gap-4 w-fit h-fit">
          {thirdColumn?.map((code: CodeData, idx: number) => (
            <CodeCard key={idx} code={code} />
          ))}
        </div>
      </div>

    </div>
  )
}



function FilterIcon(props: { className: string }) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props: { className: string }) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


