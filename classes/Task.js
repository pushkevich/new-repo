const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
Hash = require("./Hash");
const ratioOfTasks = require("../information/ratio_of_tasks");

class Task {
    raffle(deck) {
        let tasks = new Hash(ratioOfTasks);
        return tasks
        console.log(tasks)
    }

    choiceAnAction() {
        console.log(users.raffle())
        rl.question('Ты сделал задание? (y || n) Если сделал, то выбери номер задания который хочешь удалить.', answer => {
            let ans = Number(answer)
            ratioOfTasks.delete(ans);
                console.log(ratioOfTasks, 'Всё')
            if (answer === 'n') {
                console.log(users.raffle(),'ИДИ ДЕЛАЙ!!!');
            }
            rl.close();
        });
    }
}
const users = new Task({

})
console.log(users.choiceAnAction())
module.exports = Task;
