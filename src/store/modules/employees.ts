import { GetterTree, MutationTree, ActionContext, CommitOptions } from "vuex";

import { initialState } from "../initialState";
import { StaffI } from "@/models";

/*
   ---------------------- Mutations -------------------------------
 */

export type MutationPayload = {
    deleteStaff:number,
    sortedByList:string
    addStaff:StaffI
};

export const mutations: MutationTree<State> & Mutations = {
    deleteStaff({employess},payload) {
        employess.list = employess.list.filter((staff) => staff.id !== payload);
    },
    sortedByList({employess},pattern) {
        if (pattern === employess.sortedBy) {
            employess.list.sort((staff1, staff2): number => {
                const value1 = String(staff1[pattern as keyof StaffI]);
                const value2 = String(staff2[pattern as keyof StaffI]);
                return value2.localeCompare(value1);
            });
            employess.sortedBy = pattern.split("").reverse().join("");
        } else {
            employess.list.sort((staff1, staff2): number => {
                const value1 = String(staff1[pattern as keyof StaffI]);
                const value2 = String(staff2[pattern as keyof StaffI]);
                return value1.localeCompare(value2);
            });
            employess.sortedBy = pattern;
        }
    },
    addStaff({employess},payload) {
        employess.list.push(payload)
    }
};

/*
   ---------------------- Getters -------------------------------
 */

export type Getters = {
};

export const getters: GetterTree<State, State> & Getters = {

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