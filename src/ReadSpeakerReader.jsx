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

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
              many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).

           </p>

                </Container>
            </section>

        </React.Fragment>
    )
}

export default ReadSpeakerReader