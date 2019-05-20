//сделать наследование для групп студентов
//на уровне объектов можно добавить сортировку фамилий студентов методом sort()

var groupNumber, disciplineName, tutorName;

var group1 = {};

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
    presence: [["v", "v", "v", "v"], ["x", "v", "x", "v"], ["x", "x", "x", "x"]]
}

var group3 = {
    id: "Группа 3",
    students: ["Гр3Ст1", "Гр3Ст2", "Гр3Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."],
    presence: [["v", "v", "v", "v"], ["x", "v", "x", "v"], ["x", "x", "x", "x"]]
}

//при смене группы при уже выбранной паре группа - предмет в блоке с информацией изменений не происходит

alert("Выберите нужную группу из списка групп");

$('p.groups').click(function () {
    $('p.groups').css('font-weight','normal');
    $(this).css('font-weight','bold');
    groupNumber = $(this).text();
    console.log(groupNumber);
    
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

    alert("Выберите предмет из списка предметов обучения");


    //блок кода для выбора предмета и добавления соответствующей информации в блок с посещаемостью
    $('p.discipline').click(function () {

    //выделение жирным предмета, на который пришелся клик
    $('p.discipline').css('font-weight','normal');
    $(this).css('font-weight','bold');

    //добавление текста в блок с информацией о посещаемости
    disciplineName = $(this).text();
    if (groupNumber != false && disciplineName != false) {
        $('#description').html(`Посещаемость занятий по предмету обучения <b>«${disciplineName.split(" (")[0]}»</b> ` 
    + `студентами группы <b>«${groupNumber}»</b>, ` + ` преподаватель <b>${disciplineName.split(" (")[1]}</b>`);
    }
    
    



    //убрать лишнюю скобку
    //перенести преподавателя на новую строку

    $('tr.newly_added').remove();

    switch (groupNumber) {
        case "Группа 1":
                for (let index = group1.students.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group1.students[index]}</td><td>${group1.presence[index][index]}</td><td>${group1.presence[index][index]}</td><td>${group1.presence[index][index]}</td><td>${group1.presence[index][index]}</td></tr>`);
                };
                break;

        case "Группа 2":
                for (let index = group2.disciplines.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group2.students[index]}</td><td>${group2.presence[index][index]}</td><td>${group2.presence[index][index]}</td><td>${group2.presence[index][index]}</td><td>${group2.presence[index][index]}</td></tr>`);
                }; 
                break;

        case "Группа 3":
                for (let index = group3.disciplines.length - 1; index >= 0; index--) {
                    $("#info").after(`<tr class="newly_added"><td class="light_grey">${group3.students[index]}</td><td>${group3.presence[index][index]}</td><td>${group3.presence[index][index]}</td><td>${group3.presence[index][index]}</td><td>${group3.presence[index][index]}</td></tr>`);
                };   
                break;

        default:
            break;
    }


        
       
});





});


var arr = [[1,2], [3,4]];
console.log(arr[0][0]);





$('button').click(function() {
    location.reload();
});


//как быть с датами?
//поля для просмотра отметок 



















