import bitcoin from "../images/bitcoin.svg"
import tether from "../images/tether.svg"
import cardano from "../images/cardano.svg"
import binance from "../images/binance.svg"

export const currencies = [
    {
        id: 1,
        name: "Bitcoin",
        image: bitcoin,
        total: "0.2231345 BTC",
        usd: "11,032.24",
        increase: 12.5,
        decrease: null
    },
    {
        id: 2,
        name: "Tether",
        image: tether,
        total: "1.2345 USDT",
        usd: "1,032.24",
        increase: null,
        decrease: -1.5
    },
    {
        id: 3,
        name: "Cardano",
        image: cardano,
        total: "1.2370 ADA",
        usd: "532.94",
        increase: 12.5,
        decrease: null
    },
    {
        id: 4,
        name: "Binance",
        image: binance,
        total: "240.55 BUSD",
        usd: "340.24",
        increase: 1.5,
        decrease: null
    },
]