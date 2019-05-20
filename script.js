//сделать наследование для групп студентов

var groupNumber, disciplineName, tutorName;

var group1 = {};

var group1 = {
    id: "Группа 1",
    students: ["Гр1Ст1", "Гр1Ст2", "Гр1Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group2 = {
    id: "Группа 2",
    students: ["Гр2Ст1", "Гр2Ст2", "Гр2Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group3 = {
    id: "Группа 3",
    students: ["Гр3Ст1", "Гр3Ст2", "Гр3Ст3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

//при смене группы при уже выбранной паре группа - предмет в блоке с информацией изменений не происходит 

$('p.groups').click(function () {
    $('p.groups').css('font-weight','normal');
    $(this).css('font-weight','bold');
    groupNumber = $(this).text();
    console.log(groupNumber);
    
    switch (groupNumber) {
        case "Группа 1":
            //здесь нужно сделать циклом
            /*for (let i = 0; i < group1.disciplines.length; i++) {
            $('p.discipline:eq(3 + i)').text(group1.disciplines[i]);

        };*/
            $('p.discipline:eq(0)').text(group1.disciplines[0] + " (" + group1.tutors[0] + ")");
            $('p.discipline:eq(1)').text(group1.disciplines[1] + " (" + group1.tutors[1] + ")");
            $('p.discipline:eq(2)').text(group1.disciplines[2] + " (" + group1.tutors[2] + ")");
            break;

        case "Группа 2":
            $('p.discipline:eq(0)').text(group2.disciplines[0] + " (" + group2.tutors[0] + ")");
            $('p.discipline:eq(1)').text(group2.disciplines[1] + " (" + group2.tutors[1] + ")");
            $('p.discipline:eq(2)').text(group2.disciplines[2] + " (" + group2.tutors[2] + ")");
            break;

        case "Группа 3":
            $('p.discipline:eq(0)').text(group3.disciplines[0] + " (" + group3.tutors[0] + ")");
            $('p.discipline:eq(1)').text(group3.disciplines[1] + " (" + group3.tutors[1] + ")");
            $('p.discipline:eq(2)').text(group3.disciplines[2] + " (" + group3.tutors[2] + ")");
            break;
        
        default:
            break;
    }
});

//блок кода для выбора предмета и добавления соответствующей информкации в блок с посещаемостью
$('p.discipline').click(function () {
    //выделение жирным предмета, на который пришелся клик
    $('p.discipline').css('font-weight','normal');
    $(this).css('font-weight','bold');

    //добавление текста в блок с информацией о посещаемости
    disciplineName = $(this).text();
    $('#description').html(`Посещаемость занятий по предмету обучения <b>«${disciplineName.split(" (")[0]}»</b> ` 
    + `студентами группы <b>«${groupNumber}»</b>, ` + ` преподаватель <b>${disciplineName.split(" (")[1]}</b>`);


    //убрать лишнюю скобку
    //перенести преподавателя на новую строку

    //список студентов только возрастает, нужно. чтобы убирался

    //console.log(groupNumber + disciplineName);
    $('tr.newly_added').remove();

    for (let index = 0; index < 3; index++) {
        $("#info").after(`<tr class="newly_added"><td class="light_grey">${group1.students[index]}</td><td></td><td></td><td></td><td></td></tr>`);
        
    }    
});

$('button').click(function() {
    alert("После перезагрузки страницы выберете группу другую студентов");
    location.reload();
});
 


/*
if (groupNumber != "" && disciplineName != "") {
    
} else {
    console.log("Nothing");
    
}*/

//как быть с датами?
//нужно поля 
/*
В блоке "Список групп" отображны три группы.




*/


















