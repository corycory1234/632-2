import type { BooksData } from "@/types/books.types"

export const MOCK_BOOKS: BooksData = {
  totalItems: 247,
  items: [
    {
      id: "b001",
      volumeInfo: {
        title: "The Art of Readable Code",
        authors: ["Dustin Boswell", "Trevor Foucher"],
        publishedDate: "2011",
        description:
          "Simple and practical techniques for writing better code. This book focuses on the craft of code writing — making your code easier to understand by improving variable names, function structure, and comments.",
      },
    },
    {
      id: "b002",
      volumeInfo: {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        authors: ["Robert C. Martin"],
        publishedDate: "2008",
        description:
          "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This book covers every aspect of writing clean, maintainable code.",
      },
    },
    {
      id: "b003",
      volumeInfo: {
        title: "The Pragmatic Programmer: Your Journey to Mastery",
        authors: ["David Thomas", "Andrew Hunt"],
        publishedDate: "2019",
        description:
          "One of those rare tech books you'll read, re-read, and read again over the years. Whether you're new to the field or an experienced practitioner, you'll come away with fresh insights each and every time.",
        imageLinks: {
          thumbnail:
            "https://books.google.com/books/content?id=LhOlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
      },
    },
    {
      id: "b004",
      volumeInfo: {
        title: "A Philosophy of Software Design",
        authors: ["John Ousterhout"],
        publishedDate: "2021",
        description:
          "This book addresses the fundamental problem in software design: managing complexity. It describes techniques for creating software systems so that they will remain manageable as they grow in size.",
      },
    },
    {
      id: "b005",
      volumeInfo: {
        title: "Refactoring: Improving the Design of Existing Code",
        authors: ["Martin Fowler"],
        publishedDate: "2018",
        description:
          "For more than twenty years, experienced programmers worldwide have relied on Refactoring to improve the design of existing code and to enhance software maintainability, as well as to make existing code easier to understand.",
        imageLinks: {
          thumbnail:
            "https://books.google.com/books/content?id=2H1_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
      },
    },
    {
      id: "b006",
      volumeInfo: {
        title: "You Don't Know JS: Scope & Closures",
        authors: ["Kyle Simpson"],
        publishedDate: "2014",
        description:
          "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This guide takes you inside scope and closures, two core concepts you need to know to write better code.",
      },
    },
    {
      id: "b007",
      volumeInfo: {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
        publishedDate: "1994",
        description:
          "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
      },
    },
    {
      id: "b008",
      volumeInfo: {
        title: "TypeScript Deep Dive",
        authors: ["Basarat Ali Syed"],
        publishedDate: "2019",
        description:
          "A deep dive into TypeScript covering all the ways it can be used effectively in modern JavaScript projects, including advanced types, generics, and design patterns for building scalable applications.",
      },
    },
  ],
}
