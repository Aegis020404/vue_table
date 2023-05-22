import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex";

import { initialState } from "../initialState";
import { StaffI } from "@/models";

/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
    deleteStaff: number,
    sortedByList: string
    addStaff: StaffI
    editStaff: StaffI
    setBuffer: { checked: boolean, id: number }
};

export const mutations: MutationTree<State> & Mutations = {
    deleteStaff({ employess }, payload) {
        employess.list = employess.list.filter((staff: StaffI) => staff.id !== payload);
        localStorage.setItem("list", JSON.stringify(employess.list));
    },
    sortedByList({ employess }, pattern) {

        if (pattern === employess.sortedBy) {
            employess.list.sort((staff1: StaffI, staff2: StaffI): number => {
                const value1 = String(staff1[pattern as keyof StaffI]);
                const value2 = String(staff2[pattern as keyof StaffI]);
                return value2.localeCompare(value1);
            });
            employess.sortedBy = pattern.split("").reverse().join("");
        } else {
            employess.list.sort((staff1: StaffI, staff2: StaffI): number => {
                const value1 = String(staff1[pattern as keyof StaffI]);
                const value2 = String(staff2[pattern as keyof StaffI]);
                return value1.localeCompare(value2);
            });
            employess.sortedBy = pattern;
        }
    },
    addStaff({ employess }, payload) {
        employess.list.push(payload)
        localStorage.setItem("list", JSON.stringify(employess.list));

    },
    editStaff({ employess }, payload) {
        employess.list = employess.list.map(
            (staff: StaffI) => staff.id === payload.id ? payload : staff);
        localStorage.setItem("list", JSON.stringify(employess.list));
    },
    setBuffer({ employess }, payload) {
        if (payload.checked) {
            employess.buffer.push(payload.id)
        } else {
            employess.buffer = employess.buffer.filter(id =>  id !== payload.id);
        }
    },
    deleteBuffer({employess}) {
        employess.list = employess.list.filter((staff:StaffI) =>  !employess.buffer.includes(staff.id));
        employess.buffer = [];
    }
};

/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
    sortAndFilterList(state: State): (pag: number, search: string) => StaffI[]
};

export const getters: GetterTree<State, State> & Getters = {
    sortAndFilterList({ employess }) {
        return function (pag, search) {
            let state = employess.list
            if (search.length > 2) {
                state = state.filter((obj: StaffI) => {
                    let flag = false;
                    for (let key in initialState.employess.list[0]) {
                        if (obj.firstName.includes(search)) flag = true;
                        if (obj.lastName.includes(search)) flag = true;
                        if (obj.birthDate.includes(search)) flag = true;
                        if (obj.middleName.includes(search)) flag = true;
                        if (obj.description.includes(search)) flag = true;

                    }
                    return flag;
                })

            }


            return state.slice((pag - 1) * 10,
                pag * 10);;
        }
    }
};

/*
   ---------------------- Actions -------------------------------
 */

export type ActionsPayload = {

};

export const actions: Actions = {

};

/*
   ---------------------- Actions no change code -----------------------------
 */

type Actions = {
    [Property in keyof ActionsPayload]: (
        augContext: AugmentedActionContext,
        payload: ActionsPayload[Property][0]
    ) => ActionsPayload[Property][1];
};

type AugmentedActionContext = {
    commit<K extends keyof MutationPayload>(
        key: K,
        payload: MutationPayload[K],
        options?: CommitOptions
    ): void;
} & Omit<ActionContext<State, State>, "commit">;

/*
   ---------------------- Mutations - no change code ------------------------
 */

type Mutations = {
    [Property in keyof MutationPayload]: (
        state: State,
        payload: MutationPayload[Property]
    ) => void;
};

/*
   ---------------------- Getters - no change code -------------------------------
 */
type State = typeof initialState;