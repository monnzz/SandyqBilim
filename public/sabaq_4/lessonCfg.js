function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let lessonName = "sabaq_4",
	lessonLocation = [window.location.href, "Веб-фреймворктар"],
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
			header: "Веб-фреймворктар",
			color: "#b5c3fd",
			spisok: {
				header: "Сіз не үйренесіз",
				content: [
					"Фреймворктардың не екенін және олардың веб-әзірлеудегі рөлін түсіну.",
					"Танымал JavaScript фреймворктары мен кітапханаларының (React, Vue, Angular) негізгі принциптерін үйрену.",
					"Фреймворктарды қолдана отырып, компоненттік архитектурамен және күйді басқарумен (state management) жұмыс істеуді меңгеру."
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
					"Бұл тест веб-фреймворктар жайлы біліміңізді тексеруге арналған.",
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
            question: "Фронтенд фреймворктер не үшін қолданылады?",
            answers: [
                "Серверлік бағдарламалау үшін",
                "Веб-қосымшаларды тез жасау үшін",
                "Деректер базасын басқару үшін",
                "Компьютерлік ойындар жасау үшін"
            ],
            correct: 1,
            explanation: "Фреймворктер веб-қосымшаларды тез және тиімді әзірлеуге көмектеседі."
        },
        q_1: {
            question: "React қандай компания әзірледі?",
            answers: ["Google", "Facebook", "Microsoft", "Apple"],
            correct: 1,
            explanation: "React - Facebook әзірлеген фреймворк."
        },
        q_2: {
            question: "Vue.js қандай ерекшелігімен танымал?",
            answers: [
                "Қиын синтаксисі",
                "Жеңіл және икемділігі",
                "Тек серверде жұмыс істейді",
                "Компиляцияны қажет етеді"
            ],
            correct: 1,
            explanation: "Vue.js өзінің қарапайымдылығы және икемділігімен танымал."
        },
        q_3: {
            question: "Angular қандай архитектураны қолданады?",
            answers: ["MVC", "REST", "GraphQL", "NoSQL"],
            correct: 0,
            explanation: "Angular - MVC (Model-View-Controller) архитектурасын қолданады."
        },
        q_4: {
            question: "Svelte қандай ерекшелікке ие?",
            answers: [
                "Браузерде кодты компиляциялайды",
                "Серверде ғана жұмыс істейді",
                "HTML қолданбайды",
                "CSS-ті қолдамайды"
            ],
            correct: 0,
            explanation: "Svelte - браузерге жеңіл код жіберу үшін компиляция жасайды."
        },
        q_5: {
            question: "React-те компоненттер қалай жазылады?",
            answers: [
                "HTML кодымен аралас",
                "Тек CSS ішінде",
                "JSON форматында",
                "SQL сұраныстары арқылы"
            ],
            correct: 0,
            explanation: "React компоненттері HTML мен JavaScript үйлесімі арқылы жазылады."
        },
        q_6: {
            question: "Vue.js ішінде деректер қалай сақталады?",
            answers: ["state объектісінде", "localStorage-те", "DOM ішінде", "SQL базасында"],
            correct: 0,
            explanation: "Vue.js ішінде деректер state объектісінде сақталады."
        },
        q_7: {
            question: "Angular TypeScript қолдана ма?",
            answers: ["Иә", "Жоқ"],
            correct: 0,
            explanation: "Angular TypeScript негізінде жасалған."
        },
        q_8: {
            question: "Фреймворк қолданудың басты артықшылығы қандай?",
            answers: [
                "Код жазу қиындайды",
                "Қателер саны артады",
                "Қайта қолдануға болатын кодпен жұмыс істеу оңайлайды",
                "Веб-сайттардың жүктелу жылдамдығы төмендейді"
            ],
            correct: 2,
            explanation: "Фреймворктер қайта қолданылатын код жазуға мүмкіндік береді."
        },
        q_9: {
            question: "Фронтенд фреймворктер веб-қосымшаларға не береді?",
            answers: [
                "Интерактивтілік және құрылым",
                "Серверлік деректер базасын",
                "Компьютерлік желілерді",
                "Операциялық жүйелерді"
            ],
            correct: 0,
            explanation: "Фреймворктер қосымшаларға интерактивтілік пен құрылым береді."
        }
    }
};
