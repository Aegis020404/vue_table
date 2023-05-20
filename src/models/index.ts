

export interface ListI {
    firstName: string;
    lastName: string;
    middleName: string | null;
    birthDate: string; // ISO Format, e.g. 1986-12-08
    description: string | null;
}
export interface HomeViewI {
    list:ListI[],
}

// a. Фамилия
// b. Имя
// c. Отчество
// d. Дата рождения
// e. Описание (до 100 символов)
// f. Действия (в строках кнопки “Редактировать” и ”Удалить”, в