import React from "react";
import DetailPage from "../DetailPage";
import coding from "../../../assets/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg"

const MeadicalCoding = () => {
    return (
        <DetailPage
            heading="HR Solutions"
            subheading="The best HR service provider"
            image={coding}
            content={<>
                <p>Easy staff provides Human Resources and consulting services for organizations in need of dedicated staffing and customized human resource solutions.

                    Our reliable and dedicated professionals enable an end-to-end solution that begins with an assessment of requirements to sourcing and grooming the right candidate for the job.  We utilize the latest crowd-based solutions to help pool the best talent and implement them into the workforce.</p>

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

export default MeadicalCoding;