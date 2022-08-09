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
                <p>There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?</p>
                <Container>

                    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
                        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker webReader" href="https://app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=readspeakerContainer&amp;url=https%3A%2F%2Fsatyamraz.github.io%2Freadspeaker%2F">
                            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Listen</span></span></span>
                            <span class="rsbtn_right rsimg rsplay rspart"></span>
                        </a>
                    </div>

                    <ReactQuill theme="snow" value={value} onChange={setValue} />

                </Container>
            </section>

            <section className="readspeaker-button-section mt-3 mb-2" id="readspeakerContainerSecond">

            <p>We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>

                <Container>

                    <div id="readspeaker_button2" class="rs_skip rsbtn rs_preserve">
                        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker webReader" href="https://app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=readspeakerContainerSecond&amp;url=https%3A%2F%2Fsatyamraz.github.io%2Freadspeaker%2F">
                            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Listen</span></span></span>
                            <span class="rsbtn_right rsimg rsplay rspart"></span>
                        </a>
                    </div>

                    <ReactQuill theme="snow" value={valueSecond} onChange={setValueSecond} />

                </Container>
            </section>

        </React.Fragment>
    )
}

export default ReadSpeakerReader