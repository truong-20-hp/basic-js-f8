
//------- ECMAScript 6----------

1.

// 1. var & let & const :

// Scope : phạm vi hoạt động

{
    const khoahoc1 = 'javascript' 
    {
        var khoahoc = 'PHP'
        // console.log(khoahoc1) 

    }
    // console.log(khoahoc) 
    
}
// const & let không thể truy cập bên ngoài block
// var có thể truy cập bên ngoài block và ưu tiên var được viết sau cùng

// Hosting :  trình thông dịch hỗ trợ đưa biến lên đầu

a = 1;

var a
// console.log(a) // good

// var hỗ trợ gán biến sau đó mới đặt biến
// const và let thì không

// Assignment : gán lại giá trị cho biến

// var b = 20
// console.log(b) // good

// const f = 3
// f = 2
// console.log(f) // NOT GOOD

// var & let có thể gán lại giá trị cho biến lần 2
// const không thể gán lại cho biến lần 2

/// note : - code thuần sử dụng var
//         - sử dụng thư viện Babel : costn & let



/// -----multi - line string
 var newLine = `line 1
 line 2
 line 3
 `
 
// console.log(newLine) 



2.
// --------------- arrow function ------------


 var course = function(a,b) {
    return a + b
 }
//  console.log(course(2,3))
 
 //
var courses = (a,b) => a + b //  bỏ dấu ngoặc, sau mũi tên được return 
//  console.log(courses(2,4))

 // arrow function không có context và contructor 

 3.
 // -------------- classes-------

 // là phiên bản mới của contructor function
 // giúp code viết gọn gàng hơn và dễ đọc hơn
  
//  const Coursee= function (name,price) {
//     this.name = name
//     this.price = price
//  }

// sử dụng từ khóa class
// class Coursee {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     getCourses() {

//     }
//     start() {

//     }
// }

// const JsCourse = new Coursee('Javascript', '200k')
// console.log(JsCourse)
// const PhpCourse = new Coursee('PHP' , '300k')
// console.log(PhpCourse)


// var Name = function(lname, mname, fname) {
//     this.lastname = lname
//     this.midname = mname
//     this.firstname = fname

//     this.getName =  function(){
//         return this.firstname
//     }
//     this.getFullName = function() {
//         return `${this.lastname} ${this.midname} ${this.firstname}`
//     }
// }

// var Name1 = new Name ('Vu', 'Xuan' , 'Truong')

// console.log(Name1.getName())
// console.log(Name1.getFullName())

// su dung class

// class Infor {
//     constructor(lastName, firstName) {
//         this.lastName = lastName
//         this.firstName = firstName
//     }
//     getName() {
//        console.log('hello I am truong')
//     }
// }
// var Infor1 = new Infor('vu' ,'truong')
// console.log(Infor1)

// console.log(console)

4.

// ----------------- Default parameter values------------
// giá trị mặc định của tham số
//  function logger(log) {
//     if(typeof log === 'undefined') {
//         log = 'gia tri mac dinh'
//     }
//     console.log(log)
//  }
//  logger()

// // sử dụ ES6 : 
// function logger(log = 'giá trị mạcc định') {
//     console.log(log)
// }
// logger()

// function logger(log = 'giá trị mặc định' ,type = 'log') {
//     console[type](log)
// }
// logger('đây là log' , 'warn')


5.
//---------------enhanced object literalas--------------


// định nghĩa cho object nâng cao : 
// 1. định nghĩa key : value
// 2. định nghĩa method
// 3. định nghĩa key dưới dạng biến

var name = 'javascript'
var price = 1000
// var course = {
//     name : name,
//     price : price,
//     getName : function() {
//         return [name, price]
//        } 
// }


// 1: key : value --khi dùng ES6 : 
var course = {
    name,
    price
}
// console.log(course)

// 2. method -- khi dùng ES6 : 
var course = {
    getName() {
        return [
            name,
            price
        ]
    }
}
// console.log(course.getName())

// 3. đặt key dưới dạng biến -- sử dụng ES6: 
var newName = 'name'
var newPrice = 'price'
var course = {
    [newName] : 'Ruby',
    [newPrice] : 1000
}
// console.log(course)



// --------------- destructuring------------
// phân rã array va object
// truy cập dễ dàng vào các phần tử của mảng hoặc đối tượng để lấy ra
// hoặc tạo mảng mới chứa các phần tử muốn lấy

var listCourse = ['javascript' , 'PHP' , 'Ruby' ] 
//**** :  đối với mảng các biến tương ứng với vị trí index của các phần tử trong mảng

var [a,b,c] = listCourse
// console.log(a)
// console.log(b)
// console.log(c)

// để loại bỏ các phần tử và lấy ra các phần tử còn lại 
// sử dụng ...rest : 
var [a, ...rest] = listCourse
// console.log(rest)
// nếu mảng có nhiều phần tử có thể dụng slice() để cắt thành các mảng nhỏ
var number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
var [a, , c , ...newNumber] = number.slice(0,10)
// console.log(newNumber)
// ...rest trả về một mảng mới

