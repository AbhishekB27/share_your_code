async function getSnippets() {
  const res = await fetch('http://localhost:3000/api/shareYourCode', {
    cache: 'no-store'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function handleSearch(search: string) {
  "use server"
  console.log(search, "search")
  let res = null;
  if (search.length > 0) {
    res = await fetch(`http://localhost:3000/api/shareYourCode?search=${search}`, {
      cache: 'no-store'
    })
  } else {
    res = await fetch(`http://localhost:3000/api/shareYourCode`, {
      cache: 'no-store'
    })
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
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

interface Placeholder {
  placeholder: string;
}
export default async function Snippets({ searchParams }: SnippetProp) {
  console.log(searchParams, "searchParams")
  const codeSnippets = [
    {
      title: "JavaScript",
      code: `const myFunction = (param) => {
        console.log('Hello, world!', param);
      };`,
    },
    {
      title: "React",
      code: `import React from 'react';
      
      const MyComponent = () => {
        return (
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Hello, React!</h2>
            <p className="text-gray-600">This is a React component.</p>
          </div>
        );
      };
      
      export default MyComponent;`,
    },
    {
      title: "Tailwind CSS",
      code: `@tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      @layer components {
        .btn {
          @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
        }
      }`,
    },
    {
      title: "JavaScript",
      code: `const myArray = [1, 2, 3, 4, 5];
      const doubledArray = myArray.map(num => num * 2);
      console.log(doubledArray); // [2, 4, 6, 8, 10]`,
    },
    {
      title: "React",
      code: `import { useState } from 'react';
      
      const MyForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Name:', name);
          console.log('Email:', email);
        };
      
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        );
      };
      
      export default MyForm;`,
    },
    {
      title: "JavaScript",
      code: `const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promise resolved!');
        }, 2000);
      });
      
      myPromise
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });`,
    },
    {
      title: "Python",
      code: `def greet(name):
          return f"Hello, {name}!"
      
      print(greet("World"))`,
    },
    {
      title: "HTML",
      code: `<!DOCTYPE html>
      <html>
      <head>
        <title>My Page</title>
      </head>
      <body>
        <h1>Welcome to My Page</h1>
        <p>This is a simple HTML example.</p>
      </body>
      </html>`,
    },
    {
      title: "CSS",
      code: `body {
        font-family: Arial, sans-serif;
      }
      
      h1 {
        color: blue;
      }
      
      p {
        font-size: 16px;
      }`,
    },
    {
      title: "Java",
      code: `public class HelloWorld {
        public static void main(String[] args) {
          System.out.println("Hello, World!");
        }
      }`,
    },
    {
      title: "C++",
      code: `#include <iostream>
      using namespace std;
      
      int main() {
          cout << "Hello, World!" << endl;
          return 0;
      }`,
    },
    {
      title: "Go",
      code: `package main
      
      import "fmt"
      
      func main() {
          fmt.Println("Hello, World!")
      }`,
    },
    {
      title: "Rust",
      code: `fn main() {
          println!("Hello, World!");
      }`,
    },

  ];

  const { data, status } = await handleSearch(searchParams.search || '')

  const firstColumn = data.filter((_: any, index: number) => index % 3 === 0);
  const secondColumn = data.filter((_: any, index: number) => index % 3 === 1);
  const thirdColumn = data.filter((_: any, index: number) => index % 3 === 2);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-slate-50">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
          Explore Our Code Snippets
        </h1>
        <p className=" text-lg sm:text-xl max-w-2xl text-center">
          Browse through our collection of visually stunning and highly functional code snippets.
        </p>
      </div>
      <div className="flex items-center justify-between mb-8">
        <Search placeholder="Search..." />
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
          {firstColumn.map((code: CodeData, idx: number) => (
            <CodeCard key={idx} code={code} />
          ))}
        </div>
        <div className="grid gap-4 w-fit h-fit">
          {secondColumn.map((code: CodeData, idx: number) => (
            <CodeCard key={idx} code={code} />
          ))}
        </div>
        <div className="grid gap-4 w-fit h-fit">
          {thirdColumn.map((code: CodeData, idx: number) => (
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


