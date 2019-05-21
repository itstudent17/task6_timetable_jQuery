# task6_timetable_jQuery

Данные по названию группы, фамилиям студентов и преподавателей, перечню дисциплин и посещаемости хранятся в JSON-объектах.

Всего 3 группы.

В каждой группе по 4 студента; названия предметов и ФИО преподавателей с учеными степенями для одинаковых предметов в разных группах одинаковы.

(На уровне массивов с фамилиями студентов можно добавить сортировку фамилий методом sort().)

Данные о посещаемости выдаются за 4 даты ретроспективно (только просмотр, нет функционала по добавлению отметок на новую дату и изменению уже внесенных данных).

В зависимости от выбранной группы (switch ... case) циклом формируется список дисциплин данной конкретной группы.

Чтобы получить список студентов с посещаемостью занятий и текст с информацией, необходимо выбрать конкретную дисциплину из полученного списка дисциплин.

Блок с информацией о посещаемости автоматически меняется при выборе дисциплины.

В таблицу с датами и отметками посещаемости циклом добавляются строки таблицы для каждого конкретного студента группы.

Если нужно поменять группу, то необходимо повторить последовательность действий: выбор группы - выбор предмета.

Без выбора предмета обновление данных по новой группе происходить не будет.
