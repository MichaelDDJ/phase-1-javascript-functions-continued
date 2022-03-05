//Saturday fun
function saturdayFun (activity){
    if (activity === undefined){
        return "This Saturday, I want to roller-skate!";
    }
    else{
        return `This Saturday, I want to ${activity}!`;
    }
}

//Monday work
let mondayWork = (function (activity) {
    if (activity === undefined){
        return "This Monday, I will go to the office.";
    }
    else{
        return `This Monday, I will ${activity}.`;
    }
})


//wrap adjective
function wrapAdjective(wrap){
    return (function (adjective) {
        return (adjective === undefined) ? `You are ${wrap}special${wrap}!` : `You are ${wrap}${adjective}${wrap}!`;
    })
}