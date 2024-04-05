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

**C-like syntax (синтаксис, подобен на C):**

- Синтаксисът на JavaScript е вдъхновен от езиците от семейството на C, което прави езика доста удобен за програмисти, които са запознати с езици като C, C++, Java и други.

**Multi-paradigm (многопарадигмен):**

- JavaScript е многопарадигмен език, което означава, че поддържа различни стилове на програмиране като императивно, функционално и обектно-ориентирано програмиране. Това дава гъвкавост на програмистите да използват различни техники и подходи в зависимост от нуждите на тяхната програма.

**Dynamic typing (динамично типизиране):**

- В JavaScript не е необходимо явно да се декларира типа на променливите, което прави програмирането по-гъвкаво и удобно. Променливите в JavaScript могат да променят типа си динамично по време на изпълнение на програмата. Това позволява по-бързо разработване на код и по-голяма гъвкавост при работа с данни.

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


**07.Undefined and Null**
**undefined** и **null** са две различни стойности в JavaScript, които сигнализират за отсъствие на стойност или за "празна" стойност.


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
Когато казваме, че масивите в JavaScript са референтни типове данни, това означава, че променливата, която държи масива, не съдържа директно самите данни на масива, а по-скоро указател (връзка) към областта в паметта, където се намират данните на масива.
<br>

Това има няколко важни последици:
<br>

1. **Присвояване и копиране**: Когато присвоявате или копирате един масив към друга променлива, се копира само указателя (връзката), а не целият масив. Това означава, че и двете променливи (оригиналната и копието) ще сочат към същата област в паметта и ще споделят същите данни. Променяйки единия масив, промените ще се отразят и в другия.

2. **Предаване на параметри по референция:** Когато предавате масив като аргумент на функция в JavaScript, се предава само указателя (връзката) към масива, а не самите данни. Това означава, че функцията може да променя масива и промените ще се отразят на оригиналния масив, който е подаден на функцията.

3. **Динамично управление на паметта:** Работата с референтни типове данни в JavaScript позволява по-ефективно управление на паметта. Масивите могат да се създават и променят динамично, тъй като данните се съхраняват на различни места в паметта и могат да бъдат свързани или освободени по време на изпълнението на програмата.

**Данните могат да бъдат съхранявани на несъседни места в масива:**

- В масивите на JavaScript е възможно да имате елементи, които са разположени на различни места в паметта, а не непрекъснато, както при някои други езици. Това се дължи на динамичния характер на масивите в JavaScript, където елементите могат да бъдат добавяни и премахвани динамично, което може да доведе до фрагментиране на данните в паметта.

**Масивите в JavaScript не се гарантира да бъдат плътни:**

- В някои езици като C или Java, когато декларирате масив, той е с фиксирана дължина и всички елементи са разположени последователно в паметта, като няма празни промеждутъци между тях. В JavaScript обаче, масивите са динамични и могат да имат липсващи или непопълнени елементи, както и да съдържат различни типове данни. Това означава, че масивите в JavaScript не са гарантирани да бъдат плътни, т.е. да съдържат само реално заета памет за всеки елемент. Вместо това, те могат да имат пропуснати елементи или дори да бъдат разпределени в различни области на паметта.
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

**filter()**: Създава нов масив, съдържащ всички елементи от оригиналния масив, които удовлетворяват зададеното условие.
```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Изход: [2, 4]
```
<br>

**slice()**: Извлича част от масива и създава нов масив.
```
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Изход: [2, 3]
```
<br>

**find()**: Връща първия елемент в масива, който удовлетворява зададеното условие.
```
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.find(num => num > 3);
console.log(greaterThanThree); // Изход: 4
```
<br>

**reduce()**: Методът **reduce()** в JavaScript се използва за намаляване (редукция) на масив до единична стойност. Този метод прилага функция върху всеки елемент на масива, аккумулирайки резултата след всяко извикване и връщайки крайния резултат.
```
const numbers = [1, 2, 3, 4, 5];

// Изчисляване на сумата на всички елементи в масива
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Резултат: 15

// Намиране на най-големия елемент в масива
const max = numbers.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity);
console.log(max); // Резултат: 5

// Конкатенация на всички елементи в масива в един низ
const words = ["Hello", " ", "world", "!"];
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(concatenatedString); // Резултат: Hello world!
```
В този пример, при извикването на **reduce()**, първият аргумент е функция, която се прилага върху всеки елемент в масива. Вторият аргумент е началната стойност на акумулатора (в случая 0 или -Infinity). Функцията приема два параметъра: акумулатор и текущ елемент на масива. В края на изпълнението **reduce()** връща крайния резултат.

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

