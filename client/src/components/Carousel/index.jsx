import React from 'react'
import img1 from '../../assets/camera1.jpg'
import img2 from '../../assets/camera2.jpg'
import img3 from '../../assets/camera3.jpg'
import img4 from '../../assets/camera4.jpg'
import CarouselSlider from 'react-carousel-slider'
const Slider = () => {
    let jsonData = {    
        'autoSliding': 
            {
             "items": [
                 {
                     "imgSrc": `${img1}`
                 },
                 {
                     "imgSrc": `${img2}`
                 },
                 {
                     "imgSrc": `${img3}`
                 },
                 {
                     "imgSrc": `${img4}`
                 }
             ]
         }
    }
    let manner = {
        autoSliding: {interval: "3s"},
        duration: "2s"
    };
    
    let buttonSetting = {
        placeOn: "middle-inside",
        hoverEvent: true,
        style: {
            left: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            },
            right: {
                height: "50px",
                width: "50px",
                color: "#929393",
                background: "rgba(225, 228, 232, 0.8)",
                borderRadius: "50%"
            }
        }
    };

    
    return (
        <CarouselSlider slideItems = {jsonData.autoSliding.items}  
        sliderBoxStyle = {{height: "450px", width: "80%", background: "transparent"}}
         manner = {manner} 
         buttonSetting = {buttonSetting} />
    )
}

export default Slider

