function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; // ✅ Fixed to use backticks
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`; // ✅ Fixed to use backticks and remove extra space
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`; // ✅ Fixed to use backticks
    };
}
