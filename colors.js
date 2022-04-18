// STEP 3. 객체 생성
var Body = {
  setColor : function(color){
    // JS
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    // Jquery
    $('body').css('backgroundColor',color);
  }
}

var Links = {
  setColor: function (color) {
      // JS문법
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while (i < alist.length) {
      //     alist[i].style.color = color;
      //     i = i + 1;
      // }
      // Jqery
      $('a').css('color',color);
  }
}

// STEP2. 함수로 설정
// a 태그의 텍스트 색 설정
// function setColor(color) {
//   var alist = document.querySelectorAll('a');
//   var i = 0;
//   while (i < alist.length) {
//       alist[i].style.color = color;
//       console.log(alist[i]);
//       i = i + 1;
//   }
// }

// body의 색 설정
// function setBodyColor(b_color,t_color){
//   document.querySelector('body').style.backgroundColor = b_color; 
//   document.querySelector('body').style.color = t_color; 
// }

// 버튼 클릭시 동작
function nightDayHandler(self) {
  if (self.value === 'night') {
      // setBodyColor('black','white');
      // setColor('powderblue');
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue');
      self.value = 'day'
  } else {
      // setBodyColor('white','black');
      // setColor('blue');  
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('blue');
      self.value = 'night'
  }
}