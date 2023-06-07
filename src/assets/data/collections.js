import creator1 from "../images/creator_1.svg"
import creator2 from "../images/creator_2.svg"
import collection1 from "../images/audio_1.png"
import collection2 from "../images/audio_2.png"
import collection3 from "../images/audio_3.png"
import collection4 from "../images/audio_4.png"

export const collections = [
    {
        id: 1,
        name: "Collection 1",
        creator: creator1,
        creatorName: "Steven S. Cook",
        images: {
            image1: collection1,
            image2: collection2,
            image3: collection3,
            image4: collection4,
        }
    },
    {
        id: 2,
        name: "Collection 2",
        creator: creator2,
        creatorName: "Nancy Riddell",
        images: {
            image1: collection2,
            image2: collection3,
            image3: collection4,
            image4: collection1,
        }
    }
]