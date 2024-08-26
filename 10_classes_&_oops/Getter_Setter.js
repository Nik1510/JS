// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//     get password(){
//         return this.password.toUpperCase()
//     }

//     set password(value){
//         this.password= value
//     }
    // here error is comming because you are trying to set password
    // from constructor and( getter and setter) at the same time  
    // so the error comes as "Maxium call Stack size exceeded".
// }


class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email =value

    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password= value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
// console.log(hitesh); // User { email: 'h@hitesh.ai', password
console.log(hitesh.password);

/*
Certainly! Let's break down the code snippet you've provided. It's a JavaScript class called `User` with getter and setter methods for the `email` and `password` properties. The use of underscores (`_`) in the property names is a common convention in JavaScript. Let's explore why:

1. **Getter and Setter Methods**:
   - In JavaScript, getter and setter methods allow you to control access to object properties.
   - Getters retrieve the value of a property, and setters modify the value.
   - They provide an abstraction layer, allowing you to perform additional logic (such as formatting or validation) when getting or setting a property.

2. **Underscore Convention**:
   - The use of underscores before property names (e.g., `_email` and `_password`) is a convention to indicate that these properties are intended to be private or internal.
   - It's not enforced by the language itself; rather, it's a way to signal to other developers that these properties should not be accessed directly from outside the class.
   - By prefixing with an underscore, you're saying, "Hey, treat this as an internal implementation detail."

3. **Why Use Underscores?**:
   - **Encapsulation**: By making properties private (or semiprivate), you encapsulate the implementation details within the class. This prevents external code from directly modifying or reading these properties.
   - **Avoiding Accidental Overwrites**: If you accidentally create a local variable with the same name as a class property, the underscore helps differentiate between them.
   - **Consistency**: Many developers follow this convention to maintain consistency across codebases.

4. **Example Usage**:
   - In your `User` class:
     - The `get email()` method returns the uppercase version of the `_email` property.
     - The `set email(value)` method sets the `_email` property.
     - Similarly, the `get password()` and `set password(value)` methods work with the `_password` property.

Remember that the use of underscores is not enforced by the language itself; it's a convention. Some developers prefer other naming conventions (such as camelCase or PascalCase) for private properties. However, the underscore convention remains widely used in JavaScript for this purpose. 😊
*/