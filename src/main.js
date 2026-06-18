//if the length of the input is greater than or equal to 8, return true
//if the length of the input is less than 8, return false
//if the input is empty, return false
//if the input contains uppercase letters, return true
//if the input does not contain uppercase letters, return false
//if the input is empty, return INC
//if the input is grater or eqaul to 94, return 1.25
//if the input is negative, return failure
//if the result is a total of greater than one hundred, return overloaded
//if the input is correct, return login successful
//if the input is incorrect, return warning message
//if the input is null, return error message
//if the input is not a string, return error message
//if the input is not a number, return error message
//if the input is not a valid email, return error message
//if the input is not a valid password return error message
//if the input is not a valid email and password, return error message
//if the input is a valid email and password, return login successful
//if the input is a valid email and password but the email is incorrect, return warning message
//if the input is a valid email and password but the password is incorrect, return warning message

export function validatePassword(password) {
    if (password.length >= 8){
        return true;
    } else {
        return false;
    }    
    if (password.length < 8){
        return false;
    } else {
        return true;
    }    
    if (password === ""){
        return false;
    }else{
        return true;
    }   
    if (/[A-Z]/.test(password)) {
        return true;
    } else {
        return false;
    }
    if (!/[A-Z]/.test(password)){
        return false;
    }else{
        return true;
    }
}

export function gradeCalculate(prelim, midterm, final, lab) {
    const grades = [prelim, midterm, final, lab];

    // All inputs must be positive numbers
   for (const grade of grades) {
    if (typeof grade !== "number") {
        return "INC";
    }

    if (!Number.isFinite(grade)) {
        return "INC";
    }

    if (grade == 0) {
        return "Null";
    }

    if (grade < 0) {
        return "Error";
    }
}

    const total = prelim + midterm + final + lab;

    if (total > 100) {
        return "overloaded";
    }

    if (total >= 97) return 1.00;
    if (total >= 94) return 1.25;
    if (total >= 91) return 1.50;
    if (total >= 88) return 1.75;
    if (total >= 85) return 2.00;
    if (total >= 82) return 2.25;
    if (total >= 79) return 2.50;
    if (total >= 76) return 2.75;
    if (total >= 75) return 3.00;

    return 5.00;
}

export function login(email, password){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const correctEmail = "juandelacruz@email.com";
    const correctPass = "Str0ngp@ssword";

    if(!emailPattern.test(email)) throw new Error('Invalid email');

    if(!passPattern.test(password)) throw new Error('Weak Password');

    if(email !== correctEmail) return 'Incorrect email or password';
    if(password !== correctPass) return 'Incorrect email or password';

    return 'Login Successful';

}

