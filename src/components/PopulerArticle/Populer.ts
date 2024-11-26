export class Populer {
    id: string | undefined;
    name: string ="";
    author: string ="";
    title: string ="";
    description: string ="";
    url: string ="";
    urlToImage:string ="";
    publishedAt:string ="";
    content: string ="";
 
    get isNew(): boolean {
       return this.id === undefined
    }
 
    constructor(initializer?: any) {
       if(!initializer) return;
       if(initializer.id) this.id = initializer.id;
       if(initializer.name) this.name = initializer.name;
       if(initializer.author) this.author = initializer.author;
       if(initializer.title) this.title = initializer.title;
       if(initializer.description) this.description = initializer.description;
       if(initializer.url) this.url = initializer.url;
       if(initializer.urlImage) this.urlToImage = initializer.urlToImage;
       if(initializer.publishedAt) this.publishedAt = initializer.publishedAt;
       if(initializer.content) this.content = initializer.content;
    }
 }