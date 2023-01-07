const Person = {
    Name: "Dan",
    Age: 12,
    Address: "District",
    Gender: 'M',

    ageGender: function () {
        return `${this.Age + " " + this.Gender}`;
    }
}

console.log(Person.ageGender())