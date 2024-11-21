class Agenda {
    constructor() {
        this.contacts = []
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    showContact(index) {
        console.log(this.contacts[index].toString());
    }

    showAllContacts() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`${i}.- ` + this.contacts[i].toString());
        }

        console.log("");
    }
}

class Contact {
    constructor(name, phone, email) {
        this.name = name
        this.phone = phone
        this.email = email
    }

    toString() {
        return `${this.name}:\n  · Tlf: ${this.phone}\n  · Email: ${this.email}`;
    }
}

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Añadimos la lista dada por la profesora a una agenda
let agenda = new Agenda();
contacts.map(contact => agenda.addContact(new Contact(contact.name, contact.phone, contact.email)));

agenda.showAllContacts();
agenda.addContact(new Contact("John Doe", "123456789", "examaple@example.com"));
agenda.showAllContacts();

agenda.showContact(1);
