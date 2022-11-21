import {useContext} from "react";
import {AppContext} from "../../../AppProvider";

export default function ArticleNoise() {
    const user = useContext(AppContext).user;

    return (
        <div className={'knowledgeArticle'}>
            <h1>The Damage of Loud Noises</h1>
            <p>
                <b>Loud Noise Can Cause Hearing Loss Quickly or Over Time.</b> Hearing loss can
                result from a single loud sound (like firecrackers) near your ear. Or, more often,
                hearing loss can result over time from damage caused by repeated exposures to loud
                sounds. The louder the sound, the shorter the amount of time it takes for hearing
                loss to occur. The longer the exposure, the greater the risk for hearing loss
                (especially when hearing protection is not used or there is not enough time for the
                ears to rest between exposures).

            </p>
            <p>
                <b>Hearing Loss Can Be Temporary or Permanent.</b> Hearing loss is a decrease in
                your ability to hear or understand speech and sounds around you. Hearing loss can
                happen when any part of the ear or the nerves that carry information on sounds to
                your brain do not work in the usual way. In some cases, hearing loss can be
                temporary. However, it can become permanent when vital parts of the ear have been
                damaged beyond repair. Damage to any part of the ear can lead to hearing loss.
            </p>
            <p>
                Loud noise is particularly harmful to the inner ear (cochlea). A one-time exposure
                to extreme loud sound or listening to loud sounds for a long time can cause hearing
                loss. Loud noise can damage cells and membranes in the cochlea. Listening to loud
                noise for a long time can overwork hair cells in the ear, which can cause these
                cells to die. The hearing loss progresses as long as the exposure continues. Harmful
                effects might continue even after noise exposure has stopped. Damage to the inner
                ear or auditory neural system is generally permanent.
            </p>
            <p>
                The effect of noise on hearing depends on how loud it is (sound intensity) and how
                long it lasts (duration). Avoiding noisy situations is the best prevention. If you
                can’t avoid the noise, use adequate hearing protection.
            </p></div>
    );
}
