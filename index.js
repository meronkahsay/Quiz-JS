// 1.Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.


// class customerOrder{
//     constructor(orderId,items,status){
//         this.orderId=orderId;
//         this.items=items;
//         this.status=status
//     }
//     calculateTotal(){
//         let sum=0 ;
//         this.items.forEach(item => {
//             sum+=item.quantity;
//         });
//        return sum
//     }
    
//        async processPayment() {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         this.status = "Paid";
//         console.log("Successfully paid");
//     }
// }
// const order = new customerOrder("001",[{name:"orange",quantity:50,price:89},{name:"mango",quantity:80,price:129}],"Not paid")
// console.log(order.calculateTotal());
// order.processPayment()




// 2.Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

class TeamMember{
    constructor(name,role , tasks){
        this.name=name;
        this.role=role;
        this.tasks=tasks;

    }
    checkProgress(){
        return new Promise((resolve, reject) => {
            this.tasks.forEach(task=>{
                if(task.completed){
                    resolve("All tasks completed");
                }
                else{
                      reject("Pending tasks remaining");
                }

            }).then(()=>{console.log("All tasks completed")})
            .catch(()=>{
                console.log("Pending tasks remaining")
            })
        })
    }
}

TeamMember.prototype.completeTask= function(taskTitle){
    this.tasks.forEach(task=>{
        if (task.title.toLowerCase()==taskTitle.toLowerCase()){
           task.completed=true
           console.log(task.completed);
        }
    })
}

const teamMember = new TeamMember("Meron","Leader",[{title:"Assignment",completed:true},{title:"Cleaning",completed:false}])
teamMember.completeTask("cleaning");
console.log(teamMember.checkProgress());



// 3.Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.


class Candidate{
    constructor(name,position,interviews){
        this.name=name;
        this.position=position;
        this.interviews=interviews;
    }
    sceduleInterview(date){
    
           this.interviews.push({date:date,status:"Pending"})
           console.log(this.interviews);
        
       
    }

   async sendConfirmation(){
        return new Promise((resolve) => {
            setTimeout(()=>{
              const message=` Interview confirmed ${this.name}`;
              resolve(message);
                console.log(message);
                
            },1000)
        });
    }
}

const candidate1 = new Candidate("Meron","Software Developer",[{date:"2025-5-6",status:"Accepted"}])
candidate1.sceduleInterview("2021-3-12");
candidate1.sendConfirmation();



//4.Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
