class Book {
    title:string
    author: string
    constructor(title:string, author:string) {
        this.title = title
        this.author = author
    }
}

const deepWork = new Book('Deep Work', 'Cal Newport')
console.log(deepWork);
