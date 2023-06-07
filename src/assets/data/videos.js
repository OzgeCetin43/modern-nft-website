import video1 from "../images/audio_1.png"
import video2 from "../images/audio_2.png"
import video3 from "../images/audio_3.png"
import creator1 from "../images/creator_1.svg"
import creator2 from "../images/creator_2.svg"
import creator3 from "../images/creator_3.svg"
import creator4 from "../images/creator_4.svg"
import creator5 from "../images/creator_5.svg"
import creator6 from "../images/creator_6.svg"
import creator7 from "../images/creator_7.svg"
import creator8 from "../images/creator_8.svg"

export const videos = [
    {
        id: 1,
        number: 1234,
        creators: {
            creator1: creator1,
            creator2: creator2,
            creator3: creator3,
            creator4: creator4
        },
        price: "1.356",
        image: video1,
        stock: 286
    },
    {
        id: 2,
        number: 12345,
        creators: {
            creator1: creator5,
            creator2: creator6,
            creator3: creator7,
            creator4: creator8
        },
        price: "0.947",
        image: video2,
        stock: 122
    },
    {
        id: 3,
        number: 12346,
        creators: {
            creator1: creator1,
            creator2: creator2,
            creator3: creator3,
            creator4: creator4
        },
        price: "0.927",
        image: video3,
        stock: 198
    }
]