// **** đối với Object : 

var infor = {
    name: 'Xuân Trường',
    age: 24,
    height: '170cm',
    coursed: {
        name : 'javascript',
        price: 1200
    }
}
 var {name,age, ...rest} = infor
//  console.log(name)
//  console.log(rest)
 // ...rest : trả về một object mới

 // object con lồng object to
 var {name: nameBig , coursed: {name: nameSmall}, description = 'this desc'} = infor
//  console.log(nameBig, nameSmall,description)
 // có thể khai báo một default description


function logger(a,b,...param) {
    // console.log(param)
}
logger(1,2,3,4,5,6,7,8,9)
// function sẽ trả về một mảng
// toán tử ...param sử dụng trong function là một array


// có thể sử dụng destructuring trong function
function logger2 ({name, age, ... rest} ) {
    // console.log(name)
    // console.log(rest)
}
logger2({
    name: 'truong_20',
    age : 24,
    weight : '64kg',
    des : 'description content'
})





// ------------- spread--------------

// cu phap : ...

// sử dụng spread để giải các array hoăc object thành các phần tử riêng lẻ
// để kết hợp một mảng hoăc object tránh việc lặp lại code

// TH1 : kết họp 2 mảng :
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array1, ...array2]
// console.log(array3)

//TH2 : kết hợp 2 object : 

const object1 = {
    name : 'truong'
}
const object2 = {
    age : 24,
    course: {
        name : 'javascript',
        price : 1000
    }
}
const object3 = {
    ...object1,
    ...object2
}

// console.log(object3)
// console.log(object3.course.name)


// note : 
// toán tủ so sánh === không thể so sánh 2 array hoặc 2 object
// phải đưa về kiểu dữ liệu nguyên thủy dùng JSON.stringfy


// so sánh 2 array : 
var array5 = [1]
var array4 = [1]
// console.log(array4 === array5) // false
// console.log(JSON.stringify(array4) === JSON.stringify(array5) ) // true


// so sánh 2 object : 
var object4 = {
    name: 'truong'
}
var object5 = {
    ...object4
}
// console.log(object5)
// console.log(JSON.stringify(object4) === JSON.stringify(object5)) // true




// ----------Tagged template literals---------------------


// function hightlight([first, ...strings], ...values) {
//     // console.log(first)
//     // console.log(strings)
//     // console.log(values)

//     return values.reduce(function(acc,cur) {
//         return `${acc}<span style="color: red">${cur}</span>${strings.shift()}`
//     },first)
    
// }

// var brand = 'f8'
// var course = 'javascript'
// var html = hightlight`hoc lap trinh ${course} tai ${brand} !`
// console.log(html)

// var getBlock = document.querySelector('.test-tagged')
// getBlock.innerHTML = html

// function soke ([first, ...strings ], ...values) {
//     // console.log(first)
//     // console.log(strings)
//     // console.log(values)
//     return values.reduce(function(acc, cur) {
//         return [ ...acc,cur,strings.shift()]
//     },first).join('')
    
// }
// var myName = 'Xuan Truong'
// var myAge = 24

// var html = soke`I am ${myName} and ${myAge} years old`
// console.log(html)
// var getBlock = document.getElementById('test2')
// getBlock.innerHTML = html


// -------------------modules-----------------------------------



// modules chia nhỏ các mã javascript thành các file nhỏ 
// để xử lý một chức năng riêng.
// giúp việc quản lí code dễ dàng hơn

// sử dụng :  imports để nhận dữ liệu
//        và  exports để xuất dữ liệu

// note :  mỗi một module chỉ có một dèault duy nhất
// export default để xuất 1 đối tượng hoặc một giá trị duy nhất
// export {} để xuất một số thành phần trong module và
// phải viết đúng tên của thành phần đó

import {obInfor} from './module-data.js'
import {myWeight} from './module.js'

function myInfor() {
    return `i am ${obInfor.name}, ${obInfor.age} years old
and ${myWeight} and ${obInfor.height}`
}
// console.log(myInfor())


// ----------------------optional chaining ------------------------



var myInfor1 = {
    name : {
        name1: {
            name2:  'Xuan Truong'
        }
    },
    age : 24,
    courses : [
        'Javascript', ' PHP', 'Ruby'
    ]
}
if(myInfor1?.name?.name1?.name2?.name3) {
    console.log(myInfor1)
}

// Sử dụng ?. cho phép truy cập vào các thuộc tính của một đối tựợng mà 
// không cần kiểm tra xem đói tượng đó có tồn tại hay khong.
// Điều này tránh được lỗi "TypeError" khi cố gắng truy cập vào
// các thuộc tính không có của đối tượng


var testClass = document.querySelectorAll('div')
testClass.forEach((e,i) => {
    // console.log([e])
})


{
    const aaa = 10
    {
        const aaa = 5
        console.log(aaa)
    }
    console.log(aaa)
}