let id = document.querySelector('#putid');
let pw = document.querySelector('#putpw');
let but = document.querySelector('#button');

but.addEventListener('click',function(e){
  if(id.value===''|pw.value===''){
    alert('[사용자 아이디] 와 [비밀번호] 필수 항목입니다.')
    e.preventDefault();
  }
});


but.addEventListener('click', function(){
  if(!(id.value.length===10)&&!(id.value.length===0)){
    alert('입력하신 아이디가 일치하지 않습니다.');
    id.value="";
    pw.value="";

  }
});

pw.addEventListener('keydown',function(){
  if(event.keyCode==13){
    but.click();
  }
});

but.addEventListener('click',function(){
  if(id.value.length===10 && pw.value.length>0){
    window.open('https://open.yonsei.ac.kr/');
  }
})
