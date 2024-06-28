

// --------- JSON ------------

//1 . là một định dạng dữ liệu - chuỗi  ( không phải là một kiẻu dữ liệu) 
// 2. JavaScript Object Notation
// 3. JSON : thể hiện duưới dạng : Number , Boolean, Null, Array
//          Object,  String

// parse : chuyển từ JSON sanng Javascript tyle
// stringify    : chuyển từ Javascript tyle sang JSON

var json1 = '["Javascript", "PHP"]'
var json2= '{"name" : "Xuan Truong" , "age" : 24}'


var a = '112'
var b = 'null'
var c = '"đây là string"'

// Cu phap : 
// console.log(JSON.parse(a)) // trả về một số
// console.log(JSON.parse(b)) // trả về null
// console.log(JSON.parse(c)) // trả về một chuỗi
// console.log(JSON.parse(json1)) // trả về một Array
// console.log(JSON.parse(json2)) // trả về một object


// console.log(JSON.stringify(['javascript', 'ruby']))//trả về định dạng JSON
// console.log(JSON.stringify({name: 'truong', age : 24}))//trả về định dạng JSON

// sau này khi backend trả về định dạng JSON thì ta sẽ dùng Parse chuyển đổi
// về javascript và làm việc


// callback hell

// setTimeout(function() {
//     console.log('1')
//     setTimeout(function() {
//         console.log('2')
//         setTimeout(function() {
//             console.log('3')
//             setTimeout(function() {
//                 console.log('4')
//                 setTimeout(function() {
//                     console.log('5')
//                     setTimeout(function() {
//                         console.log('6')
                        
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)



///////////////////////////////////////////////////////////////////////



// ---- Promise --------

// định nghĩa:
// Promise sinh ra để xử lí các bất đồng bộ trong JS
// và khắc phục được tình trạng callback hell


// khởi tạo một promise
// có value là một function: có 2 callback thể hiện cho thành công và thất bại

var testPromise = new Promise (function(resolve, reject) {
    // thành công thì gọi đến phưong thức resolve
    resolve({
        name : 'xuan truong',
        age : 24
    })
    // thất bại thì gọi đén phương thức reject
    reject('có lỗi error')

    // resolve hoặc reject có thể truyền đối số là :
    // string, number, boolean, array, object
})


testPromise 
    // nhận giá trị truyền vào của đối số resolve
    .then(function (value) {
        // console.log(value)
    })
    // nhận giá trị truyền vào của đối số reject
    .catch(function(error) { 
        console.log(error)
    })
    // một trong 2 thằng trên được gọi thì finally được gọi
    .finally(function() {
        // console.log('done!')
    })

// ví dụ : 

var promise1 = new Promise ((resolve, reject) => {
    var randomNuber = Math.random()
    // console.log(randomNuber)
    setTimeout(() => {
        if ( randomNuber < 0.6) {
            resolve('very good')
        }else {
            reject('error')
        }
    },1000)
})
promise1
    .then((value) => {
        // console.log(value)
    })
    .catch((value) => {
        // console.log(value)
    })



    // giải quyết vấn đề callback hell bằng promise(chain- chuỗi)


// đầu tiên tạo một function sleep
// function sleep(ms) {
//     return new Promise((resolve, reject) => {
//         // set cho hàm 1s sau đó mới trả về resolve
//        setTimeout(() => {
//         resolve()
//        },ms)
//     })
// }
// // gọi hàm gán gán tham số sau 1s sẽ return promise
// sleep(1000)
//     .then(() => {
//         console.log(1)
//         return sleep(3000)
//     })
//     // sau 3s sẽ chạy phần này
//     .then(() => {
//         console.log(2)
//         return sleep(3000)
//     })
//     .then(() => {
//         console.log(3)
//         return sleep(3000)
//     })


/////////////////////////////////////////////////////////////////

// 1. promise.resolve
// 2. promise.reject
// 3. promise.all

// luôn luôn giải quyết thành công
// var promise1 = Promise.resolve()
// promise1
//     .then(() => {
//         console.log([1])
//     })


// // luôn luôn thất bại
// var promise2 = Promise.reject()
// promise2
//     .catch(() => {
//         console.log([2,3])
//     })







// var pro1 = new Promise ((resolve) => {
//     resolve([1])
// })
// var pro2 = new Promise ((resolve) => {
//     resolve([2, 3])
// })
// var pro3 = new Promise ((resolve) => {
//     resolve([4, 5])
// })
// // Promise.all
// var promiseAll = Promise.all([pro1,pro2,pro3]) // nhận vào là một mảng
//     .then((result) => {
//         console.log(result)// trả về 3 phần tử thành công của pro1,pro2,pro3
//         var result3 =result[0].concat(result[1])
//         console.log(result3.concat(result[2]))
//         // nối 3 phần tử thành 1 phần tử ( thành một mảng)
//     } )
//     .catch(() => {
//         console.log('nếu một thằng có lỗi sẽ in ra cái này')
//     })


var pro1 = new Promise((resolve) => {
    setTimeout(function() {
        resolve([1,2])
    }, 2000)
})
pro1
    .then((value) => {
        // console.log(value)// trả về kết quả sau 2s
    } )
var pro2 = new Promise((resolve) => {
    setTimeout(function() {
        resolve([3,4])
    }, 5000)
})
pro2
    .then((value) => {
        // console.log(value)// trả về kết quả sau 5s
    })

  // có thể chạy song song và nối 2 promise  
