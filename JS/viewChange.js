const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const UPDATE_INFO = 4;
const CREATE_RESERVATION = 5;
const RESERVATION_LIST=6;
let signUpWrap = '';
let signInWrap = '';
let signModifyWrap=''
let reservationWrap=''
let reservationListWrap=''

// sign_modify_wrap
const initViews = () => {
    console.log('initViews() called!');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    signModifyWrap=document.querySelector('div.sign_modify_wrap');
    reservationWrap=document.querySelector('div.reservation_wrap');
    reservationListWrap=document.querySelector("div.reservationList_wrap");

}

const showSelectedView = (viewNo) => {
    console.log('showSelectedView() called!');

    switch(viewNo) {
        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display='none';
            signModifyWrap.style.display="none";
            reservationWrap.style.display='none'
            reservationListWrap.style.display='none';
         
            break;
        case SIGN_IN_VIEW:
        case SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display='block';
            signModifyWrap.style.display="none";
            reservationWrap.style.display='none';
            reservationListWrap.style.display='none';
          
            break;
        case UPDATE_INFO:
            signUpWrap.style.display = 'none';
            signInWrap.style.display='none';
            signModifyWrap.style.display="block";
            reservationWrap.style.display='none';
            reservationListWrap.style.display='none';
            break;
        case CREATE_RESERVATION:
            signUpWrap.style.display = 'none';
            signInWrap.style.display='none';
            signModifyWrap.style.display="none";
            reservationWrap.style.display='block';
            reservationListWrap.style.display='none';
            break;
        case RESERVATION_LIST:
            signUpWrap.style.display = 'none';
            signInWrap.style.display='none';
            signModifyWrap.style.display="none";
            reservationWrap.style.display='none';
            reservationListWrap.style.display='block';
            break;
    }

}