// Requerimento dos modulos fs e path:
const fs = require('fs');
const { join } = require('path');

// Cotação do dolar 29/08/2022:
const dollarValue = 5.06;

// Modelo de funcionario (classe);
class Employee {
    constructor(id, name, salary, age, role, email, salaryInBRL,) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.role = role;
        this.email = email;
        this.salaryInBRL = (parseFloat(salary) * dollarValue).toFixed(2);
    }
}

// JSON com os Funcionários:
const filePath = join(__dirname, 'users.json');

const getUsers = () => {
    // Conferindo se o arquivo existe:
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    // Retornando o JSON:
    try {
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Salvar os usuários:
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

const userRoute = (app) => {

    // Função GET:
    app.route('/users/:id?').get((req, res) => {
        const users = getUsers();

        // Enviando os usuários:
        res.send({ users });
    })

        // Função POST:
        .post((req, res) => {

            // Criando o objeto com o conteúdo do body:
            let addedEmployee = new Employee(
                req.body.id,
                req.body.name,
                req.body.salary,
                req.body.age,
                req.body.role,
                req.body.email
            );
            console.log(addedEmployee);

            // Salvando funcionario:
            const users = getUsers();
            users.push(addedEmployee);
            saveUser(users);

            // Resposta:
            res.status(201).send('User added!');
        })

        // Função PUT:
        .put((req, res) => {
            const users = getUsers();

            saveUser(users.map(user => {
                if (user.id === req.params.id) {
                    // Mescla:
                    return {
                        ...user,
                        ...req.body
                    }
                }
                return user;
            }))

            // Resposta:
            res.status(200).send('User edited!');
        })

        // Função DELETE:
        .delete((req, res) => {
            const users = getUsers();

            saveUser(users.filter(user => user.id !== req.params.id));

            // Resposta:
            res.status(200).send('User Removed!');
        })
}

// Exportando:
module.exports = userRoute;