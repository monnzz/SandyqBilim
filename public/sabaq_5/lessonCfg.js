function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let lessonName = "sabaq_3",
	lessonLocation = [window.location.href, "API"],
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
			header: "APIмен жұмыс жасау",
			color: "#b5c3fd",
			spisok: {
				header: "Сіз не үйренесіз",
				content: [
					"API деген не және оның веб-әзірлеудегі рөлі.",
					"API және оның веб-әзірлеудегі маңызын түсіну.",
					"fetch() әдісі арқылы серверден деректер алу және оларды өңдеуді үйрену."
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
					"Бұл тест API туралы деңгейіңізді анықтауға арналған.",
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
            question: "API деген не?",
            answers: [
                "Бағдарламалау тілі",
                "Деректер алмасу интерфейсі",
                "Операциялық жүйе",
                "Графикалық редактор"
            ],
            correct: 1,
            explanation: "API - бұл бағдарламалар мен сервистердің өзара әрекеттесуіне арналған интерфейс."
        },
        q_1: {
            question: "REST API деген не?",
            answers: [
                "Веб-қызметтермен өзара әрекеттесудің архитектуралық стилі",
                "Компьютердің операциялық жүйесі",
                "Жаңа бағдарламалау тілі",
                "Браузердің қосымшасы"
            ],
            correct: 0,
            explanation: "REST API - бұл веб-қызметтермен өзара әрекеттесудің архитектуралық стилі."
        },
        q_2: {
            question: "HTTP әдістерінің қайсысы деректерді серверден алуға қолданылады?",
            answers: [
                "POST",
                "GET",
                "PUT",
                "DELETE"
            ],
            correct: 1,
            explanation: "GET әдісі серверден деректерді алуға арналған."
        },
        q_3: {
            question: "fetch() әдісі не үшін қолданылады?",
            answers: [
                "Сервермен HTTP сұраныстарын жасау үшін",
                "CSS файлдарын жүктеу үшін",
                "Дерекқорды басқару үшін",
                "HTML беттерін өзгерту үшін"
            ],
            correct: 0,
            explanation: "fetch() әдісі сервермен HTTP сұраныстарын орындау үшін қолданылады."
        },
        q_4: {
            question: "JSON деген не?",
            answers: [
                "Деректер алмасу форматы",
                "Бағдарламалау тілі",
                "Операциялық жүйе",
                "Дерекқорды басқару жүйесі"
            ],
            correct: 0,
            explanation: "JSON (JavaScript Object Notation) - деректер алмасу форматы."
        },
        q_5: {
            question: "API кілті не үшін қолданылады?",
            answers: [
                "API-ге қол жеткізуді басқару үшін",
                "Веб-беттердің стилін өзгерту үшін",
                "Файлдарды жүктеу үшін",
                "Компьютерді сөндіру үшін"
            ],
            correct: 0,
            explanation: "API кілті белгілі бір API-ге рұқсат алу үшін қолданылады."
        },
        q_6: {
            question: "Асинхронды бағдарламалауда қандай құрылым қолданылады?",
            answers: [
                "Promise",
                "Loop",
                "Class",
                "Variable"
            ],
            correct: 0,
            explanation: "Promise - асинхронды операцияларды басқару үшін қолданылады."
        },
        q_7: {
            question: "API-мен жұмыс істеуде қандай формат жиі қолданылады?",
            answers: [
                "XML және JSON",
                "JPEG және PNG",
                "MP3 және WAV",
                "PDF және DOCX"
            ],
            correct: 0,
            explanation: "API-мен жұмыс істеуде көбіне XML және JSON қолданылады."
        },
        q_8: {
            question: "API-дің артықшылықтарының бірі қандай?",
            answers: [
                "Әртүрлі жүйелердің өзара әрекеттесуін жеңілдету",
                "Компьютердің жұмысын бәсеңдету",
                "Тек бір бағдарламалау тілінде жұмыс істеу",
                "Тек оффлайн режимде жұмыс істеу"
            ],
            correct: 0,
            explanation: "API әртүрлі жүйелердің өзара әрекеттесуін жеңілдетеді."
        },
        q_9: {
            question: "API арқылы ауа райы туралы деректерді қалай алуға болады?",
            answers: [
                "Веб-сайтты ашу арқылы",
                "OpenWeather немесе басқа API-ді қолдану арқылы",
                "Компьютердің операциялық жүйесін өзгерту арқылы",
                "Файл менеджер арқылы"
            ],
            correct: 1,
            explanation: "OpenWeather API сияқты сервистер арқылы ауа райы туралы деректерді алуға болады."
        }
    }
};