**replace()** в JavaScript се използва за заместване на част от низ с друг низ. Той приема два параметъра: първият е низът или регулярният израз, който искате да замените, а вторият е низът, с който искате да заместите съответната част от оригиналния низ.

- По подразбиране, **replace()** замества само първото срещане на съвпадение между дадения низ или регулярен израз и заместителния низ. За да замените всички срещания, можете да използвате регулярен израз с флага "g" (глобално съвпадение).
<br>

- Можете да използвате символи за обратно рефериране (като **$1**, **$2** и т.н.) в заместителния низ, за да включите части от оригиналния низ в заместването.
<br>

- Можете да използвате регулярни изрази в първия параметър на **replace()**, което прави метода много мощен при заместването на сложни или динамични шаблони в низове.
<br>

- Важно е да отбележите, че **replace()** връща нов низ и не променя оригиналния низ. Ако искате да запазите резултата, трябва да го запишете в променлива.
```
const str = 'JavaScript is awesome!';
const newStr = str.replace('awesome', 'cool');
console.log(newStr); // Output: JavaScript is cool!
```

---

## 03. Functions and Statements

**01.Functions Overview**

- Функцията е именувана подпрограма, предназначена за изпълнение на конкретна задача.
- Функциите се изпълняват, когато бъдат извикани. Това е известно като извикване на функция.
- Стойностите могат да се предават на функции и да се използват вътре в тях.

```
function printStars(count) {
console.log("*".repeat(count));
}
```

**02.Why Use Functions?**

По-управляемо програмиране

- Разделя големите проблеми на малки части
- По-добра организация на програмата
- Подобрява четливостта и разбираемостта на кода
- Избягване на повтарящ се код
- Подобрява поддръжката на кода
- Повторна употреба на кода
- Използване на съществуващи функции няколко пъти

**03.Declaring and Invoking Functions**

Функциите могат да бъдат декларирани по два начина:

- Декларация на функция (препоръчителен начин)
```
function printText(text){
console.log(text);
}
```

- Функционален израз (полезен при функционално програмиране)
```
let printText = function(text){
console.log(text);
}
```

**04.Declaring Function**

- Функциите могат да имат параметри
- Функциите винаги връщат стойност (персонализирана или по подразбиране)
```
function printText(text){
console.log(text);
}
```

**05. Arrow Functions**

- Това е специален съкратен синтаксис. Те оперират само в контекста на скоупа, в който се намират и са полезни във функционалното програмиране.
```
let increment = x => x + 1;
console.log(increment(5)); // 6

let sum = (a, b) => a + b;
console.log(sum(5, 6)); // 11
```
**06. Naming and Best Practices**

- Името на функцията трябва да има смисъл, да отговаря на въпрса **"Какво прави фунцкията"**, и да спазва синтаксиса camelCase.

**07. Functions – Best Practices**

- Функцията трябва да извършва само една добре дефинирана задача!
- Трябва да избягвам фунцкии по-дълги от един екран!
- По-добре е да ги разделя на няколко по-кратки функции.

```
function printReceipt(){
printHeader();
printBody();
printFooter();
}
```
---

## 04. Objects and Classes

**01. What Are Objects**

- Обектите са структурата на свързани данни или функционалност. Съдържа стойности, които са достъпни чрез стрингови ключове.
- Стойностите на данните се наричат **properties**, а стойностите на функциите се наричат **methods**.
- Можем да добавяме и премахваме свойство по време на изпълнение

**02. Object Definition**

- Можем да създадем обект с обектен литерал (object literal)
```
let person = { name:'Peter', age:20, height:183 };
```
- Mожем да дефинираме празен обект и да му добавим свойства по-късно.
```
let person = {};
person.name ='Peter';
person.age = 20;
person.hairColor = 'black';

Можем да добавим свойства и чрез стрингова индексация

person['lastName'] = 'Parker';
```

**03. Methods of Objects**

- Функциите в JavaScript обект се наричат методи. Можем да дефинираме методи, използвайки няколко синтаксиса.
```
let person = {
sayHello: function() {
console.log('Hi, guys');
}
}

let person = {
sayHello() {
console.log('Hi, guys');
}
}
```

