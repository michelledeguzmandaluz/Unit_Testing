import {test, expect, it, describe, beforeEach, afterAll} from "vitest";
import {validatePassword, gradeCalculate, login } from "../src/main.js";

describe("validatorPassword",() =>{

    it("should return true if the password is greater than or equal to 8 characters", () => {
    expect(validatePassword("password")).toBe(true);
});

it("should return false if the password is less than 8 characters", () => {
    expect(validatePassword("pass")).toBe(false);
});

it("should return false if the password is empty", () => {
    expect(validatePassword("")).toBe(false);
});

it("should return true if the password contains uppercase letters", () => {
    expect(validatePassword("Password")).toBe(true);
});

it("should return false if the password does not contain uppercase letters", () => {
    expect(validatePassword("password")).toBe(false);
});

});

describe("gradesCalculate", () => {
    it("if the input is empty, return INC", () => {
        const prelim = 0;
        const midterm = 56;
        const final = 12;
        const lab =12;
        const result = gradeCalculate(prelim, midterm, final, lab);
        expect(result).toBe("Null");
    });

    it("if the input is greater or equal to 94, return 1.25", () => {
        const prelim = 15;
        const midterm = 10;
        const final = 50;
        const lab = 20;
        const result = gradeCalculate(prelim, midterm, final, lab);
        expect(result).toBe(1.25);
    });

    it("if the input is negative, return failure", () => {
        const prelim = -15;
        const midterm = 10;
        const final = 50;
        const lab = 20;
        const result = gradeCalculate(prelim, midterm, final, lab);
        expect(result).toBe("Error");
    })

    it("if the result is a total of greater than one hundred, return overloaded", () => {
        const prelim = 100;
        const midterm = 10;
        const final = 50;
        const lab = 20;
        const result = gradeCalculate(prelim, midterm, final, lab);
        expect(result).toBe("overloaded");
    })
})

describe("Login", () => {

    const validEmail = "juandelacruz@email.com";
    const validPassword = "Str0ngp@ssword";

beforeEach(() => {
        console.log("Starting a login test...");
});

afterAll(() => {
        console.log("Login test suite completed.");
 });

    it("should return success message if the email and password is correct", () => {
        expect(login(validEmail, validPassword))
            .toEqual("Login Successful");
    });

    it("should throw an error if email do not have @", () => {
        expect(() => login("juandelacruzemail.com", validPassword))
            .toThrow("Invalid email");
    });

    it("should throw an error if email do not have domain", () => {
        expect(() => login("juandelacruz@email", validPassword))
            .toThrow("Invalid email");
    });

    it("should throw an error if email is empty", () => {
        expect(() => login("", validPassword))
            .toThrow("Invalid email");
    });

    it("should throw an error if email is null", () => {
        expect(() => login(null, validPassword))
            .toThrow("Invalid email");
    });

    it("should throw an error if password is less than 8 characters", () => {
        expect(() => login(validEmail, "weak"))
            .toThrow("Weak Password");
    });

    it("should throw an error if password is empty", () => {
        expect(() => login(validEmail, ""))
            .toThrow("Weak Password");
    });

    it("should throw an error if password is null", () => {
        expect(() => login(validEmail, null))
            .toThrow("Weak Password");
    });

    it("should return warning message when email is incorrect", () => {
        expect(login("wrong@email.com", validPassword))
            .toEqual("Incorrect email or password");
    });

    it("should return warning message when password is incorrect", () => {
        expect(login(validEmail, "An0ther@Pass"))
            .toEqual("Incorrect email or password");
    });

});
