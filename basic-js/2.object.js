// LÀM VIỆC VỚI ĐỐI TƯỢNG - OBJECT

var myPhone = 'phone';
var myInfor = {
    name:'Truong giao dau',
    'my-age': 24,
    address: 'Hai Phong',
    [myPhone]: '01289254563',
    getName: function(){
        return this.name;
    }
 
    
};


// console.log(myInfor)
1.
//tạo một key mới ngoài object:
// myInfor.email = 'vuxuantruong@gmail.com'
// //hoặc
// myInfor['email'] = 'vuxuantruong2000@gmail.com'//ưu tiên code viết sau


2.
//lấy key value trong một object:
// console.log(myInfor.name)
// //hoặc:
// var outKey = myInfor['my-age']
// console.log(outKey)

// note: nếu không có key trả về undefined

var myAddress = 'address'
//console.log(myInfor[myAddress])// gọi key bằng cách gọi tên biến

3.
//thêm key value bằng một biến:
 //var myPhone = 'phone'; //  phải viết lên trước object

 4.
 //xóa một key value :
//  delete myInfor.name;
//  console.log(myInfor)

5. 
//tạo một function trong một object:
// console.log(myInfor.getName())
// đã tạo ở trên
6.
//cách gọi:
// function --> Phương thức / method
//orther --> Thuộc tính / property


//II. object constructor - thiết kế đối tượng

// function person(firstName, lastName, age, weigth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.weight = weigth
//     this.name = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

//obj constructor - đây được gọi là bản thiết kế giống như đặt biến trong CSS 
// có thể dùng được với nhiều đối tượng

var boy = new person('Dai', 'Ca', 24, '65kg')// khởi tạo đối tượng
// console.log(boy)

var girl = new person('Heo', 'Nho', 24, '48kg')// khởi tạo đối tượng
// console.log(girl)
//các đối tượng dùng bản thiết kế
1.
// console.log(boy.constructor)
// kiểm tra xem đối tượng được lấy ra từ bản thiết kế nào

2.
girl.said = 'suot ngay di lua nguoi khac'
//thêm thuộc tính cho đối tượng
// chỉ thêm cho một đối tượng nhất định

3. 
// console.log(boy.name())
// gọi thuộc tính của đối tượng

// III. OBJECT PROTOTYPE

//ADD thêm một thuộc tính hoặC phương thức bên ngoài hàm tạo(bản thiết kế)
//mọi đối tượng có thể sử dụng

Person.prototype.teacher = 'Son Dang'
// console.log(boy.teacher)

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName} `
}

// console.log(boy.getFullName())
// console.log(girl.getFullName())


// IV. OBJECT DATE

// var date = new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)// giá trị trả về từ 0 - 11
// console.log(date.getDate())



// V.. MATH OBJECT

//không cần khởi tạo, nhập trực tiếp Math.

// các thuộc tính thường được sử dụng:

// 1-math.PI
// 2-Math.round()
// 3-Math-abs()
// 4-Math-ceil()
// 5-Math-Floor()
// 6-Math-random()
// 7-Math-min()
// 8-Math-max()

 1.
//   console.log(Math.PI)
  //trả về số PI

2.
// console.log(Math.round(2.3))
//làm tròn số gần nhất

3.
// console.log(Math.abs(-2))
//trả về giá trị tuyệt đối

4.
// console.log(Math.ceil(3.4))
//chỉ làm tròn trên

5.
// console.log(Math.floor(3.7))
//chỉ làm tròn dưới

6.
// console.log(Math.random()) 
// trẢ về một số ngẫu nhiên từ 0-1

// console.log(Math.floor(Math.random()* 10))
//kết hợp với các phương thức để ứng dụng ( trả về một số ngãu nhiên từ 0-9)

var random = Math.floor(Math.random() * 5)
var bonus = [
    '100k',
    '200k',
    '50k',
    '150k',
    '500k',
]

// console.log(bonus[random])
//ứng dụng mở hộp quà nhận thưởng ngẫu nhiên

var random = Math.floor(Math.random() * 100)
if (random <30) {
    // console.log('chuc mung ban nhan duoc o to TOYOTA')
}else {
    // console.log('chuc ban may man lan sau')
}
//ứng dụng vào quay thưởng game

7.
// console.log(Math.max(10,30,4,6,70))
// console.log(Math.min(10,30,4,6,70))

// trả về giá trị min max