- Можем да добавим метод и към вече дефиниран обект.
```
let person = { name:'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');
```
**04. Built-in Method Library**

- Вземане на масив с всчики имена на пропъртитата:
```
Object.keys(cat); // ['name', 'age']
```

- Вземане на масив с всички имена на стойостите:
```
Object.values(cat); // ['Tom', 5]
```

- Вземане на масив от всички пропъртите като key-value tuples:
```
Object.entries(cat); // [['name', 'Tom'], ['age', 5]]
``` 

**05. JSON - JavaScript Object Notation**

- Файлов формат с отворен стандарт, който използва текст за предаване на обекти от данни.
- JSON е самоописващ се и лесен за разбиране, той може да бъде използван в различни програмни езици и е независим от конкретния език за програмиране.

**06. JSON Usage**

- JSON се използва за обмен на данни между браузъра и сървара. Той е по-лек формат в сравнение с XML.
- JavaScript има вградени функции за анализиране на JSON, така, че е лесен за използване.
```
{
"name": "Ivan",
"age": 25,
"grades": {
"Math": [2.50, 3.50],
"Chemistry": [4.50]
}
}
```

**06. JSON Methods**

- Можем да превърнем обект в JSON формат използвайки JSON.stringify(object) method
```
let text = JSON.stringify(obj);
```
- Можем да превърнем JSON формат в обект използвайки JSON.parse(text)method
```
let obj = JSON.parse(text);
```

**07. What is an Associative Array ?**

Масивите, индексирани по низови ключове, съдържат набор от двойки [ключ => стойност].
- Ключът е низ.
- Стойността може да бъде от всякакъв тип.

Асоциативният масив в JavaScript е просто обект, можем да го декларираме динамично.

- Използват се кавички, ако ключът съдържа специални знаци.
```
let assocArr = {
'one': 1,
'two': 2,
'three': 3,
[key]: 6
};
```

- Валидни начини за достъп на стойности чрез ключове.
```
assocArr['four'] = 4;

assocArr.five = 5;

let key = 'six';
assocArr[key] = 6;
```

- Можем да използваме for-in цикъл, за да итерираме през ключовете.
```
let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;
for(let key in assocArr) {
console.log(key + " = " + assocArr[key]);
}
```

**08. Manipulating Associative Arrays**

- Проверяваме дали има ключ.
```
let assocArr = { /* entries */ };
if (assocArr.hasOwnProperty('John Smith')) { /* Key found */ }
```

- Премахване на записи:
```
delete assocArr['John Smith'];
```

**09. Sorting Associative Arrays**

- Обектите не могат да бъдат сортирани; първо трябва да бъдат преобразувани.
  - Преобразуване в масив за сортиране, филтриране и картографиране:
  ```
  let phonebook = { 'Tim': '0876566344',
  'Bill': '0896543112' };
  
  let entries = Object.entries(phonebook);
  console.log(entries); // Array of arrays with two elements each
  // [ ['Tim', '0876566344'],
  // ['Bill', '0896543112'] ]
  
  let firstEntry = entries[0];
  console.log(firstEntry[0]); // Entry key -> 'Tim'
  console.log(firstEntry[1]); // Entry value -> '0876566344'
  ```
**10. Sorting By Key**

- Масивът може да бъде сортиран с помощта на фунцкия за сравнение (compare function).
  - За да сортираме по ключ, използваме първия елемент на всеки запис.

```
entries.sort((a, b) => {
keyA = a[0];
keyB = b[0];
// Perform comparison and return negative, 0 or positive
});
```

- Можем също така и да деструктираме записите:
```
entries.sort(([keyA, valueA],[keyB, valueB]) => {
// Perform comparison and return negative, 0 or positive
});
```

**11. What Are Classes**

В JavaScript, класовете са шаблони за създаване на обекти, които съдържат свойства и методи. Те представляват начин за създаване на обекти с определени характеристики и поведение. 

Един клас може да съдържа свойства (данни) и методи (функции), които определят поведението на обектите, създадени от този клас. За да дефинираме клас в JavaScript, използваме ключовата дума class, следвана от името на класа и тяло, което съдържа свойства и методи.

```
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Създаване на обект от класа Animal
let cat = new Animal("Whiskers", 5);
cat.greet(); // Извежда: Hello, my name is Whiskers and I'm 5 years old.
```

## 05. DOM Introduction

DOM - Document Object Model

