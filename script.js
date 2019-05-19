//сделать наследование для групп студентов

var groupNumber, disciplineName;

var group1 = {
    id: "Группа 1",
    students: ["Студент 1", "Студент 2", "Студент 3"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник. И.К.", "к.ф.н. Философ. А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group2 = {
    id: "Группа 2",
    students: ["Студент 4", "Студент 5", "Студент 6"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник. И.К.", "к.ф.н. Философ. А.А.", "д.ф.н. Конфуций Й.Ц."]
}

var group3 = {
    id: "Группа 3",
    students: ["Студент 7", "Студент 8", "Студент 9"],
    disciplines: ["Предмет 1", "Предмет 2", "Предмет 3"],
    tutors: ["д.т.н. Техник. И.К.", "к.ф.н. Философ. А.А.", "д.ф.н. Конфуций Й.Ц."]
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
    
        default:
            break;
    }

    

});
/*
$('p.discipline').click(function () {
    $(this).css('font-weight','bold');
    disciplineName = $(this).text();
    console.log(disciplineName);
    $('#description_first_part').text(`Посещаемость занятий по предмету обучения «${disciplineName}» ` + `студентами группы «${groupNumber}» `+ `${disciplineName}` );
    $('#description_second_part').text(`преподаватель ${disciplineName}` );
    console.log(groupNumber + disciplineName);
    
});
*/
 


/*
if (groupNumber != "" && disciplineName != "") {
    
} else {
    console.log("Nothing");
    
}*/


















