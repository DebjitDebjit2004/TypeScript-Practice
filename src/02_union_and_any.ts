let apiRequestStatus: "success" | "error" | "pending" = "success";

apiRequestStatus = "error";
// apiRequestStatus = "Debjit"; // Type 'string' is not assignable to type '"success" | "error" | "pending"'

const orders = ['12','13','14'];

let currentOrder: any;

for (const order of orders) {
    if (order === '13') {
        currentOrder = order;
        break;
    }
}

currentOrder = 15;
console.log(currentOrder);