**01.Browser API**

Browser Object Model (BOM)

- Браузърите излагат някои обекти като window, screen, navigator, history, location, document, …

**02.Global Context in the Browser**

- The global object in the browser is window

```
let b = 8;
console.log(this.b); // undefined
```
```
var a = 5;
console.log(this.a); // 5
```
```
function foo() {
console.log("Simple function call");
console.log(this === window); // true
}
foo();
```

**03.Document with a Logical Tree**

- **DOM** представя документа като **nodes** и **objects**
  - По този начин езиците за програмиране могат да се свържат със страницата

- HTML DOM е обектен модел за HTML. Той определя:
  - HTML elements като objects
  - Properties
  - Methods
  - Events

**04.DOM Methods**

- DOM methods:  действия, които можем да извършваме върху HTML елементи.
- DOM Properties: стойности на HTML елементи, които можем да задаваме или променяме.

**05.JavaScript може да взаимодейства с уеб страници чрез DOM API:**

- Разликата между **възел (node)** и **дете (child)** е съществена концепция в DOM (Document Object Model), която описва структурата на уеб страница във вид на йерархично дърво от елементи.

**1.Възел (Node):**

- Всички елементи в DOM са възли. Това включва елементи, атрибути, текстови възли и други.
- Възелът може да бъде елемент (например **div, p, a**), атрибут (например **id, class**), текстово съдържание (например текст между два HTML елемента) и други видове.
- Всеки възел може да има деца и родители, **освен ако не е върховен възел (като html)**.

**02.Дете (Child):**

- Дете е всеки директно подчинено елемент (възел) на даден родителски елемент.
- Всеки елемент може да има нула или повече деца, които са други HTML елементи вложени в него.
- Децата могат също да бъдат текстови възли, коментари и други видове възли, но често се отнася към HTML елементите в тях.
- Пример: Ако имаме елемент **div** с две деца - елемент **p** и елемент **a**, тогава **p** и **a** са децата на **div**.

```
<div id="parent">
    <p>Child 1</p>
    <p>Child 2</p>
</div>
```
Споделянето на информацията по този начин позволява на браузърите по-лесно разбират структурата на уеб страниците и да манипулират техните съдържания чрез JavaScript.

---
## 06.HTTP and REST

**HTTP (Hypertext Transfer Protocol)**

HTTP е протокол за предаване на данни на уеб. Той се използва за комуникация между уеб сървъри и клиенти, като браузъри. В основата си, HTTP работи по модел на заявка-отговор, където клиентът (например браузърът) изпраща заявка към сървъра, който отговаря със съответен отговор.

Основни методи на HTTP:

- **GET:** Използва се за заявки, които искат да получат данни от сървъра.
- **POST:** Използва се за създаване на нови данни на сървъра или за изпращане на данни за обработка.
- **PUT:** Използва се за актуализация на съществуващи данни на сървъра.
- **DELETE:** Използва се за изтриване на съществуващи данни на сървъра.
- **PATCH:** Използва се за частична актуализация на съществуващи данни на сървъра.

**Инструменти за разработчици**
1. Браузърни инструменти за разработчици:
Много модерни браузъри като Google Chrome, Mozilla Firefox и Safari предлагат инструменти за разработчици, които могат да бъдат използвани за анализиране на HTTP заявки и отговори, както и за отстраняване на проблеми с уеб приложенията. В Chrome, например, Developer Tools могат да бъдат достъпени чрез натискане на F12 или чрез менюто на браузъра.

2. Postman:
Postman е мощен инструмент за изпращане и тестване на HTTP заявки. Той предоставя графичен потребителски интерфейс, който позволява на разработчиците да създават и изпращат заявки към уеб сървъри, както и да анализират отговорите.

Примерен код:
GET заявка чрез JavaScript с помощта на Fetch API:
```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
```
Този код използва Fetch API, което е съвременен начин за изпращане на HTTP заявки от JavaScript код. Той изпраща GET заявка към URL адреса 'https://api.example.com/data', след което обработва отговора в JSON формат и го извежда в конзолата.

REST (Representational State Transfer)
REST е архитектурен стил за разработване на уеб услуги, които са лесно мащабируеми и гъвкави. Той се базира на няколко принципа:

1.**Ресурси (Resources):** Всичко в системата трябва да бъде представено като ресурс. Ресурсите се идентифицират с URI (Uniform Resource Identifier), като например URL адреси.