Promise.all([pro1,pro2])
    .then((result) => {
        // console.log(result) // trả về kết quả sau 5s
        // console.log(result[0].concat(result[1]))
    })



    //////////////////////////////////////////////////////////////

    //  promise example : 


     var users = [
        {
            id : 1,
            name : 'Kien Dam'
        },
        {
            id : 2,
            name : 'Son Dang'
        },
        {
            id : 3,
            name : 'Xuan Truong'
        }
     ]

     var comments = [
        {
            id : 1,
            user_id : 1,
            content : 'Anh Son chua ra video'
        },
        {
            id : 2,
            user_id : 2,
            content : 'Vua ra xong em ei'
        },
        {
            id : 3,
            user_id : 3,
            content : 'thanks anh SOn'
        }
        
     ]

// 1. lấy comments    
// 2. từ comments lấy user_id
// 3. từ user_id lấy ra user tương ứng

// fake API

// function getComments() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(comments)
//         },1000)
//     })
// }


// function getUsersByIds (userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id)
//         })
//         setTimeout(() => {
//             resolve(result)
//         }, 1000);
//     })

// }


// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id
//         })
//         return getUsersByIds(userIds) 
//             .then(function(users) {
//                 return {
//                     thisusers: users,
//                     thiscomments : comments
//                 }
//             })
//     }) 

//     .then(function(data) {

//         var getcommentBlock = document.getElementById('comment-block')
//         var html = '' 
//         data.thiscomments.forEach(function(comment) {
//             var userget = data.thisusers.find(function(user) {
//                 return user.id === comment.user_id
//             })
//              html += `<li>${userget.name} : ${comment.content}</li>`
//         })
       
//        getcommentBlock.innerHTML = html
//     })
//     .catch(function() {
//         console.log('sai roi')
//     })


// đặt hàm getCOmment trả về được giải quyết
// gọi hàm getComment(comments) lap và lấy user_id của nó
// đặt hàm getUsersByIds và lấy ra được user.id 
// sau đó gọi hàm getUsersByIds trả về object user và comment
// then hàm object trong đó chèn li vào Uln có sẵn


// function getComments(comments) {
//     return new Promise((resolve) => {
//         resolve(comments)
//     })
// }


// function getUsersById(userIds) {
//     return new Promise((resolve) => {
//        var result = users.filter((user) => {
//          return userIds.includes(user.id)//        })
//        resolve(result)
       
//     })
// }




// getComments(comments)
//     .then((comments) => {
//         var userIds = comments.map((comment) => {
//             return comment.user_id
//         })
//         return getUsersById(userIds) 
//             .then(function(users) {
//                 return {
//                     thisUsers: users,
//                     thisComments: comments
//                 } 
//             })
//     })
//    .then((data) => {
//        console.log(data)
//         var getCommentsBlock = document.getElementById('comment-block')
//         var html = ''
//         data.thisComments.forEach((comment) => {
//             var userGets = data.thisUsers.find((user) => {
//                 return user.id === comment.user_id
//             })
//             html += `<li>${userGets.name} : ${comment.content}</li>`
//         })
//         getCommentsBlock.innerHTML = html
//    })
//    .catch(() => {
//         console.log('error')
//    })



//////////////////////////////////////////////////////////////////

// ------ Fetch------------


// fetch() : được dùng để tạo yêu cầu và lấy dữ liệu từ các nguồn khác nhau 
// thông qua giao thức HTTP. là một API được sử dụng rộng rãi trong việc 
// thực hiện các yêu cầu mạng bất đồng bộ

// ví dụ : truy cập trang jsonplacehoder lấy url

var postUrl = 'https://jsonplaceholder.typicode.com/users'
fetch(postUrl) // trả về một Promise
// sau khi được giải quyết thành công sẽ trả về 1 response
// đối tượng response là đại diện cho phản hồi từ máy chủ

// có các thuộc tính và phương thức đi kèm như:
// response.status : trả về trạng thái
// response.text() : 
// response.json() : trả về promise chứa dữ liệu JSON phản hồi 
    //  .then((response) => {
    //     return response.json()
    //  })
    //  .then((data) => {
    //     console.log(data)
    //     var postGet = data.map((post) => { 
    //         return `<li>
    //             ${post.name}
    //         </li>`
    //     })
    //     var postGets = postGet.join(' ')
    //     console.log(postGets)

    //     document.getElementById('postUsers').innerHTML = postGets
    //  })
    //  .catch(() => {
    //     alert('error !!!!!')
    //  })







////////////////////////////////////////////////////////////////////////





// -------------- json server--------------


// cài node thành công sẽ kèm npm
// đầu tiên tạo một foder : json_server
// rồi add vào workspace
// mở new terminal / json-server
// ( có thể click chuột phải vào forder và chọn open in integrated terminal )
// b1 :  khởi tạo npm init => enter... 
//        ( sau đó sẽ trả về một package.jon trong thư mục)
// b2 : truyền vào terminal : npm i json-server( json-server@0) phien ban cu
//          (sẽ trả về một package-look.json)

// b3: khởi tạo 1 file json : db.json và truyền dữ liệu vào đó

// b4 : vào package.json truyền vào 1 key trong script:
//      "start" : "json-server --watch db.json"

// b5 : truyền vào terminal : npm start 
// sau đó copy http và dán lên trình duyệt
// từ đó ta có 1 API(url) fake để lấy dữu liệu 







// var courseApi = 'http://localhost:3000/course'
 
// fetch(courseApi)
//      .then((response) => {
//         return response.json()
//      })
//      .then((course) => {
//         console.log(course)
//      })


    //  function getCourses(callback) { 
    //     fetch(coursesApi) 
    //         .then((response)=> {
    //             return response.json()
    //         })
    //         .then(function() {
    //             ///
    //         })
        
    //  }