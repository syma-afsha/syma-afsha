import React from "react";
import "./research.css";
import {Row, Col, Button} from "react-bootstrap"
import Paper from "./image/flowchart-new.png";
import SignPaper from "./image/signpaper.jpg"
import Violent from "./image/violent.png"
import AV from  "./image/re.png"
import Journal from  "./image/re1.png"
export default function ResearchBody(){
    return(
        <div className="Researchbody">
            <div className="research-container">
            <p className="research-text"><b>Research Highlights</b></p>
                <Row>

                    <Col xs={12} md={4} lg={4}>
              
            <div className="card-research">
            <img src= {Paper} alt="paper" className="img-research1" />
            <hr/>
            {/* <span class="tag tag-purple">Published</span> */}
  <div className="container">
  {/* <Button className="button">
 <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
 <Button className="button" >
 <a href=" https://ieeexplore.ieee.org/abstract/document/9775816" target="_blank">IEEEXPLORE</a></Button>
 <br/>
 
  
    <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Machine Learning Models for Content
Classification in Film Censorship and Rating.</b></p> 
    <p style={{color: "gray", margin: 5, fontSize: 14}}>Automated Film Censorship and Rating (AFCR) has
recently turned out to be a major research area of Machine
Learning (ML). The production and streaming services of films
including movies, tv-series, animations and other audio-visual
contents have been widely expanded leading to their manual
censorship and rating to be a more exhausting task. Development
of ML based methods has thus been emerging to designing an
AFCR system. However, the initial ad-hoc efforts of developing
the AFCR system demand a “complete” conceptual model of the
system with its potential classes and their criteria. This paper
primarily attempts to determine both the general and contextual
classes of the content, and their criteria for an AFCR system. Besides, the state-of-the-art AFCR systems have been systematically
reviewed to identify their underlying ML models, advantages and
limitations. With a comparative analysis of the exiting ML models, we have demonstrated the effectiveness of sequential and multimodal analysis in the development of an efficient AFCR system.</p>  <br/>
<br/> <br/> <br/> 
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2022 International Conference on Innovations in Science, Engineering and
Technology.</p>
  </div>
 

  </div>

                    </Col>



                    <Col xs={12} md={4} lg={4}>
                   
            <div className="card1-research" >
            <img src= {Violent} alt="violent" className="img-research2" />
            <hr/>
            {/* <span class="tag tag-purple">Published</span> */}
  <div className="container">
  {/* <Button className="button">
 <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
 <Button className="button">
 <a href=" https://ieeexplore.ieee.org/abstract/document/9775874" target="_blank">IEEEXPLORE</a></Button>
 <br/>
 
  
    <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Developing BrutNet: A New Deep CNN Model with GRU for
Realtime Violence Detection.</b></p> 
    <p style={{color: "gray", margin: 5, fontSize: 14}}>Computer vision with deep learning has recently
emerged for Automatic Violence Detection and Classification
(AVDC) with enormous potential. This paper reports an early development of a new Deep Convolutional Neural Network (DCNN)
model that we call BrutNet. Building on the Gated Recurrent Unit
(GRU), the BrutNet is designed to operate on the patterns within
multiple frames of a video or video clips of shape 160 × 90 with
a duration of at least 3 seconds. For obtaining the image-feature
set and the pattern of each frame, convolutional layers were
considered for each frame of the time distributed layer. The model
thus encodes the data from 4D to 2D to obtain a 512-features
set for each frame. The temporal nature of these frames is then
extracted by the GRU layer as a 1D vector, which is processed by
several dense layers. A binary classification is thereby performed
denoting the content as violent and non-violent. Dropout layers
with a dropping rate of 0.25 were added to avoid overfitting the
model. Besides, ReLu-activation and sigmoid-activation functions
were defined in the hidden and output layers, respectively. Being
trained with a recent high-resolution AVDC video dataset and
appropriate hyper-parameters on the NVIDIA Tesla K80 GPU of
Google Colab, the initial testing and validation of the model has
recorded a test accuracy of 90.00% outperforming the earlier
LSTM based ResNet50 model.</p> <br/> 
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2022 International Conference on Innovations in Science, Engineering and
Technology.</p>
  </div>
 

  </div>

                    </Col>


                    <Col xs={12} md={4} lg={4}>
                   
                   <div className="card2-research" >
                   <img src= {SignPaper} alt="signpaper" className="img-research" />
                   <hr/>
                   {/* <span class="tag tag-purple">Published</span> */}
         <div className="container">
         {/* <Button className="button">
        <a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
        <Button className="button">
        <a href="https://ieeexplore.ieee.org/document/9667804"  target="_blank">IEEEXPLORE</a></Button>
        <br/>
        
         
           <p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Improving Automatic Sign Language Translation with Image Binarisation and Deep Learning.</b></p> 
           <p style={{color: "gray", margin: 5, fontSize: 14}}> Sign Language Translation (SLT) has been widely investigated to provide a futuristic solution to tackle human speech and hearing disability. Recent deep learning-based SLT models have redefined computer vision-based detection and classification to automatically translate the hand-gestured based sign language (SL) into natural language (NL) with higher accuracy. Unlike the existing models that directly learn from the natural image-sets, in this paper, we propose a 2D Convolutional Neural Network (CNN) model with customised hyper-parameters to be trained with binary SL image-sets. We thus introduce a binarisation step to preprocess the images of size 28 × 28 to feed the model. Preliminary results of our model trained with binarised image-set demonstrate its potential with an impressive classification accuracy of 99.99% on the NVIDIA Tesla K80 GPU environment (Google Colab) for an automatic SLT system.</p> <br/><br/> <br/> <br/> <br/> 
       <p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2021 5th International Conference on Electrical Engineering and
Information Communication Technology (ICEEICT).</p>
         </div>
        
       
         </div>
       
                           </Col>
         
                </Row>
                </div>


                <div style={{marginTop:"30px"}} className="new-container">
                <Row>

<Col xs={12} md={4} lg={4}>

<div className="card-research">
<img src= {AV} alt="paper" className="img-research" />
<hr style={{marginTop:"15px"}}/>
{/* <span class="tag tag-purple">Published</span> */}
<div className="container">
{/* <Button className="button">
<a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
<Button className="button" >
<a href=" https://ieeexplore.ieee.org/abstract/document/10505952" target="_blank">IEEEXPLORE</a></Button>
<br/>


<p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>Advanced Driving Assistance System using Computer Vision and Deep Learning Algorithms.</b></p> 
<p style={{color: "gray", margin: 5, fontSize: 14}}>Advanced Driving Assistant System (ADAS) is one
of the key safety features in every modern car as most car
accidents happen due to driver error. By using ADAS, this kind of
accident can be either avoided or the damage can be minimized.
This research study intends to develop an ADAS system using
Computer Vision (CV) and Deep Learning (DL) algorithm, which
can be implemented in lane detection, lane keeping assist,
autonomous braking assist, high beam assist, and blind spot
monitoring of the vehicles. For lane keeping assist and lane
detection, CV is used whereas for the other safety features, object
detection model has been built by using DL. For the object
detection model, the precision and mean average precision of the
overall model has been analyzed to enhance the performance of
the proposed system. </p>  <br/>
<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/>
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}>2023 Third International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS).</p>
</div>


</div>

</Col>

<Col xs={12} md={4} lg={4}>

<div className="card1-research">
<img src= {Journal} alt="paper" className="img-research2" />
<hr/>
{/* <span class="tag tag-purple">Published</span> */}
<div className="container" >
{/* <Button className="button">
<a href="https://www.researchgate.net/profile/Mahmudul-Haque-4/publication/360812725_Machine_Learning_Models_for_Content_Classification_in_Film_Censorship_and_Rating/links/629219a58d19206823e2cf70/Machine-Learning-Models-for-Content-Classification-in-Film-Censorship-and-Rating.pdf" target="_blank">Published</a></Button> */}
<Button className="button1"style={{width:"100px"}}>
<a href="https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/tje2.12375" target="_blank" style={{fontSize:"15px"}} >Journal</a></Button>
<br/>


<p style={{fontSize:15, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}><b>BrutNet: A novel approach for violence detection and
classification using DCNN with GRU.</b></p> 
<p style={{color: "gray", margin: 5, fontSize: 14}}>Automatic Violence Detection and Classification (AVDC) with deep learning has garnered
significant attention in computer vision research. This paper presents a novel approach
for combining a custom Deep Convolutional Neural Network (DCNN) with a Gated
Recurrent Unit (GRU) in developing a new AVDC model called BrutNet. Specifically, a
time-distributed DCNN (TD-DCNN) is developed to generate a compact 2D representation with 512 spatial features per frame from a set of equally-spaced frames of dimension
160×90 in short video segments. Further to leverage the temporal information, a GRU
layer is utilised, generating a condensed 1D vector that enables binary classification of
violent or non-violent content through multiple dense layers. Overfitting is addressed by
incorporating dropout layers with a rate of 0.5, while the hidden and output layers employ
rectified linear unit (ReLU) and sigmoid activations, respectively. The model is trained on
the NVIDIA Tesla K80 GPU through Google Colab, demonstrating superior performance
compared to existing models across various video datasets, including hockey fights, movie
fights, AVD, and RWF-2000. Notably, the model stands out by requiring only 3.416 million
parameters and achieving impressive test accuracies of 97.62%, 100%, 97.22%, and 86.43%
on the respective datasets. Thus, BrutNet exhibits the potential to emerge as a highly efficient and robust AVDC model in support of greater public safety, content moderation and
censorship, computer-aided investigations, and law enforcement. </p>  <br/>
<br/> <br/> <br/> 
<p  style={{ fontSize: 12, textAlign: "justify" , fontFamily:"Georgia, serif", margin: 5}}> The Journal of Engineering 2024: e12375 © 2024 The Institution of Engineering and Technology.</p>
</div>


</div>

</Col>
</Row>
<div style={{marginTop:"80px"}} className="new-container">
    <Row>

<Col xs={12} md={4} lg={4}>
</Col>
</Row>
</div>

            
            </div>


            
         

        </div>
    
    )
}