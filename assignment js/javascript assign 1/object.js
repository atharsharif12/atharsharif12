const book  ={
    title:'book one',
    author:'john doe',
    year:'2014',
    name:'javascripts',
    language:'high label'
    ,
    details:function(){
        return `${this.title} is written by ${this.author} in ${this.year} and its name is
         ${this.name} and its is ${this.language} language`
    }
};
console.log(book);
console.log("values of object",Object.values(book));
console.log("keys value of object",Object.keys(book));
console.log("its return value:",book.details());