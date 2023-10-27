import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => {
        return {
            counter: 1
        }
    },
    getters: {
        doubleCounter: (state) => state.counter * 2
    },
    actions: {
        add() {
            this.counter++
        }
    },
    // 持久化存储
    // persist: {
    //     storage: persistedState.sessionStorage,
    //   },
})