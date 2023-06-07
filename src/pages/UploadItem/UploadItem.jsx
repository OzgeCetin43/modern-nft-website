import React from 'react'
import { BiImageAdd } from "react-icons/bi"
import { Button } from "../../components/indexComponents"
import { collectionUploadItem } from '../../assets/data/colletionUploadItem'
import styles from "./UploadItem.module.css"

const UploadItem = () => {
    return (
        <div className={styles.upload_item_container}>
            <h1 className={styles.upload_item_main_title}>Create New Item</h1>
            <p className={styles.upload_item_description}>You can set preferred display name, create your profile URL and manage other personal settings.</p>
            <hr />
            <h2 className={styles.upload_item_title}>Image, Video, Audio, or 3D Model</h2>
            <p className={styles.upload_item_description}>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
            <div className={styles.upload_file_container}>
                <BiImageAdd />
                <div>
                    <input type="file" name="file" id="file" className={styles.input_file} />
                    <label htmlFor="file">Upload a file </label>
                    <span>or drag and drop</span>
                </div>
            </div>
            <div className={styles.upload_item_info_container}>
                <div>
                    <h3>Item Name</h3>
                    <input type='text' placeholder='NFT name' />
                </div>
                <div>
                    <h3>External Link</h3>
                    <input type='text' placeholder='https://' />
                </div>
                <small>NFTopia will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</small>
                <div>
                    <h3>Description</h3>
                    <textarea rows="20"></textarea>
                </div>
                <small>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</small>
            </div>
            <hr />
            <h3>Choose collection</h3>
            <p className={styles.upload_item_description}>Choose an exiting collection or create a new one</p>
            <div className={styles.collection_container}>
                {
                    collectionUploadItem.map(item => (
                        <div className={styles.collection_item} key={item.id}>
                            <img src={item.image} alt="collection" />
                            <h3>{item.name}</h3>
                        </div>
                    ))
                }
            </div>
            <div className={styles.actions}>
                <Button path="/nft-detail" name="Upload Item" />
                <Button path="/nft-detail" name="Preview Item" />
            </div>
        </div>
    )
}

export default UploadItem