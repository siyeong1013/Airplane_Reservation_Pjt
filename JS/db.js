const memberDB = new Map();
const airReserveDB = new Map();

/* MemberDB START */
const addMember = (id, pwd, gender) => {
    console.log('addMember() called!');

    memberDB.set(id, {
                        u_id: id,
                        u_pwd: pwd,
                        u_gender: gender,
                    });

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

// const addReservation = (departure, arrival, departure_date, arrival_date){
//     console.log('addReservation() called!');

//     let reserveArr = memberDB.get(signInedMemberID);


// }