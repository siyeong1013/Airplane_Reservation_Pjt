const memberDB = new Map();
const airReserveDB = new Map();
// airReserveDB의 기본키는 예약 넘버

/* MemberDB START */
const addMember = (id, pwd, gender) => {
    console.log('addMember() called!');
    
    memberDB.set(id, {
                        u_id: id,
                        u_pwd: pwd,
                        u_gender: gender,
                        r_num: [],
                    });
    airReserveDB.set(id, []);
    console.log(memberDB.get(id));
}

const searchMember = (id, pwd) => {
    console.log('searchMember() called!');

    let memObj = memberDB.get(id);
    if (memObj != undefined && memObj.u_pwd == pwd) {
        console.log('SIGN IN SUCCESS');
        return true;
    }
    

    console.log('SIGN IN FAIL');
    return false;
}

const addReservation = (departure, arrival, departure_date, arrival_date,id) => {
    
    console.log('addReservation() called!');
    let reservationArr=airReserveDB.get(id)
    reservationArr.push({departure,arrival,departure_date,arrival_date})
    airReserveDB.set(id,reservationArr)
    console.log('reserveArr: ', reserveArr)
    
}
const searchReservation = () => {
    console.log('searchReservation() CALLED!!');
    let reserveArr = airReserveDB.get();
    console.log('reserveArr: ', reserveArr)
    return reserveArr

}



const updateInfo=(checkPwd,newPwd,id)=>{
   console.log(checkPwd,newPwd,id)
   memberDB.get(id).u_pwd=newPwd
}