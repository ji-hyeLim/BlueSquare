window.onload = function() {
    // ======= 1. 이메일 유효성 검사
    let userId = document.querySelector('#user-id');
    let userIdValide = document.querySelector('.user-id-valid');

    userId.addEventListener('change', (e) => {
        inputEmail(e.target);
    }, false);
    
    function inputEmail(txt) {
        if(validEmailCheck(txt) === false) {
            // alert('올바른 이메일 주소를 입력해주세요');
            userId.classList.remove('valid');
            userId.classList.add('novalid');
            userIdValide.style.fontSize = '14px';
            userIdValide.style.color = 'red';
            userIdValide.innerHTML = '! 올바른 이메일 주소를 입력해주세요.';
            txt.value = '';
            txt.focus();
            return false;
        } else {
            userId.classList.remove('novalid');
            userId.classList.add('valid');
            userIdValide.style.fontSize = '14px';
            userIdValide.style.color = 'green';
            userIdValide.innerHTML = '유효한 이메일입니다.';
        }
    }
    
    function validEmailCheck(txt) {
        let pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return (txt.value.match(pattern) !== null);
    }
    // 이메일 유효성 검사 끝 =======

    // ======= 2. 비밀번호 유효성 검사
    let userPw = document.querySelector('#user-pw');
    let userPwValide = document.querySelector('.user-pw-valid');

    let korCheck = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
    let engCheck = /[a-zA-Z]/;
    let numCheck = /[0-9]/;
    let speCheck = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/;

    userPw.addEventListener('change', (e) => {
        inputPw(e.target);
    }, false);

    function inputPw(txt) {
        if(validPwCheck(txt) === false) {
            userPw.classList.remove('valid');
            userPw.classList.add('novalid');
            userPwValide.style.fontSize = '14px';
            userPwValide.style.color = 'red';
            userPwValide.innerHTML = '! 영문, 숫자, 특수문자 조합 8자리 이상 입력해주세요.';
            txt.value = '';
            txt.focus();
            return false;
        } else {
            userPw.classList.remove('novalid');
            userPw.classList.add('valid');
            userPwValide.style.fontSize = '14px';
            userPwValide.style.color = 'green';
            userPwValide.innerHTML = '유효한 비밀번호입니다.';
        }
    }

    function validPwCheck() {
        if(userPw.value.length < 8) {
            return false;
        } else if(userPw.value.search(/\s/) != -1) {
            return false;
        } else if(!engCheck.test(userPw.value) || !numCheck.test(userPw.value) || !speCheck.test(userPw.value) || korCheck.test(userPw.value)) {
            return false;
        } else {
            return true;
        }
    }
    // 비밀번호 유효성 검사 끝 =======

    // ======= 2-2. 비밀번호 보이기/감추기 기능
    let pwEye = document.querySelector('.fa-eye');
    
    pwEye.addEventListener('click', function() {
        userPw.classList.toggle('active');
        if(userPw.classList.contains('active')) {
            this.setAttribute('class', 'fa fa-eye-slash fa-lg')
            userPw.setAttribute('type', 'text');
        } else {
            this.setAttribute('class', 'fa fa-eye fa-lg')
            userPw.setAttribute('type', 'password');
        }
    })
    // 비밀번호 보이기/감추기 기능 끝 =======

    // ======= 3. 비밀번호 재확인
    let userPwCheck = document.querySelector('#user-pw-check');
    let userPwCheckValide = document.querySelector('.user-pw-check-valid');

    userPwCheck.addEventListener('change', (e) => {
        inputPwRe(e.target);
    }, false);

    function inputPwRe(txt) {
        if(validPwCheckRe(txt) === false) {
            userPwCheck.classList.remove('valid');
            userPwCheck.classList.add('novalid');
            userPwCheckValide.style.fontSize = '14px';
            userPwCheckValide.style.color = 'red';
            userPwCheckValide.innerHTML = '! 비밀번호가 일치하지 않습니다.';
            txt.value = '';
            txt.focus();
            return false;
        } else {
            userPwCheck.classList.remove('novalid');
            userPwCheck.classList.add('valid');
            userPwCheckValide.style.fontSize = '14px';
            userPwCheckValide.style.color = 'green';
            userPwCheckValide.innerHTML = '비밀번호가 일치합니다.';
        }
    }

    function validPwCheckRe() {
        if(userPw.value !== userPwCheck.value) {
            return false;
        } else {
            return true;
        }
    }
    // 비밀번호 재확인 끝 =======

    // ======= 4. 휴대전화 유효성 검사
    let userPhone = document.querySelector('#user-phone');
    let userPhoneValid = document.querySelector('.user-phone-valid');

    userPhone.addEventListener('change', (e) => {
        inputPhone(e.target);
    }, false);

    function inputPhone(txt) {
        if(validPhone(txt) === false) {
            userPhone.classList.remove('valid');
            userPhone.classList.add('novalid');
            userPhoneValid.style.fontSize = '14px';
            userPhoneValid.style.color = 'red';
            userPhoneValid.innerHTML = '! 올바른 전화번호를 입력해주세요.';
            txt.value = '';
            txt.focus();
            return false;
        } else {
            userPhone.classList.remove('novalid');
            userPhone.classList.add('valid');
            userPhoneValid.style.fontSize = '14px';
            userPhoneValid.style.color = 'green';
            userPhoneValid.innerHTML = '! 유효한 전화번호입니다.';
        }
    }

    function validPhone(txt) {
        let phonePattern = /^[01[016789][0-9]{3,4}[0-9]{4}/;
        return (txt.value.match(phonePattern) !== null);
    }
    // 휴대전화 유효성 검사 끝 =======
    
    // ======= 5. 주소 검색 기능
    let addressContent = document.querySelector('#address-content');
    let userAddress = document.querySelector('#user-address');

    userAddress.addEventListener('click', () => {
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
    
                let roadAddr = data.roadAddress; // 도로명 주소
                let jibunAddr = data.jibunAddress; // 지번 주소
    
                if(roadAddr !== '') {
                    addressContent.value = roadAddr;
                } else if(jibunAddr !== '') {
                    addressContent.value = jibunAddr;
                }
            }
        }).open();
    })


    // 주소 검색 기능 끝 =======
}
