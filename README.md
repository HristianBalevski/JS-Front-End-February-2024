# JS-Front-End-February-2024
This is my course JS Frond-End at SoftUni 2024

![JavaScript](https://github.com/HristianBalevski/JS-Front-End-February-2024/assets/114162692/28ec1f44-d826-4ad5-90af-b8467c694dd9)


## 01.JS Syntax Fundamentals

**01.JavaScript Overview**

JavaScript е високо ниво, език за програмиране, който се използва за създаване на динамични уеб приложения. Един от най-важните аспекти на JavaScript е неговата възможност да се изпълнява в браузъра на клиента (client-side), което означава, че кодът се изпълнява на компютъра на потребителя, вместо на сървъра. Това позволява на разработчиците да създават интерактивни уеб страници, които реагират на действията на потребителите без да е необходимо презареждане на цялата страница.
```
// Дефиниция на променлива и използване на оператора за присвояване
let greeting = "Hello, World!";

// Използване на вградена функция за изписване в конзолата
console.log(greeting);

```
<br>

**02.What is Node.js**

Node.js е среда за изпълнение, която позволява на разработчиците да изпълняват JavaScript код на страната на сървъра. Тя използва JavaScript двигателя V8 от браузъра Chrome за изпълнение на JavaScript код извън браузърната среда. Една от ключовите характеристики на Node.js е неблокиращата, събитийно-ориентирана архитектура, която го прави изключително ефективен и подходящ за създаване на мащабируеми мрежови приложения.
```
// Пример на прост сървър с Node.js
const http = require('http');

// Създаване на обект сървър
const server = http.createServer((req, res) => {
  // Задаване на HTTP заглавието на отговора с HTTP статуса и Content-Type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Изпращане на тялото на отговора като "Hello, World!"
  res.end('Hello, World!\n');
});

// Сървърът слуша на порт 3000
server.listen(3000, () => {
  console.log('Сървърът работи на http://localhost:3000/');
});

```

В този пример Node.js се използва за създаване на сървър, който слуша на порт 3000. Когато клиент направи заявка към този сървър, той отговаря със съобщението "Hello, World!". Node.js позволява на разработчиците да създават различни видове приложения, включително уеб сървъри, API, приложения за реално време и други, използвайки JavaScript на страната на сървъра.
<br>


**03.JavaScript Syntax**

**Функции:**
Функциите в JavaScript се дефинират с ключовата дума function.
```
// Дефиниране на функция
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Извикване на функция
greet("Peter"); // Ще изпише "Hello, Peter!"

```
<br>

**Оператори:**
JavaScript поддържа различни видове оператори, като аритметични, сравнителни, логически и др.
```
let x = 10;
let y = 5;

// Аритметични оператори
let sum = x + y; // Събиране
let difference = x - y; // Изваждане
let product = x * y; // Умножение
let quotient = x / y; // Деление

// Сравнителни оператори
let isEqual = x === y; // Сравнява дали x и y са равни
let isGreater = x > y; // Проверява дали x е по-голямо от y

// Логически оператори
let andResult = (x > 0) && (y > 0); // Логическо "И"
let orResult = (x > 0) || (y > 0); // Логическо "ИЛИ"
let notResult = !(x === y); // Логическо "НЕ"
```
<br>

**Вход и Изход:**
Вход и изход в JavaScript се извършват чрез вградените функции **console.log()** за извеждане на информация и **prompt()** за получаване на вход от потребителя:
```
// Извеждане на информация
console.log("Hello, World!"); // Изписва "Hello, World!" в конзолата

// Получаване на вход от потребителя
let name = prompt("Моля, въведете вашето име:"); // Показва диалогов прозорец за въвеждане на име
console.log("Здравей, " + name + "!"); // Изписва приветствие с въведеното име
```
<br>

**Data Types and Variables**

**Типове данни:**

**Числа (Numbers):** Представляват числови стойности, както цели, така и с плаваща запетая.
```
let integerNumber = 10; // Цяло число
let floatNumber = 3.14; // Число с плаваща запетая
```
<br>

**Низове (Strings):** Представляват текстови данни, затворени в кавички.
```
let text = "Hello, world!"; // Низ с текстова информация
```
<br>

**Булеви стойности (Booleans):** Представляват стойности истинно или лъжливо (true или false).
```
let isTrue = true; // Истинска булева стойност
let isFalse = false; // Лъжлива булева стойност
```
<br>

**Масиви (Arrays):** Структури от данни, които съдържат списък от елементи.
```
let numbers = [1, 2, 3, 4, 5]; // Масив от числа
let fruits = ["Apple", "Banana", "Orange"]; // Масив от низове
```
<br>

**Обекти (Objects):** Колекция от ключове и техните стойности.
```
let person = {
    name: "Peter",
    age: 30,
    city: "Sofia"
}; // Обект, представляващ информация за човек
```
<br>

**Променливи:**
Променлива в JavaScript се използва за съхранение на данни. Тя може да съдържа стойност от всеки тип данни. 
```
let x = 10; // Променлива, съдържаща цяло число
let greeting = "Hello, world!"; // Променлива, съдържаща низ
let isSunny = true; // Променлива, съдържаща булева стойност
```
<br>

**04.Variable Scope**
Обхватът на променливите (Variable Scope) в JavaScript определя къде в програмата може да бъде достъпена дадена променлива. В JavaScript има два основни типа обхват на променливите:
<br>

**Глобален обхват (Global Scope):** Променливите, дефинирани извън функции или блокове код, имат глобален обхват. Те могат да бъдат достъпени от всяко място в програмата.
```
let globalVariable = "Global variable";

function printGlobalVariable() {
    console.log(globalVariable);
}

printGlobalVariable(); // Ще изпише "Global variable"
```
<br>

**Локален обхват (Local Scope):** Променливите, дефинирани в рамките на функция или блок код, имат локален обхват. Те могат да бъдат достъпени само в рамките на съответната функция или блок код, в който са дефинирани.
```
function printLocalVariable() {
    let localVariable = "Local variable";
    console.log(localVariable);
}

printLocalVariable(); // Ще изпише "Local variable"

console.log(localVariable); // Това ще даде грешка, защото localVariable не е дефинирана глобално
```
Важно е да се отбележи, че променливите с едно и също име могат да бъдат дефинирани в различни обхвати, без да се конфликтуват една с друга. Въпреки това, при достъп до променлива, се предпочита първо да се търси в локалния обхват, след което в глобалния.
<br>

**05.Truthy and Falsy Values**
В JavaScript, стойностите могат да бъдат оценявани като истина (truthy) или като лъжа (falsy) в зависимост от тяхната "истинност".
<br>

**Truthy стойности:** Всичко, което не е явно лъжа, се смята за истина. Това включва всички стойности освен следните:
**false**
**0** (нула)
**''** или **""** (празен низ)
**null**
**undefined**
**NaN** (не е число)
<br>

**Falsy стойности:** Тези са стойностите, които се смятат за лъжа, когато се използват в контекст, където се очаква истина. Те са точно обратните на truthy стойностите.
```
// Truthy стойности
if (true) {
    console.log('true е truthy');
}

if ('hello') {
    console.log('Стрингът \'hello\' е truthy');
}

if (42) {
    console.log('Числото 42 е truthy');
}

// Falsy стойности
if (false) {
    console.log('false е falsy');
}

if (0) {
    console.log('Числото 0 е falsy');
}

if ('') {
    console.log('Празният стринг е falsy');
}
```
Тези концепции са важни, когато се използва проверка на условия или когато се присвоява стойност на променлива в зависимост от условие.
<br>

**06.What is loop**
Цикълът (loop) в програмирането е конструкция, която позволява на програмата да изпълнява определен блок код многократно, докато е изпълнено определено условие. Цикълите са полезни, когато искаме да повторим едни и същи действия няколко пъти, без да се налага да пишем същия код многократно.
<br>

**for цикъл:** Този цикъл се използва, когато знаем точно колко пъти искаме да изпълним даден блок код. Обикновено се използва, когато имаме списък от елементи или когато искаме да повторим кода определен брой пъти.
```
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
<br>

**while цикъл:** Този цикъл се изпълнява, докато е изпълнено определено условие. Той се използва, когато не знаем точно колко пъти искаме да изпълним кода, но знаем условието, което го определя.
```
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
<br>

**do...while цикъл:** Този цикъл е подобен на while цикъла, но гарантира, че блокът код ще се изпълни поне веднъж, преди да се провери условието.
```
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```
Циклите са мощно средство за управление на потока на програмата и позволяват на разработчиците да напишат по-ефективен и компактен код.
<br>

**07.Undefined and Null**
**undefined** и **null** са две различни стойности в JavaScript, които сигнализират за отсъствие на стойност или за "празна" стойност.
<бр>

**undefined:** Стойността **undefined** се използва, когато променлива е декларирана, но не е присвоена стойност. Това се случва по подразбиране, когато променлива е създадена, но не е инициализирана със стойност.
```
let x;
console.log(x); // Ще изпише "undefined"
```
<br>

**null:** Стойността null се използва, когато искаме да обозначим, че променлива е празна или няма стойност. Тя се използва, когато искаме да нулираме стойността на променлива, която вече е била инициализирана със стойност.
```
let y = null;
console.log(y); // Ще изпише "null"
```
Важно е да се отбележи, че **undefined** и **null** са различни от типа данни "празен низ" (**''** или **""**). Те са стойности, които показват липса на стойност или невалидност на променлива.

---

## 02.JS Arrays and Strings

**What is an Array?**

Масив в JavaScript е специален тип променлива, който ви позволява да съхранявате множество стойности в една променлива. Масивите могат да съдържат всякакъв вид данни, включително числа, низове, обекти или дори други масиви. Всяка стойност в масива се нарича елемент, и всеки елемент има индекс, който представлява неговата позиция в масива.
<br>

- Масивът е структура от данни, която съхранява колекция от елементи, достъпни чрез техните индекси.
- Масивите са с нулева база, което означава, че първият елемент е на индекс 0, вторият елемент е на индекс 1 и така нататък.
- Масивите в JavaScript могат динамично да нарастват или намаляват по размер, като се добавят или премахват елементи.
- Можем да достъпваме елементите в масива, използвайки квадратни скоби [], ипосичим индекса на елемента, който искаме да достъпим.
```
// Creating an array
let fruits = ['apple', 'banana', 'orange'];

// Accessing elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'

// Modifying elements
fruits[1] = 'grape'; // Change 'banana' to 'grape'
console.log(fruits); // Output: ['apple', 'grape', 'orange']

// Adding elements
fruits.push('kiwi'); // Add 'kiwi' to the end of the array
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'kiwi']

// Removing elements
let removed = fruits.pop(); // Remove the last element ('kiwi') and return it
console.log(removed); // Output: 'kiwi'
console.log(fruits); // Output: ['apple', 'grape', 'orange']
```
<br>

**Destructuring Syntax**
<br>

**Destructuring syntax** в JavaScript е мощен инструмент, който позволява лесно и елегантно да извличаме стойности от обекти или масиви и да ги присвояваме на променливи. Това е особено полезно, когато имаме обект или масив с много свойства или елементи и искаме бързо да достъпим само няколко от тях.
```
// Деструктуриране на обект
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
console.log(name); // Извежда: 'Alice'
console.log(age); // Извежда: 30

// Деструктуриране на масив
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // Извежда: 1
console.log(second); // Извежда: 2
console.log(third); // Извежда: 3

// Деструктуриране с оставащи елементи (rest operator)
const [head, ...tail] = numbers;
console.log(head); // Извежда: 1
console.log(tail); // Извежда: [2, 3]
```
<br>

В тези примери се използва синтаксисът за деструктуриране, където **{}** се използва за обекти, а **[]** се използва за масиви. По този начин можем лесно да извлечем и използваме стойностите на определени свойства или елементи от обект или масив, като ги присвоим на променливи.
<br>

**For-of Loop**

The **for-of loop** в JavaScript е по-нова конструкция за обхождане на елементите в масиви, стрингове, итератори и други iterable обекти. Тя предоставя по-лесен и четим начин за обхождане на елементите в сравнение с традиционния **for** или **forEach** цикъл.
```
const numbers = [1, 2, 3, 4, 5];

// Обхождане на елементите на масива
for (const number of numbers) {
    console.log(number);
}
// Изход: 1, 2, 3, 4, 5

const str = 'Hello';

// Обхождане на символите на низа
for (const char of str) {
    console.log(char);
}
// Изход: 'H', 'e', 'l', 'l', 'o'
```
**Methods**
<br>
Array methods в JavaScript са функции, които се прилагат върху масиви и могат да променят тяхното съдържание. Те предоставят удобен начин за манипулиране на данните в масивите, като добавят, премахват или променят елементите.
<br>

**push()**: Добавя един или повече елементи в края на масива.
```
const fruits = ['apple', 'banana'];
fruits.push('orange');
// Изход: ['apple', 'banana', 'orange']
```
<br>

**pop()**: Премахва последния елемент от масива и го връща.
```
const fruits = ['apple', 'banana', 'orange'];
const removedFruit = fruits.pop();
// Изход: 'orange'
// Състояние на масива след премахването: ['apple', 'banana']
```
<br>

**shift()**: Премахва първия елемент от масива и го връща.
```
const fruits = ['apple', 'banana', 'orange'];
const removedFruit = fruits.shift();
// Изход: 'apple'
// Състояние на масива след премахването: ['banana', 'orange']
```
<br>

**unshift()**: Добавя един или повече елементи в началото на масива.
```
const fruits = ['banana', 'orange'];
fruits.unshift('apple');
// Изход: ['apple', 'banana', 'orange']
```
<br>

**splice()**: Променя съдържанието на масива, като премахва или заменя елементи.
```
const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'kiwi');
// Състояние на масива след splice(): ['apple', 'grape', 'kiwi', 'orange']
```
<br>

**reverse()**: Обръща реда на елементите в масива.
```
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Изход: [5, 4, 3, 2, 1]
```
<br>

**join()**: Събира всички елементи на масива в низ, разделени с определен разделител.
```
const fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log(joinedString); // Изход: 'apple, banana, orange'
```
<br>

**slice()**: Извлича част от масива и създава нов масив.
```
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Изход: [2, 3]
```
<br>

**includes()**: Проверява дали масивът съдържа определен елемент и връща булев резултат.
```
const numbers = [1, 2, 3, 4, 5];
const includesThree = numbers.includes(3);
console.log(includesThree); // Изход: true
```
<br>

**indexOf()**: Намира първото срещане на даден елемент в масива и връща неговия индекс, или -1, ако не е намерен.
```
const fruits = ['apple', 'banana', 'orange'];
const indexOfBanana = fruits.indexOf('banana');
console.log(indexOfBanana); // Изход: 1
```
<br>

**forEach()**: Изпълнява подадена функция веднъж за всеки елемент в масива.
```
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2)); // Извежда удвоените стойности на всички числа в масива
```
<br>

**map()**: Създава нов масив като прилага подадена функция върху всеки елемент на оригиналния масив.
```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Изход: [2, 4, 6, 8, 10]
```
<br>

**find()**: Връща първия елемент в масива, който удовлетворява зададеното условие.
```
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.find(num => num > 3);
console.log(greaterThanThree); // Изход: 4
```
<br>

**filter()**: Създава нов масив, съдържащ всички елементи от оригиналния масив, които удовлетворяват зададеното условие.
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Изход: [2, 4]
```
<br>

**Regular Expressions in JS**
<br>
Regular expressions (regex) в JavaScript са мощен инструмент за работа с текстови данни. Те се използват за търсене на шаблони в низове, за заместване на текст или за валидация на формати на данни.
<br>
Търсене на съвпадения с определен шаблон в низ:
```
const str = 'The quick brown fox jumps over the lazy dog';
const pattern = /fox/;
const match = str.match(pattern);
console.log(match); // Изход: ['fox']
```
Заместване на съвпадения с нов текст:
```
const str = 'The quick brown fox jumps over the lazy dog';
const pattern = /fox/;
const replacedStr = str.replace(pattern, 'cat');
console.log(replacedStr); // Изход: 'The quick brown cat jumps over the lazy dog'
```
Проверка на дали низът отговаря на определен шаблон:
```
const str = '12345';
const pattern = /^\d+$/; // Шаблон за цифри
const isValid = pattern.test(str);
console.log(isValid); // Изход: true
```
Извличане на информация от текст според определени шаблони:
```
const str = 'Name: John, Age: 30, Email: john@example.com';
const pattern = /Age: (\d+)/; // Шаблон за възраст
const match = str.match(pattern);
console.log(match[1]); // Изход: '30'
```
Разделяне на низ според определен шаблон:
```
const str = 'apple,banana,orange';
const pattern = /,/; // Шаблон за запетая
const parts = str.split(pattern);
console.log(parts); // Изход: ['apple', 'banana', 'orange']
```

---


