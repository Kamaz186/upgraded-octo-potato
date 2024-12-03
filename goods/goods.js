const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            activeButton: '',
            isOrderActive: false,
            searchQuery: '',
            isChatOpen: false,
            isProblemSelected: false,
            problemType: '',
            messages: [
                "Привет, чем могу помочь?",
                "Есть ли у вас вопросы по заказам или доставке?",
                "Наши менеджеры всегда на связи."
            ]
        };
    },
    methods: {
        changeStatusBtn(buttonName) {
            this.activeButton = buttonName;
        },
        onHover() {
            this.isOrderActive = true;
        },
        onLeave() {
            this.isOrderActive = false;
        },
        onSearchSubmit() {
            if (this.searchQuery.trim()) {
                console.log('Поиск по запросу: ', this.searchQuery);

            } else {
                console.log('Поиск не выполнен. Поле пустое.');
            }
        },
        setActiveButtonBasedOnPage() {
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'main.html') {
                this.activeButton = 'Главная';
            } else if (currentPage === 'dogs.html') {
                this.activeButton = 'Алабаи';
            } else if (currentPage === 'goods.html') {
                this.activeButton = 'Кухня';
            } else if (currentPage === 'about.html') {
                this.activeButton = 'О нас';
            } else if (currentPage === 'support.html') {
                this.activeButton = 'Поддержка'
            }
        },
        openChat() {
            this.isChatOpen = true;
        },
        closeChat() {
            this.isChatOpen = false;
            this.isProblemSelected = false;
            this.messages = [
                "Привет, чем могу помочь?",
                "Есть ли у вас вопросы по заказам или доставкам?",
                "Наши менеджеры всегда на связи. "
            ];
        },
        selectProblem(problem) {
            this.isProblemSelected = true;
            this.problemType = problem;
            if (problem === 'Заказ') {
                this.messages.push("Какой именно заказ вызывает проблему?");
            } else if (problem === 'Доставка') {
                this.messages.push("Какие проблемы с доставкой у вас возникли?");
            } else if (problem === 'Поддержка') {
                this.messages.push("Как мы можем вам помочь? Свяжитесь с нами.");
            }
        }
    },
    mounted() {
        this.setActiveButtonBasedOnPage();
    },
});

app.mount("#app");