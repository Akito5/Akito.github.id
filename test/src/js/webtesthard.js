const questions = [
	{
		question: "Web-сайт – это…?",
		answers: ["Страница или документ с информацией, который расположен в интернете", "Компьютерная программа", "Комплекс программ и технических средств", "Набор HTML-страниц, связанных между собой ссылками"],
		correct: 1,
	},
	{
		question: "Какие вид сайтов относится к Landing page?",
		answers: [
			"Корпоративные сайты",
			"Интернет-магазины",
			"Сайты-опросники",
			"Информационные",
		],
		correct: 3,
	},
	{
		question: "Какой вид сайтов не относится к Landing page?",
		answers: [
			"Сайты визитки ",
			"Одностраничный интернет-магазин",
			"Сайты-опросники",
			"Форумы",
		],
		correct: 4,
	},
	{
		question: "Выберите правильный порядок этапов создания сайтов?",
		answers: ["Вёрстка - Дизайн - Программирование - Интервью - Продвижение", "Программирование - Дизайн - Интервью - Вёрстка - Продвижение", "Продвижение - Дизайн - Программирование - Интервью - Вёрстка", "Интервью - Дизайн – Вёрстка – Программирование - Продвижение "],
		correct: 4,
	},
	{
		question: "Что относится к Frontend разработке?",
		answers: ["PHP", "JavaScript", "Базы данных", " Python"],
		correct: 2,
	},
	{
		question: "Что относится к Backend разработке?",
		answers: [
			"HTML",
			"PUG",
			"CSS",
			"CMS",
		],
		correct: 4,
	},
	{
		question: "Какой формат картинок используется для больших картинок заднего фона?",
		answers: [
			"PNG",
			"GIF",
			"JPEG",
			"BMP",
		],
		correct: 3,
	},
	{
		question: "Какой формат картинок используется для улучшенного качества картинок и их меньшего размера?",
		answers: [
			"PDF",
			"WEBP",
			"PNG",
			"JPEG",
		],
		correct: 2,
	},
	{
		question: "Какой формат картинок используется для улучшенного качества картинок и их меньшего размера?",
		answers: [
			"PNG",
			"RAW",
			"AI",
			"SVG",
		],
		correct: 4,
	},
	{
		question: "Выберите не парный тег",
		answers: [
			"meta",
			"h5",
			"ol",
			"b",
		],
		correct: 1,
	},
	{
		question: "Выберите парный тег",
		answers: [
			"meta",
			"body",
			"/html",
			"head",
		],
		correct: 4,
	},
	{
		question: "Что делает тег br ?",
		answers: [
			"Создаёт элементы списка",
			"Проводит линию",
			"Выделяет текст курсивом",
			"Переносит текст на другую строку",
		],
		correct: 4,
	},
	{
		question: "Что делает тег ol?",
		answers: [
			"Выделяет текст жирным",
			"Создаёт пункты меню",
			"Располагает элементы по порядку",
			"Делает заголовок текста",
		],
		correct: 2,
	},
	{
		question: "Что делает тег hr?",
		answers: [
			"Проводит линию",
			"Делает акцент на важном",
			"Переносит текст на другую строку",
			"Разделяет абзацы текста, идущие друг за другом отбивкой",
		],
		correct: 1,
	},
	{
		question: "Что делает тег li?",
		answers: [
			"Создаёт элементы списка",
			"Располагает элементы по порядку",
			"Делает подчёркнутый текст",
			"Делает непосредственное перечисление по пунктам",
		],
		correct: 4,
	},
	{
		question: "Что делает тег ul?",
		answers: [
			"Тип перечисления",
			"Устанавливает маркированный список",
			"Делает текст в нижнем регистре",
			"Добавляет фоновый цвет тексту",
		],
		correct: 2,
	},
	{
		question: "Что делает тег p?",
		answers: [
			"Проводит линию",
			"Делает текст зачёркнутым ",
			"Разделяет абзацы текста, идущие друг за другом отбивкой",
			"Выделяет текст произвольно",
		],
		correct: 3,
	},
	{
		question: "Атрибуты это...?",
		answers: [
			"Дополнительные параметры, которые можно указывать у HTML тегов для того, чтобы их модифицировать",
			"Основные параметры, которые нельзя указывать у HTML тегов",
			"Параметры, которые не могут быть указаны у HTML тегов, так как они не имеют никакого смысла",
			"Параметры, которые указывают на местоположение файла, но не могут быть использованы у HTML тегов",
		],
		correct: 1,
	},
	{
		question: "Какой тег относится к стилистическим?",
		answers: [
			"li",
			"h1",
			"em",
			"br",
		],
		correct: 3,
	},
	{
		question: "Что делает тег u?",
		answers: [
			"Переносит текст в нижний регистр",
			"Делает текст подчеркнутым",
			"Создаёт элементы списка",
			"Переносит текст в верхний регистр",
		],
		correct: 2,
	},
	{
		question: "Что делает тег div?",
		answers: [
			"Делает текст зачёркнутым",
			"Зачеркивает текст",
			"Выделяет текст курсивом",
			"Создаёт блоки ",
		],
		correct: 4,
	},
	{
		question: "Что делает тег img?",
		answers: [
			"Делает текст курсивным.",
			"Отображения изображений на сайте ",
			"Делает акцент на тексте, имеющем особое значение",
			"Проводит линию",
		],
		correct: 2,
	},
	{
		question: "Что делает тег mark?",
		answers: [
			"Проводит линию",
			"Позволяет выделить часть текста",
			"Переносит текст в нижний регистр",
			"Делает текст подчеркнутым",
		],
		correct: 1,
	},
	{
		question: "Что делает тег span?",
		answers: [
			"Переносит текст в верхний регистр",
			"Зачеркивает текст",
			"Делает акцент на тексте, имеющем особое значение",
			"Позволяет выделить часть текста",
		],
		correct: 4,
	},
	{
		question: "Что делает тег strong?",
		answers: [
			"Делает вокруг текста фоновый цвет",
			"Переносит текст на новую строку ",
			"Логическое выделение жирным",
			"Делает текст подчеркнутым",
		],
		correct: 3,
	},
	{
		question: "Что делает тег i?",
		answers: [
			"Создания внешние ссылки",
			"Выделяет текст курсивом",
			"Позволяет выделить часть текста",
			"Создаёт блоки",
		],
		correct: 2,
	},
	{
		question: "Что делает тег еm?",
		answers: [
			"Проводит линию",
			"Тип перечисления",
			"Выделяет текст произвольно",
			"Делает акцент на тексте, имеющем особое значение",
		],
		correct: 4,
	},
	{
		question: "Что делает тег sub?",
		answers: [
			"Переносит текст в верхний регистр",
			"Зачеркивает текст",
			"Делает текст курсивным",
			"Переносит текст в нижний регистр",
		],
		correct: 1,
	},
	{
		question: "Что делает тег b?",
		answers: [
			"Делает текст подчеркнутым",
			"Логическое выделение жирным",
			"Выделяет текст жирным начертанием",
			"Делает вокруг текста фоновый цвет",
		],
		correct: 3,
	},
	{
		question: "Что делает тег s?",
		answers: [
			"Делает текст подчеркнутым",
			"Зачеркивает текст",
			"Позволяет выделить часть текста",
			"Логическое выделение жирным",
		],
		correct: 2,
	},
	{
		question: "Что делает тег a?",
		answers: [
			"Содержит основное содержание документа",
			"Оформление записи в блоке",
			"Делает текст подчеркнутым",
			"Создаёт внешние ссылки ",
		],
		correct: 4,
	},
	{
		question: "Что делает тег sup?",
		answers: [
			"Переносит текст в верхний регистр",
			"Зачеркивает текст",
			"Делает текст курсивным",
			"Переносит текст в нижний регистр",
		],
		correct: 4,
	},
	{
		question: "Что делает тег section?",
		answers: [
			"Зачеркивает текст",
			"Источник, откуда приходит картинка",
			"Разграничивает секции на стайте",
			"Описывает время, которое мы ходим показать пользователю",
		],
		correct: 3,
	},
	{
		question: "Что делает тег wbr?",
		answers: [
			"Перенос строки там, где это нужно",
			"Перенос строки",
			"«Подвал» сайта",
			"Выделяет текст жирным начертанием",
		],
		correct: 1,
	},
	{
		question: "Что делает тег article?",
		answers: [
			"Основное содержание документа",
			"Оформление записи в блоке",
			"Создаёт блоки",
			"Адрес компании, для которой создается сайт",
		],
		correct: 2,
	},
	{
		question: "Что делает тег main?",
		answers: [
			"Тег для создания пунктов меню",
			"Шапка сайта",
			"Основное содержание документа",
			"Путь, куда необходимо перейти при клике на ссылку",
		],
		correct: 3,
	},
	{
		question: "Что делает тег aside?",
		answers: [
			"Оформляет отдельные колонки в какие-то виджеты",
			"Оформляет отдельные колонки в какие-то виджеты",
			"Делает вокруг текста фоновый цвет",
			"Создает внешние ссылки",
		],
		correct: 1,
	},
	{
		question: "Что делает тег nav?",
		answers: [
			"Делает заголовок текста",
			"Делает навигационное меню",
			"Создает элементы списка",
			"Логическое выделение жирным",
		],
		correct: 2,
	},
	{
		question: "Что делает тег header?",
		answers: [
			"Шапка сайта",
			"«Подвал» сайта",
			"Адрес компании, для которой создается сайт",
			"Тег для создания пунктов меню",
		],
		correct: 1,
	},
	{
		question: "Что делает тег fotter?",
		answers: [
			"Перенос строки",
			"«Подвал» сайта",
			"Делает навигационное меню",
			"Название вкладки ",
		],
		correct: 2,
	},
	{
		question: "Что делает тег link?",
		answers: [
			"Создает элементы списка",
			"Путь, куда необходимо перейти при клике на ссылку",
			"Оформление записи в блоке",
			"Подключение файлов",
		],
		correct: 4,
	},
	{
		question: "Какой атрибут имеет тег link?",
		answers: [
			"rel=“”",
			"rel=“”",
			"alt=””",
			"type=””",
		],
		correct: 2,
	},
	{
		question: "Что делает тег text-align?",
		answers: [
			"Определяет стиль текста",
			"Определяет размер текста",
			"Определяет расположение текста",
			"Делает все буквы заглавными, уменьшенными",
		],
		correct: 3,
	},
	{
		question: "Что делает тег font-styleitalic?",
		answers: [
			"Выделает текст курсивом",
			"Выделяет текст жирным",
			"Делает текст подчеркнутым",
			"Делает текст подчеркнутым",
		],
		correct: 1,
	},
	{
		question: "Что делает тег text-decorationunderline?",
		answers: [
			"Делает текст зачеркнутым",
			"Позволяет выделить часть текста",
			"Выделяет текст жирным начертанием",
			"Делает текст подчеркнутым",
		],
		correct: 4,
	},
	{
		question: "Что делает тег text-transformuppercase?",
		answers: [
			"Делает все буквы строчным",
			"Делает все буквы заглавными",
			"Выделяет текст жирным начертанием",
			"Делает текст курсивным",
		],
		correct: 2,
	},
	{
		question: "Что делает тег text-decorationline-through?",
		answers: [
			"Делает текст подчеркнутым",
			"Делает текст зачеркнутым",
			"Делает все буквы заглавными, уменьшенными",
			"Определяет декорации, которые можно применить к тексту",
		],
		correct: 2,
	},
	{
		question: "Какой тег определяет цвет?",
		answers: [
			"bgcolor",
			"background",
			"color",
			"size",
		],
		correct: 3,
	},
	{
		question: "Какой тег определяет размер текста?",
		answers: [
			"text",
			"size",
			"font-style",
			"fontsize",
		],
		correct: 4,
	},
	{
		question: "Какой тег определяет расположение текста?",
		answers: [
			"font-size",
			"text-align",
			"font-style",
			"text-transform",
		],
		correct: 2,
	},
	{
		question: "Что делает тег flex-wrap?",
		answers: [
			"Тег HTML, который управляет расположением элементов на странице",
			"Позволяет создавать более гибкие и адаптивные веб-страницы",
			"Задаёт правила вывода flex-элементов",
			"Это функция javascript, которая позволяет управлять поведением элементов на странице",
		],
		correct: 3,
	},
	{
		question: "Какой тег делает текст жирным в CSS?",
		answers: [
			"b",
			"strong",
			"font-weight",
			"еm",
		],
		correct: 3,
	},
	{
		question: "Какой тег определяет стиль текста?",
		answers: [
			"font-style",
			"text-decoration",
			"text-align",
			"text-transform",
		],
		correct: 1,
	},
	{
		question: "Какой тег делает все буквы заглавными?",
		answers: [
			"text-transform",
			"text-transform capitalize ",
			"text-transform lowercase ",
			"text-transform uppercase ",
		],
		correct: 4,
	},
	{
		question: "Какой тег декорации, которые можно применить к тексту?",
		answers: [
			"text-decoration",
			"text-align",
			"text-transform",
			"font-style",
		],
		correct: 1,
	},
	{
		question: "Выберите уникальный идентификатор",
		answers: [
			"h2 color blue;",
			"class = “down”",
			"#Class",
			"id",
		],
		correct: 3,
	},
	{
		question: "Выберите класс",
		answers: [
			"p color red;",
			"id = “align",
			"#class",
			"id",
		],
		correct: 4,
	},
	{
		question: "Какое значение justify-content равномерно распределяет блоки вдоль главной оси?",
		answers: [
			"baseline",
			"space-between",
			"flex-end",
			"space-around",
		],
		correct: 4,
	},
	{
		question: "Выберите селектор?",
		answers: [
			"selector",
			"#Hole",
			"text",
			"li text-transform lowercase",
		],
		correct: 2,
	},
	{
		question: "Padding это...?",
		answers: [
			"Ширина элемента",
			"Отступ, который отвечает за позиционирование блока на странице",
			"Граница между контентом и границей, которая отделяет контент от «внешего мира»",
			"Граница, которая очеркивает блок от «внешнего мира»",
		],
		correct: 3,
	},
	{
		question: "Margin это...?",
		answers: [
			"Отступ, который отвечает за позиционирование блока на странице",
			"Граница между контентом и границей, которая отделяет контент от «внешего мира»",
			"Граница, которая очеркивает блок от «внешнего мира»",
			"Высота элемента",
		],
		correct: 1,
	},
	{
		question: "Что делает тег padding 20px?",
		answers: [
			"Отступ 20px сверху",
			"Отступ 20px сверху и справа",
			"Отступ 20px со всех сторон",
			"Отступ 20px снизу",
		],
		correct: 3,
	},
	{
		question: "Что делает тег padding 30px 50px?",
		answers: [
			"30px - вертикальные отступы, 50px - горизонтальные отступы",
			"30px – отступ сверху, 50px – отступ справа",
			"50px - вертикальные отступы, 30px - горизонтальные отступы",
			"50px – отступ сверху, 30px – отступ справа",
		],
		correct: 1,
	},
	{
		question: "Что делает тег padding 20px 50px 40px 60px?",
		answers: [
			"20px – снизу, 50px – слева, 40px – сверху, 60px – справа",
			"20px – сверху, 50px – справа, 40px – снизу, 60px – слева",
			"20px – слева, 50px – снизу, 40px – справа, 60px – сверху",
			"20px – справа, 50px – сверху, 40px – снизу, 60px – слева",
		],
		correct: 2,
	},
	{
		question: "Что делает тег border 3px solid black",
		answers: [
			"Граница шириной 3px, сплошная линия;",
			"Граница шириной 3px, прерывистая линия, черный цвет;",
			"Граница шириной 3px, черный цвет;",
			"Граница шириной 3px, сплошная линия, черный цвет;",
		],
		correct: 4,
	},
	{
		question: "Выберите вид элементов по структуре?",
		answers: [
			"Строчные",
			"Строчные",
			"Селекторы",
			"Значения",
		],
		correct: 2,
	},
	{
		question: "Какой тег применяется для изменения алгоритма расчета ширины и высоты элемента?",
		answers: [
			"box-sizing",
			"size",
			"resize",
			"font-size",
		],
		correct: 1,
	},
	{
		question: "Какое позиционирование элементов применяется по умолчанию??",
		answers: [
			"inherit",
			"absolute",
			"static",
			"inherit",
		],
		correct: 3,
	},
	{
		question: "Какое позиционирование элементов располагает элемент в том месте, где это необходимо??",
		answers: [
			"absolute",
			"inherit",
			"fixed",
			"relative",
		],
		correct: 1,
	},
	{
		question: "Какое позиционирование элементов наследуется у родителя??",
		answers: [
			"fixed",
			"absolute",
			"static",
			"inherit",
		],
		correct: 4,
	},
	{
		question: "Что делает тег background?",
		answers: [
			"Определяет, насколько далеко должен простираться фон внутри элемента",
			"Устанавливает сразу все свойства стиля фона ",
			"Определяет, насколько далеко должен простираться фон внутри элемента",
			"Фоновое изображение будет прокручиваться вместе со страницей",
		],
		correct: 2,
	},
	{
		question: "Какой тег разрешает фоновому изображение прокручиваться вместе со страницей?",
		answers: [
			"background-repeat",
			"background-origin",
			"background-attachment scroll",
			"background-attachment fixed",
		],
		correct: 3,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"background-image",
			"background-repeat",
			"background-position",
			"background-clip ",
		],
		correct: 4,
	},
	{
		question: "Какой тег определяет происхождение фонового изображения?",
		answers: [
			"background-origin",
			"background-repeat",
			"background-clip",
			"background-image",
		],
		correct: 1,
	},
	{
		question: "Что делает тег justify-content?",
		answers: [
			"Выравнивает элементы по оси y",
			"Выравнивает элементы по второстепенной оси",
			"Выравнивает элементы по главной оси",
			"Выравнивает элементы по главной оси x",
		],
		correct: 3,
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