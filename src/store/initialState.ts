const list = JSON.parse(localStorage.getItem("list") || "[]");


export const initialState = {
    employess: {
        list,
        sortedBy:''
    },
};