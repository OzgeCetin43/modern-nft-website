import image1 from "../images/audio_1.png"
import image2 from "../images/audio_2.png"
import image3 from "../images/audio_3.png"

export const activity = [
    {
        id: 1,
        image: image1,
        name: "Human 1",
        number: 246,
        price: "4.811,69",
        increase: "23.34",
        decrease: null,
        quantity: 22,
        from: "Human 2",
        to: "Human 3",
        time: "22 min"
    },
    {
        id: 2,
        image: image2,
        name: "Human 2",
        number: 835,
        price: "3.207,75",
        increase: null,
        decrease: null,
        quantity: 13,
        from: "Human 3",
        to: "Human 4",
        time: "49 min"
    },
    {
        id: 3,
        image: image3,
        name: "Human 3",
        number: 129,
        price: "1.026,37",
        increase: null,
        decrease: "12.42",
        quantity: 9,
        from: "Human 1",
        to: "Human 1",
        time: "2 hours"
    }
]