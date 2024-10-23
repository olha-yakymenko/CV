class Book{
    constructor(title, author, year){
        this.title=title,
        this.author=author,
        this.year=year
    }
    printDetails(){
        return console.log(`${this.title}, ${this.author}, ${this.year}`)
    }
    isRecent(){
        return new Date().getFullYear- this.year >10 ? false : true
    }
    isByAuthor(author){
        return author===this.author ? true : false
    }
}

const boo=new Book('title', 'author', 2024)
boo.printDetails()
console.log(boo.isRecent())
console.log(boo.isByAuthor('author'))


class Student{
    
    constructor(name, age, major){
        this.name=name,
        this.age=age,
        this.major=major,
        this.courses=[]
    }
    introduce(){
        return `${this.name} i ${this.age} i ${this.major}`
    }
    enroll(course){
        this.courses.push(course)
        return ("dodany")
    }
    displayCourses(){
        return console.log(...this.courses)
    }
    dropCourse(course){
        this.courses.pop(course)
    }
}

const st= new Student('imie', 78, 'inform')
console.log(st.introduce())
console.log(st.enroll('dhjjd'))
console.log(st.displayCourses())
st.dropCourse('dhjjd')
console.log(st.displayCourses())