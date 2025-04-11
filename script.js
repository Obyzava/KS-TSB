document.addEventListener('DOMContentLoaded', function() {
    const ploshiBtn = document.getElementById('ploshiBtn');
    const idPlate = document.getElementById('idPlate');
    const copyBtn = document.getElementById('copyBtn');
    const idDisplay = document.querySelector('.id-display');
    
    // Примеры ID (можно расширить)
    const exampleIds = [
        '112446419463815',
        '129722439752761'
    ];
    
    // Показываем плашку с ID при нажатии на кнопку "Площи"
    ploshiBtn.addEventListener('click', function() {
        // Выбираем случайный ID из примеров
        const randomId = exampleIds[Math.floor(Math.random() * exampleIds.length)];
        idDisplay.textContent = randomId;
        
        // Показываем плашку
        idPlate.style.display = 'block';
    });
    
    // Копирование ID в буфер обмена
    copyBtn.addEventListener('click', function() {
        const idToCopy = idDisplay.textContent;
        navigator.clipboard.writeText(idToCopy).then(function() {
            // Меняем текст кнопки временно
            copyBtn.textContent = 'Скопировано!';
            setTimeout(function() {
                copyBtn.textContent = 'Скопировать ID';
            }, 2000);
        }).catch(function(err) {
            console.error('Не удалось скопировать ID: ', err);
        });
    });
});
