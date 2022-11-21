import {useContext} from "react";
import {AppContext} from "../../../AppProvider";

export default function ArticleHearingLoss() {
    const user = useContext(AppContext).user;

    return (
        <div className={'knowledgeArticle'}>
            <h1>What is Hearing Loss?</h1>
            <p>
                <b>Hearing Loss:</b> A hearing loss can happen when any part of the ear is not working in the usual way. This includes the outer ear, middle ear, inner ear, hearing (acoustic) nerve, and auditory system.
            </p>
            <p>
                <b>Hearing Loss in Children:</b> Hearing loss can affect a child’s ability to develop speech, language, and social skills. The earlier children with hearing loss start getting services, the more likely they are to reach their full potential.
            </p>
            <p>
                <b>Hearing Screening:</b> Hearing screening is a test to tell if people might have hearing loss. Hearing screening is easy and not painful. It takes a very short time — usually only a few minutes.
            </p>
        </div>
    );
}
