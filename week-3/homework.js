// 숙제 1) 나이든 유저
// 복사할 객체
var user = {
    name: "john",
    age: 20,
}


var getAged = function (user, passedTime) {
    // 매개변수 user가 object타입인지 null값인지를 확인
    if(typeof user === 'object' && user !== null) {
        for (let prop in user) {
            // user객체안에 중첩객체가 있을 수 있으니 getAged자신을 다시 호출한다.
            return passedTime[prop] = getAged(user[prop])
        }
    } else {
        // 재귀함수로 확인했을 떄 중첩객체가 아니면 그대로 값을 복사한다.
        return passedTime = user;
    }
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
		    console.log("Failed! user2 doesn't exist!");
	  } else if (user1 !== user2) { 
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);

// 숙제 2) 어떤 매치가 성사될까?