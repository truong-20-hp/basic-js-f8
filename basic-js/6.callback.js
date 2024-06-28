// CALLBACK/////////

// 1. là một hàm
// 2. được gọi trong một hàm khác với tư cách là đối số

// function myCallback( value) {
//     console.log(value)
// }

// function myFunction(param) {
//     // check xem đối số truyền vào có phải là một function không
//     if( typeof param === 'function') {
//         param('title : hello world' )
//     }
// }
// myFunction(myCallback)


function calc(a, b, cb) {
    return cb(a,b)
}
// console.log(calc(2,5,sum))


function sum(a,b){
    return a + b
}

// ******   tự tạo phương thức map2():

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]


// Array.prototype.find2 = function(callback) {
//     var arrayLength = this.length
//     var result = []
//     for ( var i = 0; i < arrayLength; i++) {
//        var course = callback(this[i])
//         result.push(course)
//     }
//     return result
// }


// var htmls = courses.find2(function(course) {
//     return `khoa hoc ${course}`
// }) 
// console.log(htmls)


// **** tự tạo phương thức filter:

var myInfo = [
    {
        name: 'Xuan Truong',
        age: 18,
        weight : '65kg'
    },
    {
        name: 'Heo Nho',
        age: 17,
        weight : '45kg'
    },
    {
        name: 'Duong Thanh',
        age: 18,
        weight : '55kg'
    },
    {
        name: 'Minh Tuan',
        age: 20,
        weight : '65kg'
    },
]
 

// dùng vòng for:
// Array.prototype.filter2 = function(callback) {
//     var result = []
//     for( var i = 0; i < this.length; i++) {

        // tại sao lại có if :
        // giải thích: vì câu lệnh callback(this[i]) sẽ trả về kq bolean
        // if giúp kiểm tra và quyết định thêm phần tử thỏa mãn điều kiện
        // vào biến kết quả
//        if(callback(this[i])) {
//            result.push(this[i])
//        }
//     }
//     return result
// }

 
// var result = myInfo.filter2(function(item){
//    return item.weight === '65kg' ;
// })
// console.log(result)


//dùng vòng for in:

// khởi tạo một method filter2
Array.prototype.filter2 = function(callback) {
    var output = []
    //lọc qua mảng cho trước
    for ( var i in this) {
        // đặt điều kiện nếu là thuộc tính trực tiếp của mảng thì gọi lại
        // phần tử mảng, index , mảng cũ
        if(this.hasOwnProperty(i)) {
         var result =  callback(this[i], i , this)
         // nếu hàm gọi lại thỏa mãn điều kiện đặt ra thì push phần tử
         // vào mảng output []
         if(result) {
            output.push(this[i])
         }
        }
    }
    return output
}

var kq = myInfo.filter2(function(info) {
   return parseFloat(info.weight) > 54
})
// console.log(kq)

// vd2:
 var numbers = [1,2,3,4,5,6]

 Array.prototype.filter2 = function(callback) {
    var output = []
    for ( var i in this) {
        if ( this.hasOwnProperty(i)) {
           var condition = callback(this[i],i , this)
           if ( condition) {
               output.push(this[i])
           }
        }
    }
    return output
 }

 var result = numbers.filter2(function(number,i, array) {
    return number % 2 ===0 &&  number > 2
            
        
 })
//  console.log(result)

// Tạo hàm some2 : trả về giá trị bolean true/ false


var array = [ 1,2,3,4,5,6]

// Array.prototype.some2 = function(callback) {
//     for ( var i in this) {
//         if (this.hasOwnProperty(i)) {
//             var cond = callback(this[i],i,this)
//             if(cond) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// or
Array.prototype.some2 = function(callback) {
    // gán biến :
    var output = false
    for ( var i in this) {
        if (this.hasOwnProperty(i)) {
            var cond = callback(this[i],i,this)
            if(cond) {
                // nếu thỏa mãn điều kiện thì trả về output = true sau đó 
                // break kết thúc vòng lặp
                // nếu không có break sẽ quay lại lặp đến hết
                output = true
                break;
            }
        }
    }
    return output
}

var kq = array.some2(function (number,index, array) {
    return number % 7 === 0
})
// console.log(kq)