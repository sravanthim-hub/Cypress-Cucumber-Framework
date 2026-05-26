import { RegistrationData } from "./DataModel/registrationData";
import { faker } from "@faker-js/faker";

export const registrationData: RegistrationData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    password: "test@123"
}