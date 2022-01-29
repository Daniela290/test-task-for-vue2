import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        step: 1,
        isCanNewStep: false,
        message: '',
        typeOfRooms: [
            {
                img: "ph1.jpg",
                title: "частный дом",
                isChecked: false,
            },
            {
                img: "ph2.jpg",
                title: "панельный дом",
                isChecked: false,
            },
            {
                img: "ph3.jpg",
                title: "кирпичный дом",
                isChecked: false,
            },
            {
                img: "ph4.jpg",
                title: "элитный жил.комплекс",
                isChecked: false,
            },
            {
                img: "ph5.jpg",
                title: "бизнес-центр / офисное здание",
                isChecked: false,
            },
            {
                img: "ph6.jpg",
                title: "балкон",
                isChecked: false,
            }],
        typeOfGlazing: [{
            title: "Тёплое",
            isChecked: false
        }, {
            title: "Холодное",
            isChecked: false
        }, {
            title: "не знаю, в чем разница,нужна консультация",
            isChecked: false
        }],
        accessories: [
            {
                img: "ph1.jpg",
                title: "отлив",
                isChecked: false,
            }, {
                img: "ph2.jpg",
                title: "Подоконник",
                isChecked: false,
            }, {
                img: "ph3.jpg",
                title: "Откосы",
                isChecked: false,
            }, {
                img: "ph4.jpg",
                title: "Москитная сетка",
                isChecked: false,
            }],
        windowCount: 5
    },
    mutations: {
        CHENGE_STEP(state, value) {
            state.step = value
        },
        CHENGE_IS_CAN_NEW_STEP(state, value) {
            state.isCanNewStep = value
        },
        CHENGE_MESSAGE(state, value) {
            state.message = value
        },
        CLEAR_REQUESTS(state) {
            state.typeOfRooms.forEach(el => el.isChecked = false);
            state.typeOfGlazing.forEach(el => el.isChecked = false);
            state.accessories.forEach(el => el.isChecked = false);
            state.windowCount = 5;
        },
        CHENGE_TYPE_OF_ROOMS(state, index) {
            state.typeOfRooms[index].isChecked = !state.typeOfRooms[index].isChecked
        },
        CHENGE_TYPE_OF_CLAGING(state, index) {
            state.typeOfGlazing.forEach(el => el.isChecked = false)
            state.typeOfGlazing[index].isChecked = true
        },
        CHENGE_ACCESSORIES(state, index) {
            state.accessories[index].isChecked = !state.accessories[index].isChecked
        },
        CHANGE_WINDOW_COUNT(state, value) {
            state.windowCount = value
        }
    }
})