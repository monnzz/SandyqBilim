function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let lessonName = "sabaq_2",
	lessonLocation = [window.location.href, "CSS негіздері"],
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
			header: "CSS негіздері",
			color: "#b5c3fd",
			spisok: {
				header: "Сіз не үйренесіз",
				content: [
					"CSS деген не екенін және оның негізгі құрылымын түсіну.",
					"CSS селекторларын (мысалы, .class, #id, element) және олардың қасиеттерін қалай қолдану керектігін білу.",
					"Веб-беттердің көрінісін стильдеу үшін қажетті негізгі CSS қасиеттерімен танысу."
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
					"Бұл тест CSS негіздерін түсінуді тексеруге арналған.",
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
			question: "CSS деген не?",
			answers: [
				"Бағдарламалау тілі",
				"Веб-беттер стилін анықтайтын тіл",
				"Деректер базасын басқару жүйесі",
				"Желілік хаттама"
			],
			correct: 1,
			explanation: "CSS веб-беттердің стилін басқару үшін қолданылады."
		},
		q_1: {
			question: "CSS-те түсті өзгерту үшін қай қасиет қолданылады?",
			answers: ["font-size", "color", "background", "text-align"],
			correct: 1,
			explanation: "color қасиеті мәтіннің түсін өзгертеді."
		},
		q_2: {
			question: "Қай CSS жазу әдісі сыртқы файлды пайдаланады?",
			answers: ["Inline CSS", "Internal CSS", "External CSS", "JavaScript"],
			correct: 2,
			explanation: "External CSS жеке файлда жазылады және <link> тегі арқылы қосылады."
		},
		q_3: {
			question: "#main {} селекторы қандай элементтерге әсер етеді?",
			answers: ["Барлық <main> тегтеріне", "id=\"main\" бар элементке", "class=\"main\" бар элементтерге", "Барлық элементтерге"],
			correct: 1,
			explanation: "#main - ID селекторы, ол id=\"main\" бар жалғыз элементке әсер етеді."
		},
		q_4: {
			question: "CSS-те элементтің шетіндегі бос орын қай қасиет арқылы басқарылады?",
			answers: ["padding", "margin", "border", "width"],
			correct: 1,
			explanation: "margin элементтің сыртқы бос орнын орнатады."
		},
		q_5: {
			question: "CSS файлдарын HTML-ге қосу үшін қандай тег қолданылады?",
			answers: ["<script>", "<link>", "<style>", "<meta>"],
			correct: 1,
			explanation: "<link> тегі сыртқы CSS файлдарын HTML-ге қосу үшін қолданылады."
		},
		q_6: {
			question: ".container {} қандай селектор?",
			answers: ["ID селекторы", "Класс селекторы", "Элемент селекторы", "Топтық селектор"],
			correct: 1,
			explanation: "Класс селекторы нүктемен белгіленеді (.)."
		},
		q_7: {
			question: "CSS-те қаріп өлшемін өзгерту үшін қай қасиет қолданылады?",
			answers: ["font-weight", "font-style", "font-size", "text-transform"],
			correct: 2,
			explanation: "font-size қасиеті қаріп өлшемін өзгертеді."
		},
		q_8: {
			question: "display: none; қасиеті не істейді?",
			answers: [
				"Элементті жасырады, бірақ орнын сақтайды",
				"Элементті толық жасырады және орнын да алып тастайды",
				"Элементті басқа түске өзгертеді",
				"Элементті шетке жылжытады"
			],
			correct: 1,
			explanation: "display: none; элементті толық жасырып, оның орнын да алып тастайды."
		},
		q_9: {
			question: "position: absolute; дегеніміз не?",
			answers: [
				"Элементті беттегі қалыпты ағын бойынша орналастырады",
				"Элементті жақын орналасқан салыстырмалы контейнерге қатысты орналастырады",
				"Элементті экранның ортасына жылжытады",
				"Элементті автоматты түрде үлкенірек етеді"
			],
			correct: 1,
			explanation: "absolute позициясы элементті ең жақын салыстырмалы контейнерге қатысты орналастырады."
		}
	}
};