2.**Унифициран интерфейс (Uniform Interface):** Интерфейсът между клиентите и сървърите трябва да бъде унифициран и понятен. Това обикновено се постига чрез използване на HTTP методи за извършване на операции върху ресурсите (GET, POST, PUT, DELETE и т.н.).

3.**Без състояние (Stateless):** Всяка заявка от клиента към сървъра трябва да съдържа цялата необходима информация за изпълнението на заявката. Сървърът не трябва да пази информация за състоянието на клиента между заявките.

4.**Кеширане (Cacheable):** Отговорите на заявките трябва да могат да бъдат кеширани, за да се намали използването на мрежови ресурси.

5.**Следване на хипермедия (Hypermedia As The Engine Of Application State - HATEOAS):** Клиентите трябва да могат да навигират през системата чрез хипермедия (например, чрез хипервръзки в отговорите на заявките).

**RESTful Услуги**
RESTful услуги са уеб услуги, които следват принципите на REST. Те използват HTTP методи за извършване на операции върху ресурси и връщат отговори в структуриран формат като JSON или XML.

Ето как може да изглежда дефиниране на RESTful услуга чрез Node.js и Express:

```
const express = require('express');
const app = express();
const port = 3000;

// Дефиниране на GET заявка за вземане на данни за ресурс
app.get('/api/resource', (req, res) => {
  // Логика за вземане на данните за ресурса
  res.json({ message: 'Data for resource' });
});

// Дефиниране на POST заявка за създаване на нов ресурс
app.post('/api/resource', (req, res) => {
  // Логика за създаване на новия ресурс
  res.json({ message: 'Resource created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
Този код използва Express.js за създаване на уеб сървър. Дефинират се два маршрута (/api/resource) за обработка на GET и POST заявки. GET заявката връща данните за ресурса в JSON формат, а POST заявката създава нов ресурс и връща съобщение за успех.

**Node Package Manager (NPM)**

Node Package Manager (NPM) е стандартен пакетен мениджър за Node.js платформата. Той се използва за инсталиране, публикуване и управление на пакети от JavaScript код, които могат да бъдат използвани във вашите проекти. 

1. **Инсталиране на пакети:** Можете лесно да инсталирате пакети от NPM хранилището чрез командата **npm install**. Например, ако искате да инсталирате пакета **lodash**, просто изпълнете **npm install lodash**.

2. **Управление на зависимости:** NPM автоматично управлява зависимостите на проектите ви чрез файла **package.json**. Това ви позволява да декларирате зависимостите на вашите проекти и да ги инсталирате лесно чрез командата **npm install**.

3. **Публикуване на пакети:** Можете да публикувате собствени пакети в NPM хранилището, което позволява на другите разработчици да ги използват. За да публикувате пакет, използвайте командата **npm publish**.

4. **Локално управление на пакети:** Можете да управлявате пакетите локално за вашия проект, като използвате команди като **npm outdated** за проверка на остарели пакети и **npm update** за обновяване на зависимостите.

5. **Изпълняване на скриптове:** NPM ви позволява да дефинирате и изпълнявате собствени скриптове във вашия проект чрез секцията **"scripts"** във вашия **package.json** файл. Например, можете да дефинирате скрипт за стартиране на вашия уеб сървър или за изпълнение на тестове.

6. **Версии на пакети:** NPM позволява ви да инсталирате специфични версии на пакети чрез указване на техните версии при инсталация, например **npm install package@1.0.0**.

---
## 07. Asynchronous Programming

**Promise**

**.all()** - Returns a new promise that can be accessed as an array of resolved values of fulfilled promises.

**.allSettled()** - Returns a new Promise object that resolves to an array after all Promises in an iterable object have been resolved or rejected.

**.any()** - Iterates over an iterableObject of Promises and stops at the first one that fulfills. The resulting value from that fulfilled Promise is resolved in the returned Promise object.

**.catch()** - Returns a new Promise related to a previously rejected Promise in the chain. This is ideal for formatting error messages for potential Promise rejections.

**.finally** - Returns a new Promise object after the previous Promise in the chain has been resolved or rejected. This last part of the chain will execute no matter what.

**.race()** - Returns the first Promise in an iterableObject that is either resolved or rejected.

**.reject()** - Returns a rejected Promise object with a given reason.

**.resolve()** - Returns a new Promise object that turns into the value that was passed to the method.

**.then()** - Returns a new Promise object.

