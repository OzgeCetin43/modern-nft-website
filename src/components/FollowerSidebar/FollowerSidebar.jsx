import React, { useState } from 'react'
import ReactSlider from 'react-slider'
import styles from "./FollowerSidebar.module.css"

const FollowerSidebar = () => {
    const [value, setValue] = useState([0.01, 10])

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_items}>
                <p>Sort by</p>
                <div>
                    <input type="checkbox" id="popular" name="popular" value="popular" />
                    <label htmlFor="popular">Popular</label>
                    <small>54</small>
                </div>
                <div>
                    <input type="checkbox" id="relavent" name="relavent" value="relavent" />
                    <label htmlFor="relavent">Relavent</label>
                    <small>43</small>
                </div>
                <div>
                    <input type="checkbox" id="attributes" name="attributes" value="attributes" />
                    <label htmlFor="attributes">Attributes</label>
                    <small>87</small>
                </div>
            </div>
            <div className={styles.sidebar_items}>
                <p>Category</p>
                <div>
                    <input type="checkbox" id="trending" name="trending" value="trending" />
                    <label htmlFor="trending">Trending</label>
                </div>
                <div>
                    <input type="checkbox" id="digitalArt" name="digitalArt" value="digitalArt" />
                    <label htmlFor="digitalArt">Digital Art</label>
                </div>
                <div>
                    <input type="checkbox" id="fashion" name="fashion" value="fashion" />
                    <label htmlFor="fashion">Fashion</label>
                </div>
                <div>
                    <input type="checkbox" id="games" name="games" value="games" />
                    <label htmlFor="games">Games</label>
                </div>
                <div>
                    <input type="checkbox" id="crypto" name="crypto" value="crypto" />
                    <label htmlFor="crypto">Crypto</label>
                </div>
            </div>
            <div className={styles.sidebar_items}>
                <p>Currency</p>
                <div>
                    <input type="checkbox" id="eth" name="eth" value="eth" />
                    <label htmlFor="eth">ETH</label>
                    <small>54</small>
                </div>
                <div>
                    <input type="checkbox" id="weth" name="weth" value="weth" />
                    <label htmlFor="weth">WETH</label>
                    <small>43</small>
                </div>
                <div>
                    <input type="checkbox" id="btc" name="btc" value="btc" />
                    <label htmlFor="btc">BTC</label>
                    <small>87</small>
                </div>
            </div>
            <div className={styles.sidebar_items}>
                <p>Price <b>${value[0]} -  ${value[1]}</b></p>
                <ReactSlider
                    className={styles.horizontal_slider}
                    thumbClassName={styles.example_thumb}
                    trackClassName={styles.example_track}
                    defaultValue={[value[0], value[1]]}
                    max={10}
                    min={0.01}
                    step={0.01}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    onChange={(value, index) => setValue(value)}
                />
            </div>
        </div>
    )
}

export default FollowerSidebar