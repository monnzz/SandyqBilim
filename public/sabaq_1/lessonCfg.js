function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let lessonName = "sabaq_1",
	lessonLocation = [window.location.href, "HTML негіздері: Веб-беттерді құру"],
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
			header: "HTML негіздері",
			color: "#b5c3fd",
			spisok: {
				header: "Сіз не үйренесіз",
				content: [
					"HTML деген не екенін және оның негізгі құрылымын түсіну.",
					"HTML тэгтерін (мысалы, &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;) және олардың атрибуттарын қалай қолдану керектігін білу.",
					"Веб-беттерді жасауға қажетті негізгі элементтермен танысу."
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
					"Бұл тест HTML негіздерін түсінуді тексеруге арналған.",
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
		amount: 5,
		q_0: {
			question: "HTML деген не?",
			answers: [
				"Браузердің бағдарламалау тілі",
				"Веб-беттерді белгілеу тілі",
				"Ойын жасау тілі",
				"Операциялық жүйе"
			],
			correct: 1,
			explanation: "HTML — гипертекст белгілеу тілі, ол веб-беттерді құру үшін қолданылады."
		},
		q_1: {
			question: "HTML құжатының негізгі құрылымы қандай тэгтерден тұрады?",
			answers: [
				"&lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt;, &lt;body&gt;",
				"&lt;html&gt;, &lt;head&gt;, &lt;footer&gt;",
				"&lt;div&gt;, &lt;span&gt;, &lt;header&gt;",
				"&lt;header&gt;, &lt;section&gt;, &lt;footer&gt;"
			],
			correct: 0,
			explanation: "HTML құжатының негізгі құрылымы &lt;!DOCTYPE html&gt;, &lt;html&gt;, &lt;head&gt; және &lt;body&gt; тэгтерінен тұрады."
		},
		q_2: {
			question: "HTML-де сілтеме жасау үшін қай тэг қолданылады?",
			answers: [
				"&lt;a&gt;",
				"&lt;link&gt;",
				"&lt;href&gt;",
				"&lt;script&gt;"
			],
			correct: 0,
			explanation: "HTML-де сілтеме жасау үшін &lt;a&gt; тэгі қолданылады."
		},
		q_3: {
			question: "HTML-де суретті енгізу үшін қай тэг қолданылады?",
			answers: [
				"&lt;img&gt;",
				"&lt;image&gt;",
				"&lt;pic&gt;",
				"&lt;src&gt;"
			],
			correct: 0,
			explanation: "HTML-де суретті енгізу үшін &lt;img&gt; тэгі қолданылады."
		},
		q_4: {
			question: "HTML тэгтерінің қасиеттері қалай беріледі?",
			answers: [
				"Атрибуттар арқылы",
				"Кластар арқылы",
				"ID арқылы",
				"Барлығы дұрыс"
			],
			correct: 0,
			explanation: "HTML тэгтеріне қатысты қасиеттер атрибуттар арқылы беріледі."
		}
	}
};
