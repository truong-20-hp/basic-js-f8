// VÒNG FOR///////////////////////////////////////////////////


1. // làm quen với vòng for:

// for ( var i =1; i <= 20; i++ ) {
//     console.log(i)
// }


// BÀI TẬP: hàm trả về một mảng gồm length phần tử 
// các giá trị trong mảng có giá trị từ min - max

// function getRand( min, max, length) {
//     var array = [];
//     for (var i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min))
//     }
   
//     console.log(array);
// }
// getRand(0, 3, 10)

// CHƯA HIỂUU ĐOẠN NÀY!!!!!! hiểu rồi

// vd youtube:
// var array = ['a','b','c','d']; //length=4;

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


// var array = ['a','b','c','d']; //length=4;

// for (var i = array.length -1  ; i >= 0 ; i--) {

//     console.log(array[i])
// }

2. // tính tổng các phần tử trong mảng:
var toTal = [3,5,7 ]; //khai báo và truyền giá trị cho mảng
var sum = 0;// khai báo tổng ban đầu = 0
for (var i = 0; i < toTal.length; i++) {
    sum = sum + toTal[i];// vàng lặp sẽ chạy qua từng phần tử của mảng và cộng lại với nhau

}
// console.log(sum)

3. //tính tổng của các giá trị trong một object trong mảng

var orders = [
    {
        name: 'jscript',
        price: 200
    },
    {
        name: 'PHP',
        price: 400
    },
    {
        name: 'C++',
        price: 250
    }
]
function truong() {
    var sumOrders = 0;
    for (var i = 0; i < orders.length; i++) {
        sumOrders += orders[i].price;
    
    }
    // console.log(sumOrders) 

}
truong();

4. //bài tập tìm số chia hết cho 3

var number = [];
for ( var i = 0; i <=100; i++) {
    if(i % 3 === 0 ) {
        number.push(i)
    }
}
// console.log(number)

// VÒNG FOR / IN ://///////////////////////////////////////////////
// lấy ra các key của 1 object
// lấy ra các index của mảng 
// lấy ra index là số của 1 chuỗi

1.
var nation = ['viet nam', 'trung quoc', 'nhat ban', 'han quoc']
for ( var key in nation) {
    // console.log(nation[key])
}
2.
// var myInfo = {
//     name: 'truong',
//     age: 24 ,
// }

// for (var key in myInfo) {
//     console.log()
// }
3.
// var language = 'truong la 123pro'
// for ( var key in language) {
//     // console.log(language[key])

// }
4. // cách nối mảng va chuỗi:

// var myInfo = {
//     myName: 'Truong',
//     myAge: 24,
  
// }
// var text = [];
// for (var key in myInfo) {
//     text.push(key + ' is ' + myInfo[key] ) 
//     console.log(text)
// }

// VÒNG FOR - OF///////////////////////////////////////
// sử dụng để lấy ra cac phần tử của mảng :
// lấy ra các kí tự của một chuỗi


// var language = [
//     'Javasript',
//     'PHP',
//     'Ruby'
//   ]

// for ( var value of language) {
//     console.log(value)
// }

2. //dùng cho object:
// cách lấy value của một object
var myInfo  = {
    name: 'truong',
    age: 24
}
// cách 1:
for ( var value of Object.values(myInfo)) {
    // console.log(value)
}
//cách 2:
for ( var value of Object.keys(myInfo)) {
    // console.log(myInfo[value])
}

// VÒNG LẶP WHILE////////////////////////////////////////////////
// giống vòng for
//  var i = 0;
//  while (i<10){// giá trị i=9 true 
//     console.log(i)
//     i++
//  }


 // break và continue///////////////////////////

//  for ( var i = 0; i < 10; i++) {
//     if(i>=7) {
//         break;// thoát ra
//     }
//     console.log(i)
//  }

//and:

// for ( var i = 1; i <= 10; i++) {
//     if( i % 2 > 0) {
//         continue; chia cho 2 nếu khác 0 thì tiếp tục vòng lặp và không in ra( chỉ lấy số lẻ)
//     }
//     console.log(i)
// }

// VÒNG LẶP LỒNG NHAU////////////////////////////////////////////////////

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for ( var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
//     for ( var j = 0; j < myArray[i].length; j++) {
//         console.log( myArray[i][j] )
//     }
// }

for ( var i = 100; i > 0; i -=5) {
    // console.log(i)
}