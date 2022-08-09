import React, { useEffect, useState }   from "react";
import { Container }                    from "reactstrap";
import ReactQuill                       from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const ReadSpeakerReader = () => {
    const ID_USER = "12602";
    var rspkr;
    var ReadSpeaker;
    const [value,       setValue]       = useState('');
    const [valueSecond, setValueSecond] = useState('');
    useEffect(() => {
        // const oHead   = document.getElementsByTagName('HEAD').item(0);
        // const oScript = document.createElement("script");
        // oScript.type  = "text/javascript";
        // oScript.src   = `//cdn1.readspeaker.com/script/${ID_USER}/webReader/webReader.js`;
        // oHead.appendChild(oScript);
        console.log("Double-checked that the configuration has been set correctly ", rspkr?.item("general.usePost"));
        if (window?.ReadSpeaker && rspkr) {
            ReadSpeaker?.q(() => { rspkr?.ui.addClickEvents(); });
        }
    }, [ReadSpeaker, rspkr])

    return (
        <React.Fragment>
            <section className="readspeaker-button-section mt-3 mb-2" id="readspeakerContainer">
                <Container>

                    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
                        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker webReader" href="https://app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=readspeakerContainer&amp;url=https%3A%2F%2Fsatyamraz.github.io%2Freadspeaker%2F">
                            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Listen</span></span></span>
                            <span class="rsbtn_right rsimg rsplay rspart"></span>
                        </a>
                    </div>

                    <ReactQuill theme="snow" value={value} onChange={setValue} />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </Container>
            </section>

            <section className="readspeaker-button-section mt-3 mb-2" id="readspeakerContainerSecond">

                <Container>

                    <div id="readspeaker_button2" class="rs_skip rsbtn rs_preserve">
                        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker webReader" href="https://app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=readspeakerContainerSecond&amp;url=https%3A%2F%2Fsatyamraz.github.io%2Freadspeaker%2F">
                            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Listen</span></span></span>
                            <span class="rsbtn_right rsimg rsplay rspart"></span>
                        </a>
                    </div>

                    <ReactQuill theme="snow" value={valueSecond} onChange={setValueSecond} />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </Container>
            </section>

        </React.Fragment>
    )
}

export default ReadSpeakerReader