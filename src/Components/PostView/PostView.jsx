import React from "react";
import ChildContainer from "./childContainer";
import "./postView.css";
import SiteHeader from "./siteHeader";
import Hayabusa from "../images/Hayabusa.jpg"
import zx10r from "../images/zx10rr.jpg"
import smile  from "../images/smile.jpg"
import cbr1000rr from "../images/cbr1000rr.jpg"


const PostView = () => {
      return (
            <div id="postContainer">
                  <div id="logoNav"><SiteHeader /></div>
                  <div id="childContainer"  ><ChildContainer src={Hayabusa} name="Swamy" likes="21" location="L.A California" description="This is Description 4 for Instaclone project 1"/></div>
                  <div id="childContainer2" ><ChildContainer src={zx10r} name="BalaKrishna" likes="200" location="San-Antonio California" description="This is Description 4 for Instaclone project 2"  /></div>
                  <div id="childContainer3" ><ChildContainer src={smile} name="Ram Devalla" likes="251" location="L.V California" description="This is Description 4 for Instaclone project 3"/></div>
                  <div id="childContainer4" ><ChildContainer src={cbr1000rr} name="Salman Khan" likes="2000" location="S.F California" description="This is Description 4 for Instaclone project 4"/></div>
            </div>
      )
}

export default PostView;