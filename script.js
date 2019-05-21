//группы в формате JSON-объектов
var group1 = '{"id": "Группа 1", "students": ["Гр1Ст1", "Гр1Ст2", "Гр1Ст3", "Гр1Ст4"], "disciplines": ["Предмет 1", "Предмет 2", "Предмет 3"], "tutors": ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."], "presence": [["v", "v", "v", "v"], ["x", "v", "x", "v"], ["x", "x", "x", "x"], ["x", "x", "x", "x"]]}';
var group2 = '{"id": "Группа 2", "students": ["Гр2Ст1", "Гр2Ст2", "Гр2Ст3", "Гр2Ст4"], "disciplines": ["Предмет 1", "Предмет 2", "Предмет 3"], "tutors": ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."], "presence": [["v", "x", "v", "x"], ["x", "v", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"]]}';
var group3 = '{"id": "Группа 3", "students": ["Гр3Ст1", "Гр3Ст2", "Гр3Ст3", "Гр3Ст4"], "disciplines": ["Предмет 1", "Предмет 2", "Предмет 3"], "tutors": ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."], "presence": [["v", "x", "v", "x"], ["x", "v", "x", "x"], ["x", "x", "x", "x"], ["x", "x", "x", "x"]]}';

/*
var group1 = {
    id: "Группа 1",
    students: ["Гр1Ст1", "Гр1Ст2", "Гр1Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."],
    presence: [["v", "v", "v", "v"], ["x", "v", "x", "v"], ["x", "x", "x", "x"]]
}

var group2 = {
    id: "Группа 2",
    students: ["Гр2Ст1", "Гр2Ст2", "Гр2Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."],
    presence: [["v", "x", "v", "x"], ["x", "v", "x", "x"], ["x", "x", "x", "x"]]
}

var group3 = {
    id: "Группа 3",
    students: ["Гр3Ст1", "Гр3Ст2", "Гр3Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."],
    presence: [["v", "v", "v", "v"], ["x", "v", "x", "v"], ["x", "x", "x", "x"]]
}
*/

//преобразуем их к виду JavaScript-объектов
group1 = JSON.parse(group1);
group2 = JSON.parse(group2);
group3 = JSON.parse(group3);

//переменные для получения необходимых свойств JavaScript-объектов
var groupNumber, disciplineName, tutorName;

//запуск приложения с выбором пользователем группы студентов
alert("Выберите нужную группу из списка групп");

$('p.groups').click(function () {
    $('p.groups').css('font-weight','normal');
    $(this).css('font-weight','bold');//выделение выбранной группы
    groupNumber = $(this).text();
    
    //далее в зависимости от номера группы создаем список дисциплин для каждой выбранной группы
    switch (groupNumber) {
        case "Группа 1":
            $('p.discipline').remove();
            for (let index = group1.disciplines.length - 1; index >= 0; index--) {
                $('#disciplines').after(`<p class='discipline'>${group1.disciplines[index]}` + " (" + `${group1.tutors[index]}` + ")</p>");     
            }
            break;

        case "Группа 2":
            $('p.discipline').remove();
            for (let index = group2.disciplines.length - 1; index >= 0; index--) {
                $('#disciplines').after(`<p class='discipline'>${group2.disciplines[index]}` + " (" + `${group2.tutors[index]}` + ")</p>");     
            }
            break;

        case "Группа 3":
            $('p.discipline').remove();
            for (let index = group2.disciplines.length - 1; index >= 0; index--) {
                $('#disciplines').after(`<p class='discipline'>${group3.disciplines[index]}` + " (" + `${group3.tutors[index]}` + ")</p>");     
            }
            break;
        
        default:
            break;
    }
    
    //далее пользователь выбирает предмет из появившегося после выбора группы списка
    alert("Выберите предмет из списка предметов обучения");

    //блок кода для выбора предмета и добавления соответствующей информации в блок с посещаемостью
    $('p.discipline').click(function () {

    $('p.discipline').css('font-weight','normal');
    $(this).css('font-weight','bold');//выделение жирным предмета, на который пришелся клик

    //добавление текста в блок с информацией о посещаемости
    disciplineName = $(this).text();
    if (groupNumber != false && disciplineName != false) {
        $('#description').html(`Посещаемость занятий по предмету обучения <b>«${disciplineName.split(" (")[0]}»</b> ` 
    + `студентами группы <b>«${groupNumber}»</b>, ` + ` <br>преподаватель <b>${disciplineName.split(" (")[1].split(")")[0]}</b>`);
    }

    //далее циклом добавляем в блок с посещаемостью строки таблицы по каждому студенту группы для заданного предмета, прежде очищая строки после шапки таблицы от прошлых данных
    $('tr.newly_added').remove();

    //непосредственно добавление строк с отметками (для 4 дат)
    switch (groupNumber) {
        case "Группа 1":
                for (let index = group1.students.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group1.students[index]}</td><td>${group1.presence[index][0]}</td><td>${group1.presence[index][1]}</td><td>${group1.presence[index][2]}</td><td>${group1.presence[index][3]}</td></tr>`);
                };
                break;

        case "Группа 2":
                for (let index = group2.students.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group2.students[index]}</td><td>${group2.presence[index][0]}</td><td>${group2.presence[index][1]}</td><td>${group2.presence[index][2]}</td><td>${group2.presence[index][3]}</td></tr>`);
                }; 
                break;

        case "Группа 3":
                for (let index = group3.students.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group3.students[index]}</td><td>${group3.presence[index][0]}</td><td>${group3.presence[index][1]}</td><td>${group3.presence[index][2]}</td><td>${group3.presence[index][3]}</td></tr>`);
                };   
                break;

        default:
            break;
    }     
});
});

//кнопка для перезагрузки страницы
$('button').click(function() {
    location.reload();
});
