// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
    this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
    super(name);
    this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}`);
    }
}

const employee = new Employee("Алина Кочнева");
employee.displayInfo();

const manager = new Manager("Алина Кочнева", "Разработчик");
manager.displayInfo();

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
}

class Order {
    products = [];
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }

    addProduct(product) {
        this.products.push(product)
        return this.products;
    }

    getTotalPrice() {
        const sum = this.products.reduce((acc, el) => {
            return acc + el.price
        }, 0);
        return sum;
    }
}


const order = new Order(12345);

const product1 = new Product("Книга", 500);
order.addProduct(product1);

const product2 = new Product("Блокнот", 120);
order.addProduct(product2);

console.log(order.getTotalPrice());