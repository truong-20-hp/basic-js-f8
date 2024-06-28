//LÀM VIỆC VỚI MẢNG/////////////

/**
 *  Array methods:
 *     1. forEach () : duyệt qua từng phần tử của mảng
 *     2. every ()  : kiểm tra tất cả các phần tử phải thỏa mãn điều kiện gì đó
 *     3. some () : chỉ cần  một phần tử thỏa mãn điều kiện
 *     4. find () : tìm kiếm 1 phần tử chứa từ khóa   
 *     5. filter () : tìm kiếm nhiều phần tử chứa từ khóa
 *     6. map () : sửa mảng -> mảng mới
 *     7. reduce () : tính một mảng trả về 1 giá trị duy nhất
 *      
 */

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 120
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 250

    },
    {
        id: 4,
        name: 'Ruby',
        coin: 300
    }
]

1.
courses.forEach(function(course,index) { //hàm truyền dưới dạng tham số => callback
  // tham số thứ nhất: duyệt qua các phần tử của mảng
  // tham số thứ 2    : vị trí của các phần tử 
    // console.log(index,course)
})
// giống với vòng lặp duyệt qua từng phần tử của mảng

2.
 var isFree = courses.every(function(course,index)  {
    return course.coin === 0
})
// console.log(isFree)
// kiểm tra tất cả các phần tử của mảng thỏa mãn điều kiện
// nếu sai ở phần tử nào dừng kiểm tra và trả về false luôn và ngay
3.
var isFree = courses.some(function(course,index)  {
    return course.coin === 0
})    
// console.log(isFree)
// chỉ cần một phần tử thỏa mãn điều kiện dừng và trả về true\
4.
var course = courses.find(function(course,index)  {
    return course.name === 'Ruby'
})   
// console.log(course)
// tìm kiếm 1 phần tử chứa từ khóa
// chỉ trả vè 1 phần tử đứng vị trí trước
5.
var listCourse = courses.filter(function(course, index)  {
    return course.name === 'Ruby'
})   
// console.log(listCourse)
// tìm các phần tử chứa từ khóa và trả về nhiều phần tử
// ứng dụng tìm kiếm tên hoặc số điện thoại

6. //map 
var newCourses = courses.map(function(course) {
    return {
        id : course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        textCoin: `${course.coin}k`,
        originArray: course
    }
})
// console.log(newCourses)
// sửa một mảng đã cho thành một mảng mới
// có thể điều chỉnh các thuộc tính trong mảng

7. // reduce
// trả về một giá trị duy nhất
//B2: đặt và viết hàm ra ngoài
function coinHandler(accumulator, curentValue, curentIndex, originArray) {
// ts 1: biến lưu trữ
// ts 2: giá trị hiện tại(phần tử đang duyệt trong mảng)
// ts 3: chỉ mục hiện  tại
// ts 4: mảng gốc mà phương thức reduce đang hoạt động
// lưu ý : TÊN tham số có thể đặt tự do

    //ví dụ trục quan:
    var total = accumulator + curentValue.coin// tổng của coin tích trữ
    // và coin của các phần tử được duyệt qua
    i++;
    // console.table({
    //     'lượt chạy ' : i,
    //     'biến lưu trữ ': accumulator, // tích trữ và lưu lại sau mỗi lần chạy
    //     'giá khóa học ': curentValue.coin, // giá hiện tại của phần tử được duyệt qua
    //     'tích trữ được' : total // đặt biến tổng 
    // })

    //cosole.log(curentValue) // lặp qua từng giá trị của mảng và trả về từng phần tử của mảng
                                
    // return total

}

//B1: viết lệnh dùng method Reduce
// var totalCoin = courses.reduce(coinHandler, 0)
// tham số 1: truyền vào một function
// tham số 2: giá trị khởi tạo

//B3: in ra kết quả tổng Coin
// console.log(totalCoin)


// VIẾT RÚT GỌN:

function getTotalCoin(accumulator, currentValue) {
    return accumulator + currentValue.coin
}
var totalCoin = courses.reduce(getTotalCoin, 0)
// console.log(totalCoin)

// OR

var totalCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin}, 0 )
// console.log(totalCoin)

//OR ( ES6)

var totalCoin = courses.reduce((a,b) => a + b.coin, 0
);
// console.log(totalCoin)


// / ví dụ : tính tổng các phần tử trong một mảng:
 var array = [ 1,2,3,4,5]

 var sum = array.reduce(function(acc, cur) {
    return acc + cur
 }, 0)
//  console.log(sum)

// ví dụ làm phẳng mảng - Mảng Sâu

var array = [1, [2,3], 4, 5, [6,7], 8]

var flatArray = array.reduce(function(acc,cur) {
    return acc.concat(cur)
},[])
//  console.log(flatArray)

function flatArray(array) {
   return array.reduce(function(acc,cur) {
        return acc.concat(cur)
    }, [])
}
// console.log(flatArray(array))


// TỰ TẠO MỘT METHOD REDUCE2

// tạo reduce2:
 Array.prototype.reduce2 = function(callback, result) {

    var i = 0
    if ( arguments.length < 2) {
        i = 1;
        result = this[0]
    }
    for (; i < this.length; i++) {
       var result = callback(result, this[i], i , this)
    }
    return result
 }

 
// method reduce2 sẽ chạy được chạy trong đoạn code này
// đoạn code này sẽ chạy theo phụ thuộc vào đoạn code tạo reduce2 ơử bên trên
var array = [1,2,3,4,5]
var result = array.reduce2(function(acc, cur) {
    return acc + cur
},10)
// console.log(result)

8. // method INCLUDES() trong Array  và String
// tìm kiếm phần tử trong array và string

var string = 'alo alo 1 2 3 4'
var result = string.includes('alo',4)
// console.log(result)

var array = [1,2,3,4,5]

var result = array.includes(2,1)
// console.log(result)

// phương thức includes() được truyền vào 2 tham số:
// ts 1: phần tử muốn tim kiếm
// ts2 : vị trí bắt đàu muốn tìm kiếm
// chỉ dùng được cho array và string