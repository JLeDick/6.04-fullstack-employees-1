import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees";

let employeeGenerationCounter = 10;
await db.connect();
await seedEmployees(employeeGenerationCounter);
await db.end();
console.log("Database seeded successfully.");

/* 
faker.person.fullName()
faker.date.birthdate()
fake.number.int({ min: 50000, max: 150000})
*/

async function seedEmployees(employeeGenerationCounter) {
  const employeeArray = [];
  for (let i = 0; i < employeeGenerationCounter; i++) {
    const name = faker.person.fullName();
    const birthday = faker.date.birthday();
    const salary = faker.number.int({ min: 50000, max: 150000 });
    employeeArray.push(createEmployee({ name, birthday, salary }));
  }
  await Promise.all(employeeArray);
}
