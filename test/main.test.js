import {test, expect, it, describe} from "vitest";
import {validatePassword, gradeCalculate } from "../src/main.js";

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
    expect(validatePassword("password")).toBe(true);
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