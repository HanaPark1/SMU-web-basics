function zipCodeBtn() {
    //다음주소 api 호출
    new daum.Postcode({
        oncomplete: function(data) {
            document.querySelector("#postZip").value = data.zonecode;
            document.querySelector("#addr1").value = data.jibunAddress;
            document.querySelector("#addr2").focus();
        }
    }).open();
}

// 비번 확인
function pwConfirm(){
    let pw  = document.querySelector("#pw").value;
    let pw2  = document.querySelector("#pw2").value;
    if(pw == pw2) {
        document.querySelector("#pwCheck").style.color = "red";
        document.querySelector("#pwCheck").innerText = "비밀번호가 일치합니다.";
    }else {
        document.querySelector("#pwCheck").style.color = "black";
        document.querySelector("#pwCheck").innerText = "비밀번호를 다시 한번 입력하세요. ";
    }
    
}

function pwChange() {
    document.querySelector("#pwCheck").innerText = "비밀번호가 일치하지 않습니다";
    // document.querySelector("#pwCheck").innerHTML ="<p>비밀번호가 일치하지 않습니다</p>"
}