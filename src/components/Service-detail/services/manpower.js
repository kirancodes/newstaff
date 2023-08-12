import React from "react";
import DetailPage from "../DetailPage";
import transcript from "../../../assets/brooke-cagle-g1Kr4Ozfoac-unsplash (1).jpg"

const MeadicalTranscription = () => {
    return (
        <DetailPage
            heading="Manpower Supply"
            subheading="The best Manpower Supply service ever in US"
            image={transcript}
            content={<>
                <p>As a pioneering HR solutions provider, Easy staff ensures a transparent and reliable recruitment process that encompasses highly skilled professionals leveraged across industries at various roles.

                    Our team of dedicated recruiters recruit industry-specific talent and help adapt to business needs within a short time frame.

                    We are engaged in recruiting highly skilled professionals in Medical Coding, Medical Transcribing, Medical Billing, AR calling, and other IT requirements.  We also recruit individuals for an ever-evolving IT sector
                </p>

            </>}
            features={<>
                <li>Agility</li>
                <li>Responcive</li>
                <li>Futurestic</li>
                <li>Friendly</li>
            </>}

        />
    )
}

export default MeadicalTranscription;