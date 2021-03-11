import React from "react"
import Clearwater from './static/clearwaterCreek.png';
import Phillips from './static/phillipsRiver.png'
import {Figure} from 'react-bootstrap';

function About(props) {
  return (
    <div>
      <div className="row mx-3 mt-3 align-items-center">
        <div className="col mx-3">
          Kwiakah First Nation are Lekwala speaking peoples. The Kwiakah are identified as part of the Laich-Kwil-Tach. The Laich-Kwil-Tach are the southernmost speakers of this northern Wakashan language. The traditional material culture, subsistence, social organization, religious and ceremonial practices of the Kwakw ak a’wakw were extensively documented in the late 19th and early 20th century by Franz Boas. Kwiakah First Nation entered the Treaty Process in February 1994, and is now in Stage 4 of the six-stage process “Negotiating an agreement in principle” (AIP). The goal of stage 4 is to reach the major agreements that will form the basis of the treaty. The Nation is represented in Treaty negotiations by the Hamatla Treaty Society. Also, the Kwiakah are member of the Nanwakolas Council and the Kwakuitl District Council.
        </div>
        <div className="col mx-3">
          <Figure>
            <Figure.Image
              width={300}
              src={Clearwater}
            />
            <Figure.Caption>
              Here is the caption for this image. we could say where the photo was taken and by whom it was taken
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div className="row mx-3 mt-3 align-items-center">
        <div className="col mx-3">
          <Figure>
            <Figure.Image
              width={300}
              src={Phillips}
            />
            <Figure.Caption>
              Here is the caption for this image. we could say where the photo was taken and by whom it was taken
            </Figure.Caption>
          </Figure>
        </div>
        <div className="col mx-3">
          At present only 20 members are registered as Kwiakah First Nations. Under the leadership of Chief Steven Dick the nation has begun to become again a major player in the Kwiakah Tratitional Territory. The territory's core is located in the Phillips and Frederick Arm region and there is ample archaeological evidence to support this claim.
          The Kwiakah First Nation have decided to return to the territory and live off the land again. The beginning of the 21st century has provided our small nation with new economic opportunties and we have invited other groups to partner with us and to share the plenty benefits our territory has to offer. Partnerships for economic development are our new way of living off the land.
          Today most Kwiakah First Nations live in Campbell River on Vancouver Island, British Columbia.
        </div>
      </div>
    </div>
  )
}

export default About;
