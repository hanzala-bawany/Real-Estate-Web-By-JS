function budetAlertLines(budget) {
    alert(budget + " lac me kuch aprtments paren hen hamare pass to check press enter");
}
let areas = ["kharadar", "jamshed road", "saddar", "clifton", "defence"];

let userarea = +prompt("area number batao");
alert("ap ko " + areas[userarea] + " ke kis area me ghar chahie me ap ko list de ta hun " + areas[userarea] + " ke areas ki");
let usersubarea;
if (userarea == 0) {
    usersubarea = prompt("punjabi club , police chowki ya phir mithadar");
}
else if (userarea == 1) {
    usersubarea = prompt("1 number , 2 number ya phir amil colony");
}
else if (userarea == 2) {
    usersubarea = prompt("near gul plaza , near start city mall ya phir near zainab market");
}
else if (userarea == 3) {
    usersubarea = prompt("block a , block b , block c ya phir near sea");
}
else if (userarea == 4) {
    usersubarea = prompt("phase 1 , phase 2 , phase 3 , phase 4 , phase 5 , phase 6 khayan bane husaain ya phir khayaban e Qasim");
}
else {
    alert("ap ka dia gaya area code galat he");
}

let userProjectRequirenment = +prompt(`${areas[userarea]} ${usersubarea} me ap ko old projects me chahie ya phir new projects me dekhne hen for olf projects enter 0for new projects enter 1`);
// for kharadar userarea==0
if (userarea == 0) {
    if (userProjectRequirenment == 0) {
    // for old project
    alert(`hamare pass old project me kai project hen ap hamen apna buget ki range bataen in lacs dont need to write lac word`);
    let userBudget = +prompt("ap ki budget range bataen");

    // budet ke hisab se old projects
    if (userBudget < 100 && userBudget > 0) {
        budetAlertLines(userBudget)
        alert(`
    ${areas[userarea]} ${usersubarea} pe 
     umais terrace  me 2nd floor with 1 sided lift --> DEMAND = 90 lac
     bawany aprtments me 4th floor with lift --> DEMAND = 95 lac
     kharadar square me 4th floor without lift --> DEMAND = 80 lac
     ye ap ki range ke hisab se paren hen
    `)
    }
    else if (userBudget > 100 && userBudget <= 200) {
        budetAlertLines(userBudget)
        alert(`
     ${areas[userarea]} ${usersubarea} pe 
     saffa heights  me 2nd floor with lift --> DEMAND = 170 lac
     saffa heights me 4th floor with lift --> DEMAND = 195 lac
     oxford corner me 6th floor with lift  --> DEMAND = 170 lac
     ye ap ki range ke hisab se paren hen
    `)
    }
    else if (userBudget > 200 && userBudget <= 300) {
        budetAlertLines(userBudget)
        alert(`
     ${areas[userarea]} ${usersubarea} pe 
     Dawood classic  me 1st floor with lift --> DEMAND = 230 lac
     saffa heights me paint house available with lift --> DEMAND = 260 lac
     oxford corner me 7th floor with lift --> DEMAND = 240 lac
     ye ap ki range ke hisab se paren hen`)
    }
    else if (userBudget > 300) {
        budetAlertLines()
        alert(`agar ap ka budget ${userBudget} lac he to kharadar se acah he ap bahar ki side dhunden hamare pass bohot se bahar ki side ache project paren hen`)
    }
    else {
        alert("ap ne budget range sahi enter nahi ke he enter again");
    }

}
    // for new project
    else if (userProjectRequirenment == 1) {
        alert(`hamare pass new project me kai project hen ap hamen apne buget ke range  bataen in lacs dont need to write lac word`);
        let userBudget = +prompt("ap ki budget Range bataen");
        // let userBudgetEnd = +prompt("End of budget bataen ap ka");


    }
    else {
        alert("ap ne old or new project code batane me mistke ki again try");
    }
}

// for jamshed road userarea==1
if (userarea == 1) {
    // for old project
    if (userProjectRequirenment == 0) {
        alert(`hamare pass old project me kai project hen ap hamen apna buget ki range bataen in lacs dont neet to write lac word`);
        let userBudget = +prompt("ap ki budget range bataen");

        // budet ke hisab se old projects
        if (userBudget < 100 && userBudget > 0) {
            budetAlertLines(userBudget)
            alert(`
        ${areas[userarea]} ${usersubarea} pe 
         umais terrace  me 2nd floor with 1 sided lift --> DEMAND = 90 lac
         bawany aprtments me 4th floor with lift --> DEMAND = 95 lac
         kharadar square me 4th floor without lift --> DEMAND = 80 lac
         ye ap ki range ke hisab se paren hen
        `)
        }
        else if (userBudget > 100 && userBudget <= 200) {
            budetAlertLines(userBudget)
            alert(`
         ${areas[userarea]} ${usersubarea} pe 
         Bakhshi aprments  me 2nd floor with lift --> DEMAND = 170 lac
         Crown Apartments me 4th floor with lift --> DEMAND = 195 lac
         Al jadeed Aparments me 6th floor with lift  --> DEMAND = 170 lac
         ye ap ki range ke hisab se paren hen
        `)
        }
        else if (userBudget > 200 && userBudget <= 300) {
            budetAlertLines(userBudget)
            alert(`
         ${areas[userarea]} ${usersubarea} pe 
         Bakshi Apartments  me 1st floor with lift --> DEMAND = 230 lac
         Crown Aparmenst me paint house available with lift --> DEMAND = 260 lac
         Al jadeed Aparments me 7th floor with lift --> DEMAND = 240 lac
         ye ap ki range ke hisab se paren hen`)
        }
        else if (userBudget > 300 && userBudget <= 400) {
            budetAlertLines(userBudget)
            alert(`
         ${areas[userarea]} ${usersubarea} pe 
         Bakshi Apartments  me 1st floor with lift --> DEMAND = 330 lac
         Crown Aparmenst me paint house available with lift --> DEMAND = 360 lac
         Al jadeed Aparments me 7th floor with lift --> DEMAND = 340 lac
         ye ap ki range ke hisab se paren hen`)
        }
        else if (userBudget > 400) {
            alert(`agar ap ka budet 4 cror yani 400 lac se ziada he to ap jamshed road ki jaga clifton ki side dekhan ziada behtar he`)
        }

        else {
            alert("ap ne budget range sahi enter nahi ke he enter again");
        }

    }
    // for new project
    else if (userProjectRequirenment == 1) {
        alert(`hamare pass new project me kai project hen ap hamen apne buget ke range  bataen in lacs dont need to write lac word`);
        let userBudget = +prompt("ap ki budget Range bataen");
        // let userBudgetEnd = +prompt("End of budget bataen ap ka");


    }
    else {
        alert("ap ne old or new project code batane me mistke ki again try");
    }
}














// areas.push("defence","shahra e faisal");
// console.log(areas);
// areas.pop();
// console.log(areas);
// areas.unshift("lyari")
// console.log(areas);
// areas.shift();
// console.log(areas);
// areas.splice(2,0,"saddar","clifton");
// console.log(areas);

// let newAreas = areas.slice(1,4);
// console.log(newAreas); 