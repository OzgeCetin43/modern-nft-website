import { FaBitcoin, FaEthereum } from "react-icons/fa"
import { SiTether, SiBinance, SiDogecoin } from "react-icons/si"

export const currencyTable = [
    {
        id: 1,
        name: "Bitcoin",
        shortName: "BTC",
        svg: <FaBitcoin />,
        price: "$30382.81",
        change: "4.06",
        increase: false,
        volume: "$43.43 B",
        marketCap: "$572.34 B"
    },
    {
        id: 2,
        name: "Ethereum",
        shortName: "ETH",
        svg: <FaEthereum />,
        price: "$1882.03",
        change: "6.63",
        increase: false,
        volume: "$21.39 B",
        marketCap: "$243.87 B"
    },
    {
        id: 3,
        name: "Tether USD",
        shortName: "USDT",
        svg: <SiTether />,
        price: "$1.01",
        change: "0.5",
        increase: true,
        volume: "$25.43 B",
        marketCap: "$72.35 B"
    },
    {
        id: 4,
        name: "Binance Coin",
        shortName: "BNB",
        svg: <SiBinance />,
        price: "$302.45",
        change: "0.06",
        increase: true,
        volume: "$13.98 B",
        marketCap: "$42.41 B"
    },
    {
        id: 5,
        name: "Doge Coin",
        shortName: "DOGE",
        svg: <SiDogecoin />,
        price: "$0.0823",
        change: "1.06",
        increase: true,
        volume: "$345.43 M",
        marketCap: "$10.77 B"
    }
]