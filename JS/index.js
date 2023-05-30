document.addEventListener('DOMContentLoaded',function(){
    console.log('Document Ready!');

    init();

});

const init = () => {
    console.log('init() called!');

    initViews();
    addEvents();

}

const addEvents = () => {
    console.log('addEvents() called!');

    /* menu click event start */
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click',function(){
        console.log('signUpMenuBtn() clicked!');
        
        showSelectedView(SIGN_UP_VIEW);
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click',function(){
        console.log('signInMenuBtn() clicked!');
        
        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click',function(){
        console.log('signOutMenuBtn() clicked!');
        
        signInedMemberID = ''; //ID 초기화
        setMenuStatus(SIGN_OUT_STATUS);

        showSelectedView(SIGN_OUT_VIEW);
    });

    let signModifyBtn = document.querySelector('div.menu_wrap a.sign_modify');


    
    /* function click event start */
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type=button]');
    signUpBtn.addEventListener('click',function(){
        console.log('signUpBtn clicked!');

        let u_id = document.querySelector('div.sign_up_wrap input[name=u_id]').value;
        let u_pwd = document.querySelector('div.sign_up_wrap input[name=u_pwd]').value;
        let u_gender = document.querySelector('div.sign_up_wrap input[name=u_gender]').value;

        addMember(u_id, u_pwd, u_gender);

        alert('sign up success!');

        document.querySelector('div.sign_up_wrap input[name=u_id]').value = '';
        document.querySelector('div.sign_up_wrap input[name=u_pwd]').value = '';
        document.querySelector('div.sign_up_wrap input[name=u_gender]').value = '';

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type=button]');
    signInBtn.addEventListener('click',function() {
        console.log('signInBtn clicked!');

        let u_id = document.querySelector('div.sign_in_wrap input[name=u_id]').value;
        let u_pwd = document.querySelector('div.sign_in_wrap input[name=u_pwd]').value;

        let isMember = searchMember(u_id, u_pwd);

        if (isMember){
            alert('sign in success!');
            signInedMemberID = u_id; //사용자가 입력한 ID 할당
            setMenuStatus(SIGN_IN_STATUS);

            showSelectedView(DIARY_LIST_VIEW); //list view로 화면 전환

        }
        else {
            alert('sign in failed!');
            signInedMemberID = '';
        }

        u_id = document.querySelector('div.sign_in_wrap input[name=u_id]').value = '';
        u_pwd = document.querySelector('div.sign_in_wrap input[name=u_pwd]').value = '';

    });


}