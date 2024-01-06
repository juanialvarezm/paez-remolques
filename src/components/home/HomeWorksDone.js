import React from 'react'
import "./HomeWorksDone.css"
import carcrash from "../../data/carcrash-lp7.jpg"
import line from "../../data/minus-horizontal-straight-line.png"
import {motion} from "framer-motion"

const HomeWorksDone = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className='hworks-wrapper'>
                <div >
            <div className='header'>
                <h2>TRABAJOS REALIZADOS</h2>
                <img src={line} alt='line' className='line' />
            </div>
            <div className='right-side'>
                <div className='grid1 img1'>
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/23167679_1578339368908579_3258614273388697668_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH8bpqxU88lCs3P5ZhRb7UtxTKAkX0VXOrFMoCRfRVc6vTLuDw32L4yh87ahRGNz-r0Hk91uROIPZLXF3A95cFk&_nc_ohc=h42gPmM3UVUAX9plwjO&_nc_ht=scontent.faep14-2.fna&oh=00_AfDTSdgRF_nMablnIDoxts0zTIekgQtAZ9vBIcLF8ImDJg&oe=65BE5D5B" alt='car'/>
                </div>
                <div className='img2'>
                    <img src="https://scontent.faep14-3.fna.fbcdn.net/v/t31.18172-8/11060931_857714214304435_6556098514442823330_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeGCSBrZ7a1OG2oipQOsD2ccil6uZ0MHeTKKXq5nQwd5Mm-ZRfJ7YASED6-0faOxqOSBgsthoKtj_mH7CTyrPBku&_nc_ohc=CFRJVvEiO3QAX-xFm7w&_nc_ht=scontent.faep14-3.fna&oh=00_AfAyNIc1X29a6Q_BtepAG3IXv-YZGjE6zUSa_tsnalRrAA&oe=65BE44B1" alt='car'/>
                </div>
                <div className='img3'>
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t31.18172-8/10856685_807189379356919_75334046596844496_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeHDL6jk8RH7wlnmb-2q-aUW1_ySct_A9AHX_JJy38D0AX59YHmlNR__8YPTHrBEJPhsWSBTDRdXEOKGUmQ2FZTP&_nc_ohc=QN3gpShmvysAX_mB0Ij&_nc_ht=scontent.faep14-2.fna&oh=00_AfBg6adcNo3huz8PMNRA1JV_reconU4T4NACHAhC4bpKig&oe=65BE6F87" alt='car'/>
                </div>
                <div className='img4'>
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/20770020_1510691895673327_1881662420411773657_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH_GXSqvFEUtSvCpsfslbxUZmBrPu273rBmYGs-7bvesPtoNerbGtVy7VladhiiWmXRcSbmx6eYr3uGuZFkYGYi&_nc_ohc=wUqaXeXyS3kAX8bV990&_nc_ht=scontent.faep14-2.fna&oh=00_AfBpon1HW_o7TTtp8vAJI-J-2VczCOUSZWhFR8I2hf9ZAQ&oe=65BE6B3B" alt='car'/>
                </div>
                <div className='img5'>
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/23031513_1578339225575260_6778270877811747871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFh-bCbLH16iSqrjP-QJC2zATIsGCE6r9IBMiwYITqv0muadeqbwvf1wJIP9xM0Ryvq8oZaw_48PsOA9zXbgYIM&_nc_ohc=0uTQYiHoJqIAX_-8y3B&_nc_ht=scontent.faep14-2.fna&oh=00_AfDfAEe_FSotE3DgcVQRj9JpHB431ab-IhlsUMOIq5xxAw&oe=65BE5DCD" alt='car'/>
                </div>
                <div className='grid6'>
                    <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.18169-9/23031432_1578339008908615_6924129277482036042_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeG-w3ZcQ3OdqNgzxigbIx3RJkstPy6mgqImSy0_LqaCosTsIDJwcplKOUva5xWYTO_n7GH3u8sCXUDyYUuG_xqB&_nc_ohc=yQrXeSTliM8AX93o8oT&_nc_ht=scontent.faep14-2.fna&oh=00_AfAP1o8DEyWQOMIX2h-NWWtZgzDwh85wINQaRFKqX3gHgA&oe=65BE3BA1" alt='car'/>
                </div>
            </div>
            <div className='btn-hwork'>
                <button>
                    See More
                </button>
            </div>
        </div>
    </motion.div>
    )
}

export default HomeWorksDone