
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Snippets() {
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


    const firstColumn = codeSnippets.filter((_, index) => index % 3 === 0);
    const secondColumn = codeSnippets.filter((_, index) => index % 3 === 1);
    const thirdColumn = codeSnippets.filter((_, index) => index % 3 === 2);

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
                <div className="relative w-full max-w-md">
                    <Input
                        placeholder="Search snippets..."
                        className="pr-10 text-black focus:bg-background border border-muted rounded-md"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <SearchIcon className="w-5 h-5 text-muted-foreground" />
                    </div>
                </div>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="grid gap-4 w-fit">
                    {firstColumn.map((code) => (
                        <Card className="shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 bg-card overflow-auto  ">
                            <CardContent className="p-6">
                                <pre className="bg-muted rounded-md p-4 overflow-auto">
                                    <code className="text-sm font-mono text-card-foreground">{code.code}</code>
                                </pre>
                            </CardContent>
                            <CardFooter className="bg-muted-foreground/10 px-6 py-3 rounded-b-md">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-primary px-3">{code.title}</div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <CopyIcon className="w-5 h-5" />
                                            <span className="sr-only">Copy</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <ShareIcon className="w-5 h-5" />
                                            <span className="sr-only">Share</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="grid gap-4 w-fit">
                    {secondColumn.map((code) => (
                        <Card className="shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 bg-card overflow-auto  ">
                            <CardContent className="p-6">
                                <pre className="bg-muted rounded-md p-4 overflow-auto">
                                    <code className="text-sm font-mono text-card-foreground">{code.code}</code>
                                </pre>
                            </CardContent>
                            <CardFooter className="bg-muted-foreground/10 px-6 py-3 rounded-b-md">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-primary px-3">{code.title}</div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <CopyIcon className="w-5 h-5" />
                                            <span className="sr-only">Copy</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <ShareIcon className="w-5 h-5" />
                                            <span className="sr-only">Share</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="grid gap-4 w-fit">
                    {thirdColumn.map((code) => (
                        <Card className="shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 bg-card overflow-auto  ">
                            <CardContent className="p-6">
                                <pre className="bg-muted rounded-md p-4 overflow-auto">
                                    <code className="text-sm font-mono text-card-foreground">{code.code}</code>
                                </pre>
                            </CardContent>
                            <CardFooter className="bg-muted-foreground/10 px-6 py-3 rounded-b-md">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-primary px-3">{code.title}</div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <CopyIcon className="w-5 h-5" />
                                            <span className="sr-only">Copy</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="bg-muted hover:bg-muted/80 rounded-md">
                                            <ShareIcon className="w-5 h-5" />
                                            <span className="sr-only">Share</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>;

        </div>
    )
}

function CopyIcon(props) {
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
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}


function FilterIcon(props) {
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


function ListOrderedIcon(props) {
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


function SearchIcon(props) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShareIcon(props) {
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}