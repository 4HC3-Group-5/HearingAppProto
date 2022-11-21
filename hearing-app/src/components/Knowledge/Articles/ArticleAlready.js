import {useContext} from "react";
import {AppContext} from "../../../AppProvider";

export default function ArticleAlready() {
    const user = useContext(AppContext).user;

    return (
        <div className={'knowledgeArticle'}>
            <h1>Already Have Hearing Loss?</h1>
            <p>
                <b>Take Steps to Keep It from Getting Worse.</b> There is no medical or surgical treatment for hearing loss caused by noise. Damaged hair cells do not grow back. As much as possible, you should try to protect your hearing. If you do have hearing loss, you should take steps to keep it from getting worse.
            </p>
            <ol>
                <li>Avoid noisy places whenever possible.</li>
                <li>Use earplugs, protective ear muffs, or noise-canceling headphones when around loud noises.</li>
                <li>Keep the volume down when listening through earbuds or headphones.</li>
                <li>Ask your doctor for a hearing checkup if you suspect you have hearing loss.</li>
            </ol>
            <h2>Things You Can Do to Help Compensate for Your Hearing Loss</h2>
            <ol>
                <li>
                    <b>Look at the speaker.</b> Your brain can pick up a lot of information from visual cues that can supplement what you hear to help you understand the message. Everyone reads lips more than they realize, and facial expressions and body language can provide helpful cues as well.
                </li>
                <li>
                    <b>Find the best location for listening.</b> Placing yourself between the speaker and sources of background noise makes it much easier to hear and understand what is being said. Practice finding the best locations for different situations. For example, sit across from your host in a restaurant, or stay in a room apart from the music at a party.
                </li>
                <li>
                    <b>Choose favorable listening environments whenever possible.</b> The physical characteristics of a room can make it easier or harder to hear. For example, choose restaurants with better lighting or meeting rooms with carpeted floors and acoustic ceiling tiles that reduce the echo (or reverberation) in a room.
                </li>
                <li>
                    <b>Pay attention to the conversation.</b> It is easier to understand a conversation context than to understand a statement that has no background to help you know what it is about.
                </li>
                <li>
                    <b>Alert others to your hearing difficulty.</b> Speakers can use strategies to help you hear better as well, such as making sure they have your attention before they speak and giving you a clear view of their face.
                </li>
                <li>
                    <b>Use closed captioning.</b> Use closed captioning (CC) when you watch TV, movies, and online videos. Closed captioning can enhance your ability to understand the program.
                </li>
            </ol>
        </div>
    );
}
