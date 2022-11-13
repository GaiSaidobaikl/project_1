/*class car {
    constructor(name, year,power){
        this.name = name
        this.year = year
        this.power = power
    }
    method_1(rul){
        this.rul = rul
    }
    method_2(size){
        this.size = size
    }
}
const car1 = new car('lada', 2002, 98)
const car2 = new car('Vesta', 2022,110)
const car3 = new car('Audi', 2010,209)

const rul1 = new car ('Rolex')
rul1.method_1(40)
//console.log(car1,'',car2,'',car3)
console.log(rul1.rul)
console.log(car.car1)*/
/*
class Animal {
    constructor(name){
        this.speed = 0
        this.name = name
    }
}
class Audi extends Animal{
    constructor(name,year){
        super(name)
        this.year = year
    }
}
const audi = new Audi('a-6', 2004)

console.log(audi)*/
/*
class Russia {
    constructor(model,year){
        this.model = model
        this.year = year
    }
    age(){
        return 2022 - this.year
    }
}
const car1 = new Russia('Vesta',2017)
const car2 = new Russia('Priora', 2015)
const car3 = new Russia('VAZ-2012', 2002)
console.log(car1.age())
console.log(car1)
console.log(car2)
console.log(car3)
// Создание прототипа
Russia.prototype.greet = function ()  {console.log(`Эта модель называется ${this.model}! и год выпуска равна ${this.year} года`)}

car1.greet()*/
/*
const account = {
    name: 'Zaxar',
    transaction: [200,324,444,500,140],
    get Transaction(){
        return this.transaction.pop()
    },
    set Transaction(trans){
        this.transaction.push(trans)
    }
}
account.transaction = 100
console.log(account.transaction);
console.log(account)*//*
const a=32
const b =23
let c = 0
const sum = (a,b,)=>{
    return   a + b
}
console.log(sum(a,b))
*//*
const carWidth = 200,
      carLenght = 400,
      carHeight = 190

const volume = (carHeight,carLenght,carWidth) =>{
    return (carHeight * carLenght * carWidth)/100000
}
console.log(volume(carHeight,carLenght,carWidth))*/
/*
Да или нет
const res = confirm('You are 18 y.e??')
console.log(res)*/
//Ответ от пользователя
//Вся информация от пользователя будет в ввиде строк
//+prompt  - перевод в число
/*const answer = +prompt('Напишите возраст','')
console.log(answer + 9 )*/
/*
const answers = []

answers[0] = prompt('Как вас зовут?','')
answers[1] = prompt('Как ваше фамилия?','')
answers[2] = prompt('Сколько вам лет','')

document.write(answers)
console.log(typeof(answers))*/
//
/* Интерполяция
const category = 'street'
console.log(`https://someurl.com/${category}/3`)
const user = 'Гаджи'
alert(`Привет, ${user}`)*/
/*
let incr = 10,
    descr = 10

incr++
console.log(incr--)
console.log(descr--)
console.log(descr)
console.log(incr)
*/
/*
const vars = []

vars[0] = prompt("Укажите ваш вес","")
vars[1] = prompt('Укажите какой ваш рост','')
vars[2] = vars[0] / ((vars[1]/100) * (vars[1]/100))
document.write(vars[0],' ваш вес. ')
document.write(vars[1],' ваш рост. ')
document.write('Ваш индекс массы тела равен - ',vars[2])
*//*
const films = {
    category: {
        mistik: ['ad', 'It`s '],
        comedy: ['typik','hustan'],
        roman: ['friens','Woman and Mother'],
        fantatic: ['Jeck','Punct wear']
    }
}
document.write(films.category.comedy)
*/
class Telephones {
    constructor(model,year){
        this.model = model,
        this.year = year
    }
    size(mm){
        this.mm = mm
    }
}
const xiomi = new Telephones('PocoX3-pro', 2021)
const xiomi_1 = new Telephones('Redmi Note 8pro', 2020)
const iPhone = new Telephones('Apple 14x',2022)
const width = new Telephones()
console.log(xiomi_1.model)
console.log(Telephones.mm)


