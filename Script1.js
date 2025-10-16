// JavaScript source code
class TabSwitcher {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.tabButtons = this.container.querySelectorAll('.tab-button');
        this.tabContents = this.container.querySelectorAll('.tab-content');
        
        this.init();
    }
    
    init() {
        // Добавляем обработчики событий для кнопок вкладок
        this.tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.index1.html);
            });
        });
        
        // Активируем первую вкладку по умолчанию
        if (this.tabButtons.length > 0) {
            this.switchTab(this.tabButtons[0].dataset.index1.html);
        }
    }
    
    switchTab(tabId) {
        // Деактивируем все кнопки и содержимое
        this.tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        this.tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Активируем выбранную вкладку
        const activeButton = this.container.querySelector(`[data-tab="${tabId}"]`);
        const activeContent = document.getElementById(tabId);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
        }
    }
    
    // Метод для программного переключения вкладок
    showTab(tabId) {
        this.switchTab(tabId);
    }
    
    // Метод для получения активной вкладки
    getActiveTab() {
        return this.container.querySelector('.tab-button.active').dataset.tab;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const tabSwitcher = new TabSwitcher('.tabs-container');
    
    // Пример использования методов
    // tabSwitcher.showTab('tab2'); // Переключиться на вторую вкладку
    // console.log(tabSwitcher.getActiveTab()); // Получить активную вкладку
});
