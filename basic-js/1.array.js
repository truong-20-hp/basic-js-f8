//LÀM VIỆC VỚI MẢNG

/**
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */
var languages = ['javascript', 'PHP','Ruby',]

1.
// console.log(languages.toString())


// biến một mảng thành một chuỗi cách nhau bởi một dấu phẩy,
// k thể thay đổi được dấu phẩy


2.
// console.log(languages.join(' _ '))

//biến một mảng thành một chuỗi có thể chèn kí tự vào giữa
//các phần tử trong chuỗi

3.
// console.log(languages.pop())
// console.log(languages)

//chỉ xóa phần tử ở cuối mảng và trả về phần tử đó
//nếu không có phần tử ở cuối mảng trả về undefined

4.
// console.log(languages.push('java',      'dart'))
// console.log(languages)

//thêm 1 hay NHIỀU phần tử vào cuối mảng và trả về độ dài của mảng

5.
// console.log(languages.shift())
// console.log(languages)

//xóa phần tử ở đầu mảng và trả về phần tử đó
//không có phần tử nào thì trả về undefined

6.
// console.log(languages.unshift('c++' , 1234 ))
// console.log(languages.unshift('c++', function(){}))
// console.log(languages.unshift('hayyyy'))
// console.log(languages)


//thêm MỘT hoặc NHIỀU phần tử vào đầu mảng và trả về độ dài của mảng đó

7.

// console.log(languages.splice(1,1 , 'c++'))
// console.log(languages)

//thêm hoặc xóa MỘT hay NHIỀU phần tử trong mảng
/**
 * splice(x,y,z)
 * x: vị trí phần tử bắt đầu tính từ 0
 * y: số lượng phần tử được chọn
 * z: phần tử được thêm
 */

8.

var language2 =  [
    'python', 
    'ruby'
]

// console.log(languages.concat(language2))

//nối 2 mảng

9.
// console.log(languages.slice(1,2))
// console.log(languages)

//cắt lấy MỘT hoặc NHIỀU phần tử trong mảng (vẫn giữ nguyên 
// không xóa phần tử của mảng)
//slice(x,y)
//x: vị trí bắt đầu
//y: vị trí kết thúc
//cắt lấy phần tử cuối cùng sử dụng số -1



10.
var array = [
    '10 coi',
    '20 coi',
    '30 coi',
]

// console.log(array[4])
// lấy phần tử của một mảng