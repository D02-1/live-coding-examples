// wir könenn einen default import so nennen wir wir wollen, einen standard konvention ist, sie bei klassen so zu nennen wie die klasse heisst. Also in unserem falle "app", das ist ein sogennanter namespace.
import App from './app.js';
import { makePage } from './utils.js';
import * as User from './user.js';

console.log('Hallo Welt!');

const app = new App(25);
console.log(app);

const newValue = app.createNewValue();
console.log(newValue);

makePage(newValue);

console.log(User.firstName + " " + User.lastName);

User.testFunktion();
