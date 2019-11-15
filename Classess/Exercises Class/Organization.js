class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.departments = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        };
    }
    get departmentsBudget() {
        return {
            marketing: this.departments['marketing'],
            finance: this.departments['finance'],
            production: this.departments['production']
        };
    }
    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            let currentEmployee = {
                employeeName,
                department,
                salary
            };
            this.employees.push(currentEmployee);
            this.departments[department] -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departments[department]}.`
    }
    employeeExists(employeeName) {
        let find = this.employees.find(x => x.employeeName === employeeName);
        if (find) {
            return `Mr./Mrs. ${find.employeeName} is part of the ${find.department} department.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    leaveOrganization(employeeName) {
        let find = this.employees.find(x => x.employeeName === employeeName);

        if (find) {
            let index = this.employees.indexOf(find);
            this.departmentsBudget[find.department] += find.salary;
            this.employees.splice(index, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }
    status() {

        let status = [];
        status.push(`${this.name.toUpperCase()} DEPARTMENTS:`);

        for (const department in this.departments) {
            let departmentInfo = [];
            departmentInfo.push(department.charAt(0).toUpperCase() + department.slice(1));

            const departmentEmployees = this.employees
                .filter(e => e.department === department)
                .sort((a, b) => b.salary - a.salary)
                .map(e => e.employeeName);

            departmentInfo.push(`Employees: ${departmentEmployees.length}: ${departmentEmployees.join(', ')}`);
            departmentInfo.push(`Remaining Budget: ${this.departments[department]}`);
            status.push(departmentInfo.join(' | '));
        }

        return status.join('\n');

    }
}
//////////////////////////////////////////////////////////////
class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = +budget;
        this.employees = [];
        this.departmentsBudget = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        };
    }

    get departmentsBudget() {
        return this._departmentsBudget;
    }

    set departmentsBudget(departmentsBudget) {
        this._departmentsBudget = departmentsBudget;
    }

    add(employeeName, department, salary) {
        let temp = this.departmentsBudget[department]
        if (temp >= salary) {
            let obj = {
                employeeName,
                department,
                salary
            }
            this.employees.push(obj);
            this.departmentsBudget[department] -= salary
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`

        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${temp}.`
        }

    }

    employeeExists(employeeName) {
        let find = this.employees.find(x => x.employeeName === employeeName);
        if (find) {
            return `Mr./Mrs. ${find.employeeName} is part of the ${find.department} department.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    leaveOrganization(employeeName) {
        let find = this.employees.find(x => x.employeeName === employeeName);

        if (find) {
            let index = this.employees.indexOf(find);
            this.departmentsBudget[find.department] += find.salary;
            this.employees.splice(index, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    status() {
        let sortedEmployees = this.employees.sort((a, b) => b.salary - a.salary)

        let marketingEmployees = sortedEmployees
            .filter(e => e.department === 'marketing')
            .map(e => e.employeeName)

        let financeEmployees = sortedEmployees
            .filter(e => e.department === 'finance')
            .map(e => e.employeeName)

        let productionEmployees = sortedEmployees
            .filter(e => e.department === 'production')
            .map(e => e.employeeName)

        let info = `${this.name.toUpperCase()} DEPARTMENTS:` +
            `\nMarketing | Employees: ${marketingEmployees.length}: ` +
            `${marketingEmployees.join(', ')} | ` +
            `Remaining Budget: ${this.departmentsBudget['marketing']}` +
            `\nFinance | Employees: ${financeEmployees.length}: ` +
            `${financeEmployees.join(', ')} | ` +
            `Remaining Budget: ${this.departmentsBudget['finance']}` +
            `\nProduction | Employees: ${productionEmployees.length}: ` +
            `${productionEmployees.join(', ')} | ` +
            `Remaining Budget: ${this.departmentsBudget['production']}`

        return info
    }
}