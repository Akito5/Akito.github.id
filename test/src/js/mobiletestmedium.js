const questions = [
	{
		
		question: "Что будет записано в переменную test? <pre> var a = 5; var test = 5 != a? 'Yes' : 'No'; </pre>",
		answers: ["Yes", "a", "5", "No"],
		correct: 4,
	},
	{
		question: "Какое количество сообщений будет выведено в консоль? <pre>for(var i = 10; i < 35; i += 5) {console.log(i);}</pre>",
		answers: [
			"6",
			"25",
			"Такой цикл работать не будет",
			"5",
		],
		correct: 3,
	},
	{
		question: "Что будет выведено в консоль? <pre>var b = 10; if (b % 3==0){var i=10;}console.log(i);</pre>",
		answers: [
			"Значение Nan",
			"Значение undefined",
			"Число 10",
			"Форумы",
		],
		correct: 2,
	},
	{
		question: "Чем завершается инструкция в JavaScript?",
		answers: ["/", ":", ";", ">"],
		correct: 3,
	},
	{
		question: "Какой метод выводит на консоль текст в JavaScript?",
		answers: ["System.out.println", "System.out.print", "System.int.println", " System.out.printlm"],
		correct: 1,
	},
	{
		question: "Как пишется однострочный коментарий в JavaScript?",
		answers: [
			"//",
			"/",
			"/*",
			"#",
		],
		correct: 2,
	},
	{
		question: "Как объявляется константа в JavaScript?",
		answers: [
			"Final",
			"Int ",
			"Public",
			"void",
		],
		correct: 1,
	},
	{
		question: "Отметьте ключевые слова языка Java:",
		answers: [
			"mod",
			"null ",
			"false",
			"default",
		],
		correct: 4,
	},
	{
		question: "Сколько объектов порождается при инициализации массива new int[3][]?",
		answers: [
			"ни одного, так как код не будет скомпилирован ",
			"3",
			"1",
			"2",
		],
		correct: 3,
	},
	{
		question: "Какие утверждения относительно класса String верны? ",
		answers: [
			"содержит только статические методы",
			"обладает свойством неизменяемости от этого класса ",
			"является абстрактным  ",
			"можно унаследоваться",
		],
		correct: 2,
	},
	{
		question: "Какие значения может принимать переменная булева типа? ",
		answers: [
			"true ",
			"null",
			"0",
			"1",
		],
		correct: 1,
	},
	{
		question: "Вы создали класс Animal в пакете ru.animal. Где будет хранится исходный код класса в файловой системе?",
		answers: [
			"ru\animal\Animal.class ",
			"ru\animal\Animal.java",
			"ru\Animal.class ",
			"ru\Animal.java ",
		],
		correct: 2,
	},
	{
		question: "Может ли массив основываться на абстрактных классах? Интерфейсах?Какие  ",
		answers: [
			"да, да ",
			"да, нет ",
			"нет, нет ",
			"нет, да",
		],
		correct: 1,
	},
	{
		question: "Отметьте строковые литералы языка Java ",
		answers: [
			"» ",
			"» ",
			"«» ",
			"‘\u0041’",
		],
		correct: 3,
	},
	{
		question: "Что такое приоритет потока?",
		answers: [
			"порядковый номер потока в очереди на исполнение ",
			"количество интервалов времени, в течение которого процессор будет обслуживать поток ",
			"процессор сначала выполняет все задачи с более высоким приоритетом, затем – с менее высоким",
			"качественная характеристика, обеспечивающая распределение процессорного времени между потоками: чем выше приоритет, тем в среднем чаще будет выделяться процессорное время для такого потока",
		],
		correct: 4,
	},
	{
		question: "Какое утверждение относительно методу класса верное?  ",
		answers: [
			"к методу, объявленному с модификаторами public final, нельзя обратиться из класса-наследника",
			"метод, объявленный с модификатором final, не может быть переопределен в классе-наследнике ",
			"методы не могут иметь модификатор доступа default ",
			"идентификатор метода при объявлении становится составным именем метода",
		],
		correct: 2,
	},
	{
		question: "Какой метод нужно переопределить, чтобы реализовать отрисовку внешнего вида компонента?   ",
		answers: [
			"show ",
			"repaint",
			"update",
			"paint",
		],
		correct: 4,
	},
	{
		question: "Какое ключевое слово указывает на то, что метод ничего не возвращает?",
		answers: [
			"Void",
			"Public",
			"Static",
			"String",
		],
		correct: 1,
	},
	{
		question: "Что означает переопределение метода в Java (override)?  ",
		answers: [
			"Изменение поведения метода класса относительно родительского",
			"Изменение поведения метода класса относительно дочернего",
			"Несколько методов с одинаковым названием, но разным набором параметров",
			"Несколько методов с одинаковым названием, но разным набором параметров",
		],
		correct: 1,
	},
	{
		question: "Что такое ООП?",
		answers: [
			"Объектно-ориентированное программирование — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определенного класса",
			"Объектно-ориентированное программирование — так называют любой тип программирования, в котором используются понятия высокого уровня и,в котором не работают напрямую с ячейками памяти ПК.",
			"Объектно-ориентированное программирование — просто красивое понятие. Если вдуматься, оно не несет дополнительной смысловой нагрузки, просто программисты любят аббревиатуры.",
			"Очень одинокий программист.",
		],
		correct: 1,
	},
	{
		question: "Что такое класс в Java?  ",
		answers: [
			"Уровень сложности программы. Все операторы делятся на классы в зависимости от сложности их использования.",
			"Базовый элемент объектно-ориентирован¬ного программирования в языке Java.",
			"Просто одно из возможных названий переменной.",
			"Просто одно из возможных названий переменной.",
		],
		correct: 2,
	},
	{
		question: "Как объявить класс в коде?  ",
		answers: [
			"class MyClass {}",
			"new class MyClass {}",
			"select * from class MyClass {}",
			"MyClass extends class {}",
		],
		correct: 1,
	},
	{
		question: "Для чего используется оператор NEW?  ",
		answers: [
			"Для чего используется оператор NEW?",
			"Для объявления нового класса",
			"Для создания экземпляра класса",
			"Это антагонист оператора OLD",
		],
		correct: 3,
	},
	{
		question: "Что означает ключевое слово extends? ",
		answers: [
			"Что данный класс наследуется от другого",
			"Что это дополнительный модуль класса, который расширяет его свойства",
			"Что два класса делают одно и то же",
			"Что это самый большой класс в программе",
		],
		correct: 1,
	},
	{
		question: "Что означает перегрузка метода в Java (overload)?  ",
		answers: [
			"Изменение поведения метода класса относительно родительского",
			"Изменение поведения метода класса относительно дочернего",
			"Несколько методов с одинаковым названием, но разным набором параметров",
			"Несколько разных классов с одинаковым методом",
		],
		correct: 3,
	},
	////////////////////////////////////
	{
		question: "Чем отличаются static-метод класса от обычного метода класса?  ",
		answers: [
			"Поведение обычного метода класса можно изменить в классе-наследнике, а поведение static-метода нельзя",
			"Обычный метод класса можно переопределить, а static-метод нельзя",
			"Обычный метод класса работает от объекта класса, а static-метод от всего класса",
			"Static-метод класса можно вызывать только внутри класса, а обычный - в любой части кода",
		],
		correct: 3,
	},
	{
		question: "Как вызвать static-метод внутри обычного?  ",
		answers: [
			"Никак, static-метод можно вызвать только от объекта класса",
			"Можно, надо перед этим перегрузить обычный метод класса",
			"Можно, надо перед этим переопределить обычный метод класса",
			"Можно, ничего дополнительно делать не надо",
		],
		correct: 4,
	},
	{
		question: "Для чего необходимо ключевое слово this?  ",
		answers: [
			"Это указатель на переопределенный метод класса. Его нельзя опускать при вызове, иначе переопределение не сработает",
			"Это указатель на текущий объект класса внутри самого класса. Его можно опускать при вызове метода класса, но лучше этого не делать",
			"Это не ключевое слово",
			"Это ключевое слово для вызова обычного метода внутри static-метода. Его нельзя опускать, иначе вызов не сработает и будет ошибка",
		],
		correct: 2,
	},
	{
		question: "Что вернет метод, объявленный следующим образом: public static int getAmount()",
		answers: [
			"Не ясно, надо смотреть код метода",
			"Вернет static-поле класса",
			"Вернет ссылку на объект класса this",
			"Вернет целочисленное значение",
		],
		correct: 4,
	},
	{
		question: "Где верно указан запуск всплывающего окна?  ",
		answers: [
			"new alert ('Hi')",
			"info ('Hi')",
			"Нет верных вариантов",
			"alert ('Hi')",
		],
		correct: 4,
	},
	{
		question: "Какие циклы есть в языке JavaScript?  ",
		answers: [
			"for, forMap, foreach, while",
			"for, forMap, foreach, while, do while",
			"for, while, do while",
			"for, while, do while, foreach",
		],
		correct: 3,
	},
	{
		question: "Что такое условный оператор?  ",
		answers: [
			"Конструкция для создания определенной переменной",
			"Оператор сравнения значений",
			"Конструкция, что выполняет код несколько раз",
			"Оператор присваивания значений",
		],
		correct: 2,
	},
	{
		question: "Какие значения можно хранить в переменных?  ",
		answers: [
			"Строки, числа с точкой, простые числа и булевые выражения",
			"Строки, простые числа и булевые выражения",
			"Только числа и строки",
			"Строки, числа с точкой и простые числа",
		],
		correct: 1,
	},
	{
		question: "Где можно использовать JavaScript?  ",
		answers: [
			"Мобильные приложения",
			"Веб-приложения",
			"Прикладное программное обеспечение",
			"Можно во всех перечисленных",
		],
		correct: 4,
	},
	{
		question: "В чем разница между confirm и prompt?  ",
		answers: [
			"Они ничем не отличаются",
			"confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением",
			"prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением",
			"prompt вызывает диалоговое окно с полем для ввода и подтверждения, confirm - окно с подтверждением",
		],
		correct: 3,
	},
	{
		question: "В чем отличие между локальной и глобальной переменной?  ",
		answers: [
			"Глобальные видны повсюду, локальные только в функциях",
			"Локальные можно переопределять, глобальные нельзя",
			"Локальные видны повсюду, глобальные только в функциях",
			"Отличий нет",
		],
		correct: 1,
	},
	{
		question: "Какие функции выполняет JS?  ",
		answers: [
			"Создает стилевое оформление сайта",
			"Создает разметку на странице сайта",
			"Отвечает за работу с базами данных",
			"Отвечает за функции на стороне клиента",
		],
		correct: 4,
	},
	{
		question: "Где верно указано имя переменной?  ",
		answers: [
			"var 2num;",
			"var num-1;",
			"var num_1;",
			"ver num;",
		],
		correct: 3,
	},
	{
		question: "Где верно указан вывод данных?  ",
		answers: [
			"print(Hello);",
			"console.log('Hello');",
			"documentWrite('Hello');",
			"write('Hello');",
		],
		correct: 2,
	},
	{
		question: "Что выведет код ниже?<pre>for(let key in  {1:1, 0:0}) {alert(key); }</pre> ",
		answers: [
			"1, затем 0.",
			"В коде ошибка.",
			"0, затем 1",
			"Зависит от браузера",
		],
		correct: 3,
	},
	{
		question: "Что получится, если сложить true + false?  ",
		answers: [
			"truefalse",
			"1",
			"0",
			"NaN",
		],
		correct: 2,
	},
	{
		question: "Чему равна длина arr.length массива arr? <pre>let arr = []; arr[1] = 1; arr[3] = 33;</pre>  ",
		answers: [
			"0",
			"2",
			"3",
			"4",
		],
		correct: 4,
	},
	{
		question: "Что выведет этот код? alert( '1'[0] );",
		answers: [
			"0",
			"2",
			"1",
			"В коде ошибка",
		],
		correct: 3,
	},
	{
		question: "Что выведет код ниже? <pre> let obj = {'1': 0, 1: 1, 0: 2} alert(obj['1']);</pre> ",
		answers: [
			"0",
			"1",
			"2",
			"В коде ошибка",
		],
		correct: 2,
	},
	{
		question: "Что делает оператор **?  ",
		answers: [
			"Возводит в степень",
			"Умножает число само на себя",
			"Нет такого оператора",
			"Возводит в куб",
		],
		correct: 1,
	},
	{
		question: "Какие из этих вариантов задают массив из элементов «a», «b»?  ",
		answers: [
			"let a = new Array('a','b')",
			"let a = { 'a','b'}",
			"let a = ( 'a','b' )",
			"let a = 'a,'b'.split(",")",
		],
		correct: 1,
	},
	{
		question: "Существует ли такое значение X, что после присваивания a = X вызов alert(a == X) выдаст false? let a = X; alert( a == X ); // false",
		answers: [
			"Да, X – это undefined",
			" Да, X – это null",
			"Да, другое",
			"Нет, не бывает",
		],
		correct: 3,
	},
	{
		question: "Какие из этих вызовов синтаксически верно сгенерируют исключение?  ",
		answers: [
			"throw Error('Ошибка')",
			"throw { message: 'Ошибка'}",
			"throw new Error('Ошибка')",
			"Все варианты верны",
		],
		correct: 4,
	},
	{
		question: "Что выведет этот код? if (function f(){}) { alert(typeof f);} ",
		answers: [
			"number",
			"undefined",
			"function",
			"ошибка",
		],
		correct: 1,
	},
	{
		question: "Есть ли различия между проверками: if( x <= 100 ) {...} // и if( !(x > 100) ) {...}",
		answers: [
			"Да, существует значение x, для которого они работают по-разному",
			"Зависит от браузера",
			"Нет, они полностью взаимозаменяемы",
			"Зависит от среды разработки",
		],
		correct: 1,
	},
	
];

