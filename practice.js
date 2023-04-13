const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function () {
        let str = '';
        let lang = this.skills.languages;

        str = `Мне ${this.age}  и я владею языками:  `;

        lang.forEach(function (lg) {
            str += `${lg.toUpperCase()} `;
        })

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;

    return console.log(exp);
}

showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {
     let res = '';
    for (let key in plan.skills.programmingLangs) {
            res += `язык ${key} изучен на  ${plan.skills.programmingLangs[key]}\n`;
    }
        return console.log(res);       
            }


showProgrammingLangs(personalPlanPeter);