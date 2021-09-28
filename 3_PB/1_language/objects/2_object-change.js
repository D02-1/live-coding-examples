// Erstellen wir einen neuen User um seine Daten zu ändern:

const user =
{
    firstName: "Max",
    lastName: "Mustermann",
}

console.log(user);

// Werte innerhalb eines objektes können wir ganz einfach ändern:
user.firstName = "Henry";

// Natürlich können wir auch den schlüsselnamen woanders herbekommen, zum beispiel aus einer variable:
const roleState = "isAdmin";

// Wenn wir einen wert nutzen, den es noch nicht gibt, und ihm einen wert zuweisen, erstellen wir diesen schlüssel innerhalb des objektes:
user[roleState] = true;

user["gender"] = "Male";
user.userName = "MusterUser1234";

console.log(user);

console.log("=".repeat(50));

// löschen können wir werte mit dem delete keyword
delete user.gender;
console.log(user);

console.log("=".repeat(50));

// wenn wir ein objekt in eine variable legen, erstellen wir keine kopie sondern arbeiten direkt mit dem original objekt - dies nennt man "Mutable object":
console.log(user);

const currentUser = user;
currentUser.firstName = "Sidar";

// Wenn wir jetzt den currentUser ausgeben ist dort ein neuer vorname:
console.log(currentUser);

// Beim original objekt aber auch:
console.log(user);

// Mit dem spread operator können wir inhalte des objektes in ein neues objekt schieben und überschreiben damit nicht das original:
const newUser = { ...user };

console.log("newUser:", newUser);
newUser.firstName = "Ahmad";
console.log(newUser.firstName);
console.log(user.firstName);