//Находим элементы
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

//Переменные теста
let score = 0; // Кол-во правильных ответов
let questionIndex = 0; //текущий вопрос

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
headerContainer.innerHTML = '';
listContainer.innerHTML = '';
}

function showQuestion(){
	console.log('showQuestion');
//Вопрос
	const headerTemplate = '<h2 class="title">%title%</h2>';
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

//Варианты ответов
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']) {
		const questionTemplate =
	 `<li>
		<label>
			<input value="%number%" type="radio" class="answer" name="answer" />
			<span>%answer%</span>
		</label>
	</li>`;

	const answerHTML = questionTemplate
				.replace('%answer%', answerText)
				.replace('%number%', answerNumber);
		
	listContainer.innerHTML += answerHTML;
	answerNumber++;
	}

}

function checkAnswer(){
	console.log('checkAnswer started!');

	//Находим выбранную радио кнопку
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
    
	//Если ответ не выбран - ничего не происходит и выходим из функции
	if(!checkedRadio) {
		console.log('OK');
		return
	}

	//Узнаем номер ответа
	const userAnswer = parseInt(checkedRadio.value)

	//Если ответ верно - увеличиваем счет
	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}
	console.log('score = ', score);

	if (questionIndex !== questions.length - 1){
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		clearPage();
		showResults();
	}
}
 function showResults (){
	console.log('showResults started!');
	console.log(score);

	const resultsTemplate = 
	`<h2 class="title">%title%</h2>
	<h3 class="summary">%message%</h3>
	<p class="result">%result%</p>`;

	let title, message;
	//Варианты заголовков и текста
	if(score === questions.length) {
		title = 'Поздравляем!';
		message = 'Вы ответили на все вопросы!';
	} else if ((score*100) / questions.length >= 50){
		title = 'Неплохой результат';
		message = 'Вы дали более половины правильных ответов';
	} else {
		title = 'Стоит постараться';
		message = 'Пока у вас меньше половины правильных ответов';
	}

	//Результат
	let result = `${score} из ${questions.length}`;

	//Финальный ответ, подставляем данные в шаблон
	const finalMessage = resultsTemplate
								.replace('%title%', title)
								.replace('%message%', message)
								.replace('%result%', result)
	
	headerContainer.innerHTML = finalMessage;

	//Меняем кнопку на "Пройти тест заново"
	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();
 }