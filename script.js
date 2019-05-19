//сделать наследование для групп студентов

var groupNumber, disciplineName, tutorName;

var group1 = {
    id: "Группа 1",
    students: ["Студент 1", "Студент 2", "Студент 3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group2 = {
    id: "Группа 2",
    students: ["Студент 4", "Студент 5", "Студент 6"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group3 = {
    id: "Группа 3",
    students: ["Студент 7", "Студент 8", "Студент 9"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник И.К.", "к.ф.н. Философ А.А.", "д.ф.н. Конфуций Й.Ц."]
}

$('p.groups').click(function () {
    $(this).css('font-weight','bold');//снять выделение у прочих абзацев
    groupNumber = $(this).text();

    switch (groupNumber) {
        case "Группа 1":
            console.log(group1.disciplines.length);
            console.log(group1.disciplines[0]);
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


$('p.discipline').click(function () {
    $(this).css('font-weight','bold');
    disciplineName = $(this).text();
    $('#description').html(`Посещаемость занятий по предмету обучения <b>«${disciplineName.split(" (")[0]}»</b> ` 
    + `студентами группы <b>«${groupNumber}»</b>, ` + ` преподаватель <b>${disciplineName.split(" (")[1]}</b>`);
    //убрать лишнюю скобку
    //перенести преподавателя на новую строку

    //console.log(groupNumber + disciplineName);

    for (let index = 0; index < 3; index++) {
        $("#info").after(`<tr><td>${group1.students[index]}</td><td>1</td><td>1</td><tr>`)
        
    }
    
});
 


/*
if (groupNumber != "" && disciplineName != "") {
    
} else {
    console.log("Nothing");
    
}*/




















