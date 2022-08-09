import React, { useEffect,useState } from "react";
import { Container }        from "reactstrap";
import ReactQuill           from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const ReadSpeakerReader = () => {
    const ID_USER = "12602";
  const ID_CUSTOMER = "12602";
   var rspkr;
   var ReadSpeaker;
  const [value, setValue] = useState('');
  useEffect(() => {
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src=`//cdn1.readspeaker.com/script/${ID_USER}/webReader/webReader.js`;
    oHead.appendChild(oScript);
    console.log("Double-checked that the configuration has been set correctly ", rspkr?.item("general.usePost"));
    ReadSpeaker?.q(() => { rspkr?.ui.addClickEvents(); });
  }, [ReadSpeaker,rspkr])
  
  return (
    <React.Fragment>
      <section className="readspeaker-button-section mt-3 mb-2">
        <Container>
           
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            <div>{ value? value:""}</div>
                  <div id="readspeaker_button1" className="rs_skip rsbtn rs_preserve">
                    <a rel="nofollow" className="rsbtn_play" accessKey="L"
                        title="Listen to this page using ReadSpeaker webReader"
                        href="//app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=editorListContainer&amp;url=https%3A%2F%2Fdev-edio.ccaeducate.me%2Flearning%2Fcourses%2F53620%2Fresources%2F">
                        <span className="rsbtn_left rsimg rspart"><span className="rsbtn_text"><span>Listen</span></span></span>
                      <span className="rsbtn_right rsimg rsplay rspart">
                      <ReactQuill theme="snow" value={value} onChange={setValue} />
                      </span>
                    </a>
                </div>
              <span className="rsbtn_right rsimg rsplay rspart"></span>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default ReadSpeakerReader