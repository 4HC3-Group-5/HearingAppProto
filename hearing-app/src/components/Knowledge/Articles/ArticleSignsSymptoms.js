import {useContext} from "react";
import {AppContext} from "../../../AppProvider";

export default function ArticleSignsSymptoms() {
    const user = useContext(AppContext).user;

    return (
        <div className={'knowledgeArticle'}>
            <h1>Signs & Symptoms of the Hearing Loss</h1>
            <p>The symptoms of hearing loss depend on the type, degree and cause of hearing loss. If
                you have any of these signs or symptoms, you may have hearing loss caused by
                noise:</p>
            <ol>
                <li>
                    Speech and other sounds seem muffled.

                </li>
                <li>
                    Trouble hearing high-pitched sounds (e.g., birds, doorbell, telephone, alarm
                    clock).
                </li>
                <li>
                    Trouble understanding conversations when you are in a noisy place, such as a
                    restaurant.
                </li>
                <li>
                    Trouble understanding speech over the phone.
                </li>
                <li>
                    Trouble hearing speech consonants (e.g., trouble hearing the difference between
                    s and f, between p and t, or between sh and th in speech).
                </li>
                <li>
                    Asking others to speak more slowly and clearly.
                </li>
                <li>
                    Asking someone to speak more loudly or repeat what they said.
                </li>
                <li>
                    Turning up the volume of the television or radio.
                </li>
                <li>
                    inging in the ears.Loud noise can cause ringing, hissing, or roaring in the ears
                    (a condition called tinnitus). This usually occurs immediately after you are
                    exposed to the loud noise, but then it usually, though not always, goes away.
                    However, it can be an indication of early hearing damage.
                </li>
                <li>
                    Hypersensitivity to certain sounds (certain sounds are very bothersome or create
                    pain). After you are exposed to loud noise, sounds that seem normal to most
                    people may start to sound unbearably loud to you (a condition called
                    hyperacusis). People with this increased sensitivity to sound may experience
                    discomfort or physical pain. And it may be a sign of hearing damage.
                </li>
            </ol>

        </div>
    );
}
