
// convert kilometer to meter 
function kilometerToMeter(kilometer) {
    var convertmeter = kilometer * 1000;
    return convertmeter;
}
var result = kilometerToMeter(50);
console.log(result);



// budget calculator
function budgetCalculator(clock, phone, laptop) {
    var clock = clock * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var Totalbudget = clock + phone + laptop;
    return Totalbudget;
}

var result = budgetCalculator(1, 1, 5); // you can increage input number and down number
console.log(result)



// hotel cost calculation
function hotelCost(night) {
    var hotelNight = 0;
    if (night <= 10) {
        var hotelNight = night * 100; //ten days hotel cost calculation

    } else if (night <= 20) {
        var tenNightCost = 10 * 100;
        var tenNightPlusDiscount = night - 10;
        var tenToTwentyNightCost = tenNightPlusDiscount * 80; //ten days up hotel cost calculation
        var hotelNight = tenNightCost + tenToTwentyNightCost;

    } else {
        var tenNightCost = 10 * 100;
        var twentyNightCost = 10 * 80;
        var TwentyNightPlusdiscount = night - 20;
        var twentyPlusnight = TwentyNightPlusdiscount * 50;
        var hotelNight = tenNightCost + twentyNightCost + twentyPlusnight;
    }
    return hotelNight;
}
var result = hotelCost(100); //you can change valu
console.log(result);



// Mega Friend longestString 

function megaFriend(friends) {
    var longestString = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > longestString.length) {
            longestString = friends[i];
        }
    }
    return longestString;

}

var friendsName = ["Gowtam kumar", "Kalam", "Jamal", "korim"]; //you can change stirng
var result = megaFriend(friendsName);
console.log(result);



