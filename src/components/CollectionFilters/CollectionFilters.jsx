import React, { useState } from 'react'
import { GiWallet, GiLampreyMouth } from "react-icons/gi"
import { AiTwotoneFilePdf } from "react-icons/ai"
import { VscSortPrecedence } from "react-icons/vsc"
import { GrFormClose } from "react-icons/gr"
import ReactSlider from 'react-slider'
import styles from "./CollectionFilters.module.css"

const CollectionFilters = () => {
    const [priceDialogOpen, setPriceDialogOpen] = useState(false)
    const [saleTypesDialogOpen, setSaleTypesDialogOpen] = useState(false)
    const [fileTypesDialogOpen, setFileTypesDialogOpen] = useState(false)
    const [sortOrderDialogOpen, setSortOrderDialogOpen] = useState(false)
    const [verifiedDialogOpen, setVerifiedDialogOpen] = useState(false)
    const [value, setValue] = useState([0.01, 10])

    const onPriceDialogOpen = () => {
        setPriceDialogOpen(prev => !prev)
        setSaleTypesDialogOpen(false)
        setFileTypesDialogOpen(false)
        setSortOrderDialogOpen(false)
    }

    const onSaleTypesDialogOpen = () => {
        setPriceDialogOpen(false)
        setSaleTypesDialogOpen(prev => !prev)
        setFileTypesDialogOpen(false)
        setSortOrderDialogOpen(false)
        setVerifiedDialogOpen(false)
    }

    const onFileTypesDialogOpen = () => {
        setPriceDialogOpen(false)
        setSaleTypesDialogOpen(false)
        setFileTypesDialogOpen(prev => !prev)
        setSortOrderDialogOpen(false)
        setVerifiedDialogOpen(false)
    }

    const onSortOrderDialogOpen = () => {
        setPriceDialogOpen(false)
        setSaleTypesDialogOpen(false)
        setFileTypesDialogOpen(false)
        setSortOrderDialogOpen(prev => !prev)
        setVerifiedDialogOpen(false)
    }

    const onVerifiedDialogOpen = () => {
        setPriceDialogOpen(false)
        setSaleTypesDialogOpen(false)
        setFileTypesDialogOpen(false)
        setSortOrderDialogOpen(false)
        setVerifiedDialogOpen(prev => !prev)
    }

    return (
        <div className={styles.collection_filters_container}>
            <div className={styles.filter_item} onClick={() => onPriceDialogOpen()}>
                <GiWallet />
                <span>{value[0]} ETH - {value[1]}ETH</span>
                <GrFormClose onClick={() => setValue([0.01, 10])} />
                {
                    priceDialogOpen ? (<div className={styles.filter}>
                        <h3>Price Range</h3>
                        <p>Use slider for min and max price</p>
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
                        <div className={styles.fields}>
                            <div className={styles.field}>
                                <p>Min Price</p>
                                <span>{value[0]}</span>
                            </div>
                            <div className={styles.field}>
                                <p>Max Price</p>
                                <span>{value[1]}</span>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.button} onClick={() => setValue([0.01, 10])}>Clear</button>
                        </div>
                    </div>) : null
                }
            </div>
            <div className={styles.filter_item} onClick={() => onSaleTypesDialogOpen()}>
                <GiLampreyMouth />
                <span>Sale Types</span>
                <GrFormClose />
                {
                    saleTypesDialogOpen ? (<div className={styles.filter}>
                        <div>
                            <input type="checkbox" id="allTypes" name="allTypes" value="allTypes" />
                            <label htmlFor="allTypes">All Sale Types</label>
                        </div>
                        <div>
                            <input type="checkbox" id="buyNow" name="buyNow" value="buyNow" />
                            <label htmlFor="buyNow">Buy Now</label>
                        </div>
                        <div>
                            <input type="checkbox" id="onAuction" name="onAuction" value="onAuction" />
                            <label htmlFor="onAuction">On Auction</label>
                        </div>
                        <div>
                            <input type="checkbox" id="new" name="new" value="new" />
                            <label htmlFor="new">New</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hasOffers" name="hasOffers" value="hasOffers" />
                            <label htmlFor="hasOffers">Has Offers</label>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.button}>Clear</button>
                        </div>
                    </div>) : null
                }
            </div>
            <div className={styles.filter_item} onClick={() => onFileTypesDialogOpen()}>
                <AiTwotoneFilePdf />
                <span>File Types</span>
                <GrFormClose />
                {
                    fileTypesDialogOpen ? (<div className={styles.filter}>
                        <div>
                            <input type="checkbox" id="image" name="image" value="image" />
                            <label htmlFor="image">Image</label>
                        </div>
                        <div>
                            <input type="checkbox" id="video" name="video" value="video" />
                            <label htmlFor="video">Video</label>
                        </div>
                        <div>
                            <input type="checkbox" id="audio" name="audio" value="audio" />
                            <label htmlFor="audio">Audio</label>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.button}>Clear</button>
                        </div>
                    </div>) : null
                }
            </div>
            <div className={styles.filter_item} onClick={() => onSortOrderDialogOpen()}>
                <VscSortPrecedence />
                <span>Sort Order</span>
                <GrFormClose />
                {
                    sortOrderDialogOpen ? (<div className={styles.filter}>
                        <div>
                            <input type="checkbox" id="recentlyListed" name="recentlyListed" value="recentlyListed" />
                            <label htmlFor="recentlyListed">Recently Listed</label>
                        </div>
                        <div>
                            <input type="checkbox" id="endingSoon" name="endingSoon" value="endingSoon" />
                            <label htmlFor="endingSoon">Ending Soon</label>
                        </div>
                        <div>
                            <input type="checkbox" id="priceLowHigh" name="priceLowHigh" value="priceLowHigh" />
                            <label htmlFor="priceLowHigh">Price Low - High</label>
                        </div>
                        <div>
                            <input type="checkbox" id="priceHighLow" name="priceHighLow" value="priceHighLow" />
                            <label htmlFor="priceHighLow">Price High - Low</label>
                        </div>
                        <div>
                            <input type="checkbox" id="mostFavorited" name="mostFavorited" value="mostFavorited" />
                            <label htmlFor="mostFavorited">Most Favorited</label>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.button}>Clear</button>
                        </div>
                    </div>) : null
                }
            </div>
            <div className={styles.filter_item} onClick={() => onVerifiedDialogOpen()}>
                <VscSortPrecedence />
                <span>Verified Creator</span>
                <GrFormClose />
                {
                    verifiedDialogOpen ? (<div className={styles.filter}>
                        <div>
                            <input type="checkbox" id="verified" name="verified" value="verified" />
                            <label htmlFor="verified">Verified</label>
                        </div>
                        <div>
                            <input type="checkbox" id="notVerified" name="notVerified" value="notVerified" />
                            <label htmlFor="notVerified">Not Verified</label>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.button}>Clear</button>
                        </div>
                    </div>) : null
                }
            </div>
        </div >
    )
}

export default CollectionFilters 