const list = JSON.parse(localStorage.getItem("list") || "[]");

const buffer:number[] = []

export const initialState = {
    employess: {
        list,
        sortedBy:'',
        pag:1,
        buffer
    },
};