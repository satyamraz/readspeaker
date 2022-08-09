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
            <h2>Without RS_PRESERVE CLASS</h2>
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

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tristique risus nec feugiat in fermentum. Quisque id diam vel quam elementum pulvinar etiam non quam. Ut pharetra sit amet aliquam id. Accumsan tortor posuere ac ut consequat semper. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nunc eget lorem dolor sed viverra ipsum. Massa id neque aliquam vestibulum morbi blandit cursus. In pellentesque massa placerat duis. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ornare arcu odio ut sem nulla. Quis lectus nulla at volutpat diam ut.
            </p>
            <p>
                Ultrices gravida dictum fusce ut placerat orci. Morbi quis commodo odio aenean sed. Tincidunt vitae semper quis lectus. Senectus et netus et malesuada. Elementum sagittis vitae et leo duis ut diam quam. A diam maecenas sed enim ut sem viverra. Enim praesent elementum facilisis leo vel. Bibendum est ultricies integer quis auctor elit sed. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Tellus mauris a diam maecenas sed enim ut. Amet consectetur adipiscing elit duis tristique. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Quam vulputate dignissim suspendisse in est.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Tristique risus nec feugiat in fermentum. Quisque id diam vel quam elementum pulvinar etiam non quam. Ut pharetra sit amet aliquam id. Accumsan tortor posuere ac ut consequat semper. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Nunc eget lorem dolor sed viverra ipsum. Massa id neque aliquam vestibulum morbi blandit cursus. In pellentesque massa placerat duis. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ornare arcu odio ut sem nulla. Quis lectus nulla at volutpat diam ut.
            </p>

            <h2>With RS_PRESERVE CLASS</h2>
            <section className="readspeaker-button-section mt-3 mb-2" id="readspeakerContainerSecond">

                <Container>

                    <div id="readspeaker_button2" class="rs_skip rsbtn rs_preserve">
                        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Listen to this page using ReadSpeaker webReader" href="https://app-na.readspeaker.com/cgi-bin/rsent?customerid=12602&amp;lang=en_us&amp;voice=Ashley&amp;readid=readspeakerContainerSecond&amp;url=https%3A%2F%2Fsatyamraz.github.io%2Freadspeaker%2F">
                            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Listen</span></span></span>
                            <span class="rsbtn_right rsimg rsplay rspart"></span>
                        </a>
                    </div>

                    <div className="rs_preserve">
                        <ReactQuill theme="snow" value={valueSecond} onChange={setValueSecond} />
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </Container>
            </section>

        </React.Fragment>
    )
}

export default ReadSpeakerReader