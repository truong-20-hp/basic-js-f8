// các cách truy xuâts vào trong HTML để lấy ra các phần tử:

// 1 : getElementsByClassName   (trả về một HTML collection)
// 2 : getElementsByTagName     (trả về một HTML collection)
// 3 : getElementsById       ***(trả về một phần tử duy nhất)
// 4 : querySelector         ***(trả về một phần tử duy nhất)
// 5 : querySelectorAll         (trả về một Node List)

// 6 : HTML collection
// 7 : document.write




1. 
var getClass = document.getElementsByClassName('heading')
// console.log(getClass)
// trả về một HTML collection gồm danh sách các phần tử giống mảng
// console.log(getClass[0])
// console.log(getClass[1])
// muốn trả về phần tử nào thì nhập index của phầ tử ấy

2.
var getTag = document.getElementsByTagName('h1')
// console.log(getTag)
// tính chất giống className

3.
var getId = document.getElementById('header')
// console.log(getId)
// mỗi document chỉ có một địa chỉ ID duy nhất 
// nên sẽ trả về 1 kết quả duy nhất
// nếu có 2 ID sẽ trả về cái đầu tiên

4.
var getSelector = document.querySelector('.content')
// console.log(getSelector)
// sẽ trả về một phần tử duy nhất 

5.
var getSelectorAll = document.querySelectorAll('.content')
// console.log(getSelectorAll)
// sẽ trả về một Node List giống với mảng 
// có thể dùng vòng lặp để lặp qua từng phần tử của node list
for ( var i = 0; i < getSelectorAll.length; i++) {
    // console.log(getSelectorAll[i])
}

6. // HTML collection ( không được dùng phổ biến)
 var testForm = document.forms
// console.log(testForm)
for ( var i = 0 ; i < testForm.length ; i++) {
    // console.log(testForm[i])
}
// trả về các thẻ form dưới dạng HTML collection
// có thể dùng vòng lặp qua các phần tử trong HTML collection

var testAnchors = document.anchors
// console.log(testAnchors)
// trả về tất cả các thẻ a có attribute là name




////////////////////////////////////////////////////////////////////////////////////////////




// CÁCH THÊM MỘT ATTRIBUTE VÀO ELEMENT:

// b1 : lấy ra element muốn thêm
var getH1 = document.querySelector('h1')
// b2 : từ element vừa lấy được ta thêm attribute hợp lệ:
getH1.title = 'heading'
// thêm attribute tùy ý bằng phương thức :
getH1.setAttribute('date-1','hom nay nhieu may')
// setAttribute(ts1, ts2)
// tham số 1 : tên của attribute
// tham số 2 : nội dung của attribute
getH1.style = 'color: blue'

// cách lấy ra một attribute:
console.log(getH1.title) 
console.log(getH1.getAttribute('date-1'))



///////////////////////////////////////////////////////////////////////




// CÁCH LẤY VÀ THÊM TEXT VÀO ELEMENT :

// innerText
// textContent


// lấy ra element muốn thay đổi:
var getContent = document.getElementsByClassName('content')[1]
// lấy ra text của element
console.log(getContent.innerText) // trả về những gì hiện trên trình duyệt 
console.log(getContent.textContent)// trả về tất cả kể cả khoảng trắng trong HTML, kể cả nội dung
// trong thể tag

// thay đổi text của element
// console.log(getContent.innerText = 'test Text')
// console.log(getContent.textContent = 'test text 2')








///////////////////////////////////////////////////////////////////////////




// CÁCH THÊM MỘT ELEMENT VÀO 1 ELEMENT: 

// 1. innerHTML
// 2. outerHTML

var getElement = document.querySelector('.test-get-element')
//getElement.innerHTML = '<h1>tt Element</h1>' // sẽ ghi đè code trong HTML
// chỉ tác động lên thẻ con của nó
// có thể thêm Element, attribute, text
// console.log(getElement.innerHTML)


