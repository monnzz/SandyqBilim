function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let lessonName = "sabaq_3",
	lessonLocation = [window.location.href, "JavaScript тіліне кіріспе"],
	lessList = ["theory", "test"],
	foundament = {
		main: {
			grade: 0,
			progress: 0,
			progressMax: 50,
		},
		theory: {
			open: 1,
			grade: 0,
			progress: 0,
			progressMax: 20,
		},
		test: {
			open: 0,
			grade: 0,
			progress: 0,
			progressMax: 30,
			data: 0,
		},
	},
	contents = {
		theory: {
			headerCategory: "Теория",
			header: "JavaScript тіліне кіріспе",
			color: "#b5c3fd",
			spisok: {
				header: "Сіз не үйренесіз",
				content: [
					"JavaScript деген не екенін және оның веб-әзірлеудегі рөлін түсіну.",
					"JavaScript синтаксисі мен негізгі құрылымдарын (айнымалылар, операторлар, функциялар) үйрену.",
					"Веб-беттерге интерактивтілік қосу үшін оқиғалармен (events) және DOM-мен жұмыс істеуді меңгеру."
				],
			},
		},
		test: {
			headerCategory: "Сынақ",
			header: "Білім тесті",
			color: "#fdbcff",
			spisok: {
				header: "Қысқаша ақпарат",
				content: [
					"Бұл тест JavaScript негіздерін түсінуді тексеруге арналған.",
					"Сұрақтарға жауап беріп, өз білім деңгейіңізді анықтаңыз."
				],
			},
		}
	};

let laba_data;
if (window.location.href.includes("final")) {
	laba_data = JSON.parse(getCookie("u")).lessons[lessonName].laba.data;
} else {
	laba_data = [0, 0, 0, 0, 0, 0, 0];
}

let tasks = {
    test: {
        amount: 10,
        q_0: {
            question: "JavaScript деген не?",
            answers: [
                "Бағдарламалау тілі",
                "Деректер базасын басқару жүйесі",
                "Операциялық жүйе",
                "Графикалық редактор"
            ],
            correct: 0,
            explanation: "JavaScript - бұл бағдарламалау тілі."
        },
        q_1: {
            question: "JavaScript не үшін қолданылады?",
            answers: [
                "Деректер базасын басқару үшін",
                "Веб-беттерге интерактивтілік қосу үшін",
                "Операциялық жүйе жасау үшін",
                "Компьютерді өшіру үшін"
            ],
            correct: 1,
            explanation: "JavaScript веб-беттерге интерактивтілік қосу үшін қолданылады."
        },
        q_2: {
            question: "JavaScript-те айнымалыны қалай анықтайды?",
            answers: [
                "variable x = 10;",
                "int x = 10;",
                "let x = 10;",
                "define x = 10;"
            ],
            correct: 2,
            explanation: "JavaScript-те айнымалыны анықтау үшін 'let' немесе 'var' пайдаланылады."
        },
        q_3: {
            question: "DOM деген не?",
            answers: [
                "Деректерді сақтау құрылымы",
                "Веб-беттің құрылымын көрсететін объектілер моделі",
                "Бағдарлама кодын орындайтын сервер",
                "Веб-беттерді суретке түсіру технологиясы"
            ],
            correct: 1,
            explanation: "DOM - бұл веб-беттің құрылымын көрсететін объектілер моделі."
        },
        q_4: {
            question: "JavaScript-те қандай цикл жоқ?",
            answers: [
                "for",
                "while",
                "foreach",
                "repeat"
            ],
            correct: 3,
            explanation: "JavaScript-те 'repeat' циклі жоқ."
        },
        q_5: {
            question: "JavaScript-те функцияны қалай құруға болады?",
            answers: [
                "create function myFunc() {}",
                "def myFunc() {}",
                "function myFunc() {}",
                "func myFunc() {}"
            ],
            correct: 2,
            explanation: "JavaScript-те функцияны 'function' кілттік сөзімен құрады."
        },
        q_6: {
            question: "Қай оператор логикалық шарттарды тексеру үшін қолданылады?",
            answers: [
                "if",
                "for",
                "let",
                "console.log"
            ],
            correct: 0,
            explanation: "'if' операторы логикалық шарттарды тексеру үшін қолданылады."
        },
        q_7: {
            question: "alert(\"Hello, world!\") не істейді?",
            answers: [
                "Консольға мәтін шығарады",
                "HTML құжатына жаңа элемент қосады",
                "Пайдаланушыға хабарлама көрсетеді",
                "Бетті қайта жүктейді"
            ],
            correct: 2,
            explanation: "alert() пайдаланушыға хабарлама көрсетеді."
        },
        q_8: {
            question: "JavaScript қандай тіл түріне жатады?",
            answers: [
                "Компиляцияланатын тіл",
                "Интерпретацияланатын тіл",
                "Машиналық код тілі",
                "Деректер базасы тілі"
            ],
            correct: 1,
            explanation: "JavaScript - интерпретацияланатын тіл."
        },
        q_9: {
            question: "JavaScript-те массив қалай құрылады?",
            answers: [
                "array = (1, 2, 3, 4, 5);",
                "let arr = [1, 2, 3, 4, 5];",
                "arr = {1, 2, 3, 4, 5};",
                "array arr = new Array(1, 2, 3, 4, 5);"
            ],
            correct: 1,
            explanation: "JavaScript-те массив құру үшін 'let arr = [1, 2, 3, 4, 5];' синтаксисі қолданылады."
        }
    }
};
