// CÂU LỆNH RẼ NHÁNH IF-ELE

var day = [
    4,5,6,7,8,9
];

var date = Math.floor(Math.random() * 6)
// console.log(day[date])
var myDate = day[date]
// console.log(myDate)

// if(myDate === 4 ){
//     console.log('hôm nay la thứ 4')
// }
// else if(myDate === 5 ){
//     console.log('hôm nay là thứ 5')
// }else if(myDate === 6 ){
//     console.log('hôm nay là thứ 6')
// }else if(myDate === 7 ){
//     console.log('hôm nay là thứ 7')
// }else if(myDate === 8 ){
//     console.log('hôm nay là chủ nhật')
// }else{
//     console.log('nghi hahah')
// }

// câu lệnh rẽ nhánh xét từng đièu kiện
//nếu điều kiện nào đúng dừng tại điều kiện đó không xét điều kiện tiếp theo nữa


2. 
 //câu lẹnh rẽ nhánh SWITCH
 // sử dụng khi đã biết các điều kiện và lớn hơn 3 đièue kiện
 //bởi vì dài dòng khó nhìn hơn if elsse

// var daTe = [2,3,4,5,6];
// var today = Math.floor(Math.random() * 6);

// switch(daTe[today]){
//     case 2:
//         console.log('hom nay la thu 2')
//         break;
//     case 3:
//         console.log('hom nay la thu 3')
//         break;
//     case 4:
//         console.log('hom nay la thu 4')
//         break; 
//     case 5:
//         console.log('hom nay la thu 5')
//         break;
//     case 6:
//         console.log('hom nay la thu 6')
//         break;
//     default:
//         console.log('hom nay la duoc nghi')               
// }


3.
// toán tử 3 ngôi

// ví dụ dùng ìf- else

var course = {
    name: 'javascript',
    coin: 276,
}

// if ( course.coin > 0) {
//     console.log(`${course.coin} coin`)
// }else {
//     console.log('"mien phi"')
// }

// dùng toán tử 3 ngôi

var result = course.coin > 0 ? `${course.coin} coin` : 'mien phi';
// console.log(result)
// Ưu điểm dễ nhìn ngắn gọn.
// Nhược điểm chỉ dùng cho các trường hợp đơn giản