getElement.outerHTML = '<p>test outerHTML</p>'
// outerHTML tác động và ghi đè lên chính nó 


//////////////////////////////////////////////////////////////////////////////////////////////



// DOM STYLE ( DOM CSS )\

//. là một thuộc tính nằm trong element Node
//. có thể chọc vào DOM và thay đổi CSS của HTML
//. CSS dưới dạng inline

// cách 1: 
var getDomCss = document.querySelector('.test-DOM-CSS')
getDomCss.style.color = 'red'
// cách 2: 
Object.assign(getDomCss.style, {
    backgroundColor  : 'green',
    fontSize : '60px'
})
// method assign có 2 tham số :
// 1 : element cần truyền.style
// 2 : các thuộc tính CSS cần truyền cho element


// các thuộc tính của Object.style
// console.log(getDomCss.style)



////////////////////////////////////////////////////////////////////////




// CLASSLIST PROPERTY 


// các phương thức thường sử dụng: 

// add() : thêm 1 class vào trong element
// contains() : kiểm tra xem trong element có chứa class đó không
// remove() : xóa một class trong element
// toggle() : có class thì xóa , không có thì thêm

var getClassList = document.querySelector('.test-classList')
// console.log(getClassList.classList)

1.
getClassList.classList.add('blue')
getClassList.classList.add('background')

2.
console.log(getClassList.classList.contains('blue'))

3.
setTimeout(() => {
    getClassList.classList.remove('background')
},3000)
// settimeout sau 3s khối code sẽ chạy và xóa class background

// cú pháp : setTimeout(callback, delay).
// trong đó callback là một hàm sẽ được gọi
// sau khi hết thời gian delay (đơn vị thời gian là mili giây).


4.
setInterval(() => {
    getClassList.classList.toggle('blue')
}, 800);

// cú pháp : setInterval(callback, delay).
// trong đó callback là một hàm sẽ được gọi lặp lại 
// sau mỗi khoảng thời gian delay (đơn vị thời gian là mili giây).




//////////////////////////////////////////////////////////////////////




// ------------ DOM EVENT -------------- 



// bao gồm hành  vi của người dùng và trình duyệt : nhấp chuột, kéo thả , croll, 
// bắt đầu tải trang , đã tải trang ,......


// 1. Attribute event (thêm vào trực tiếp HTML)
// 2. Assign event using the element node ( gán vào DOM bằng javascript)

//vd:
var getH3 = document.querySelectorAll('.testHtmlEvent')
// getH3.onmouseover = function() {
//     console.log(Math.floor(Math.random() * 10))
// }
// console.log(getH3)
//vd : 
getH3.forEach(function(item) {
    item.onclick = function(e) {
        console.log(e.target)
    }
})

// e : là mouse event đại diện cho sự kiện xảy ra
// target : (mục tiêu) là phần tử mà đã được click trực tiếp vào
// getH3 : trả về một node list danh sách các phần tử .
// -sau đó ta dùng vòng lặp lặp qua các phần tử và thêm sự kiện onclick vào
// từng phần tử được lọc qua



///////////////////////////////////////////////////////////////



// DOM EVENT THƯỜNG DÙNG : 

// 1. onchange / oninput / select
// 2. onkeyup / onkeydown


// sử dụng oninput : thay đổi ngay lập tức khi người dùng nhập vào đó
var getInput = document.querySelector('.test-event-html')
getInput.oninput = function updateName(event) {
    var inputText = event.target.value
    // console.log(inputText)
}

// sử dụng onchange : thay đổi khi người dùng thay đổi value
// và không focús vào phần tử đó nữa
getInput.onchange = function(e) {
    // console.log(e.target.value)

}

var getcheckbox = document.querySelector('input[type="checkbox"')
getcheckbox.onchange = function(e) {
    console.log(e.target.checked) // trả về bolean
    console.log('bạn đã checkbox')
}

// onkeyup : 
getInput.onkeyup = function(e) {
    console.log(e.target.value)
    
}

