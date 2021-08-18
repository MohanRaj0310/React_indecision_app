//extends and super class

class Person {
  constructor (name, age = 0){
    this.name = name
    this.age = age
    // console.log(this.name + 'im here')
    console.log(this)
  }
  birthYear (){
    console.log(2021 - this.age)
    console.log(this)//mohan
  }
  getGreeting (){
    return `welcome mr.${this.name}`
  }
}

const mohan = new Person('mohan', 27)
// mohan.birthYear()

const siva = new Person('siva', 21)
// siva.birthYear()

class Student extends Person{
  // constructor (major){
  //   super(name, age)
  //   console.log(major)
  // }
  constructor (name, age, major){
    super(name, age)
    this.major = major
    console.log(this)
    console.log(this.name + 'im here')
    let ded = "djeid"
    console.log(ded)
  }
  hasMajor (){
    console.log(!!this.major, !!undefined)
    console.log(this)
  }
  //Overridden the parent method
  // birthYear (){
  //   console.log(2030 - this.age)
  // }
  //how you can store the parent method
  getData (){
    let newData = super.birthYear
    // console.log(newData())//error******************************************
  }  
}

let ravi = new Student('ravi', 21, 'IT')
// ravi.birthYear()//2000
ravi.birthYear()// overridden 2009
ravi.hasMajor()
let viki = new Student('viki')
viki.hasMajor()
viki.getData()

class Travelor extends Person {
  constructor (name, age, homeLocation){
    super(name, age)
    this.location = homeLocation
  }
  travelorMsg (){
    let newMsg = super.getGreeting()
    console.log(newMsg + ' in '+ this.location)
  }
}

let me = new Travelor('masterMohan',21, 'Theni')
me.travelorMsg()

