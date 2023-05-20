export const initialState = {
    employess: {
        list: [
            {
                id: 1,
                firstName: "zlex",
                lastName: "Володя",
                middleName: null,
                birthDate: new Date(Date.now()).toISOString(),
                description: "Работяга"
            },
            {
                id: 2,
                firstName: "blex",
                lastName: "Алерго",
                middleName: null,
                birthDate: Date.now() + "",
                description: "НеРаботяга"
            },
            {
                id: 3,
                firstName: "clex",
                lastName: "Лерго",
                middleName: "Лемур",
                birthDate: Date.now() + "",
                description: "разраб"
            },
            {
                id: 4,
                firstName: "dlex",
                lastName: "Сюрелиант",
                middleName: "Авокадо",
                birthDate: Date.now() + "",
                description: "айтишник"
            },
            {
                id: 5,
                firstName: "elex",
                lastName: "Sergio",
                middleName: "Суслик",
                birthDate: Date.now() + "",
                description: "дизайнер"
            },
        ],
        sortedBy:''
    },
};