// ứng dụng vào sử dụng bàn phím để điều khiển trang 
// mà không cần dùng chuột

document.onkeydown = function(e) {
    console.log(e.which) // vị trí của phím

    switch(e.which) {
        case 27 : 
            console.log('exit') // mô phỏng ấn vào ÉSC sẽ thoát trang
            break;  // nếu không có break sẽ chạy cả đoạn code bên dưới
        case 13 : 
            console.log('SEND MESAGE')//mô phỏng ấn vào enter sẽ gửi tin nhắn
    }
} 






//////////////////////////////////////////////////////////////////////////


// -- DOM EVENT

// 1. preventDefault : ngăn chặn hành vi mặc định
// 2. stopPropagation : ngăn chặn sự kiện nổi bọt

 1.
var geta = document.querySelectorAll('.test-prevent-default')
console.log(geta)

for ( var i = 0 ; i < geta.length ; i++) {
    geta[i].onclick = function (e) {
        // nếu href không bắt đầu bằng https://google.com.vn
        // thì ngăn chặn mặc định ( không chuyển trang)
        if(!e.target.href.startsWith('https://google.com.vn'))
            e.preventDefault()
    }
}

// string.startsWith('chuỗi con' , vị trí bắt đầu kiểm tra)
// để kiểm tra xem một chuỗi có bắt đâuf bằng một chuỗi con cụ thể hay không


var getUl = document.querySelector('.test-ul-preventdefault')
// bỏ đi hành vi mặc định của thể ul là nhấn chuột, không focus vào thẻ
// input thì display bằng none
// còn nhấn chuột ra ngoài thẻ ul thì vẫn mất focus và thẻ ul vẫn = none
getUl.onmousedown = function(e) {
    e.preventDefault()
}

getUl.onclick = function(e) {
    console.log(e.target.innerText)
}

2.

// hầu hết các sự kiện đều có thể nổi bọt đến hết thẻ cha
// hoặc sẽ dừng khi gặp trình xử lí sự kiện.

// Sự kiện nổi bọt : lắng nghe hành động (VD click)
// sau đó được lan ra các thẻ cha của nó. khi đến thẻ cha
// nào mà có trình xử lí sự kiện thì nó sẽ được thực thi sự kiện đó
// hoặc khi gặp trình xử lí sự kiện nổi bọt thì kết thúc
// sự kiện nổi bọt có thể lan ra đến hết document và ra cả window

var getParent = document.querySelector('.parent')
var getChild = document.querySelector('.child')

getParent.onclick = function(e) {
    console.log('click parent')
}
getChild.onclick = function(e) {
    console.log('click child')
}

// muốn dừng nổi bọt ở đâu thì ngăn chặn ở đấy: 
// ví dụ dùng ở element child :
getChild.onclick = function(e) {
    e.stopPropagation()
    console.log('click child')
}


/////////////////////////////////////////////////////



// --- EVENT LISTENER ------


// 1. xử lí nhiều việc khi 1 event xẩy ra
// 2. Lắng nghe / hủy bỏ lắng nghe
// 3. dễ dàng và thuận tiện khi xử lí nhiều việc

// khi sử dụng onclick thì muốn xóa một sự kiện ta có thể gán onclick = function trống

var getEventListener = document.querySelector('.test-event-listener')
getEventListener.addEventListener('click', function(e) {
    // console.log(e.target)
})


// vd: 
function viec1() {
    console.log(' SHOW viec 1')
}
function viec2() {
    console.log(' SHOW viec 2')
}

// gán nhiều việc cho 1 sự kiện trên một phần tử
getEventListener.addEventListener('click', viec1)
getEventListener.addEventListener('click', viec2)

// xóa sự kiện: 
// set thời gian sau 3s sẽ xóa việc 1
setTimeout(() => {
getEventListener.removeEventListener('click', viec1)
    
}, 3000);

// event listener có cú pháp rõ ràng hơn
// xử lí được các sự kiện phức tạp hơn