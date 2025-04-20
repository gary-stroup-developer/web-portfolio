import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: (index + 1) * 0.3,
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

    }, []);

    return (
        <section id="work" ref={sectionRef} className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT  */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/qcScheduleBoard.PNG" alt="QC Schedule Board" />
                        </div>
                        <div className="text-content">
                            <h2>QC Scheduling Board</h2>
                            <p className="text-white-50 md:text-xl">
                                Developed a scheduling board based on historical analysis. Coupled with capacity model to balance workload with lead time.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper">
                                <img src="/images/qcKanban.PNG" alt="QC Kanban" />
                            </div>
                            <div className="text-content">
                                <h2>QC Kanban Process</h2>
                                <p className="text-white-50 md:text-xl">
                                    Developed a kanban system using a two-bin setup and restock cards to manage consumables inventory, resulting in improved
                                    service levels for sterility testing on-time completion.
                                </p>
                            </div>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/onboardGuide.PNG" alt="Onboarding guide" />
                            </div>
                            <div className="text-content">
                                <h2>Onboarding Guides</h2>
                                <p className="text-white-50 md:text-lg">
                                    Created comprehensive onboarding guides tailored for cell culture and purification teams to standardize training, improve
                                    knowledge transfer, and reduce onboarding time. The guides include step-bystep instructions, visual aids, and FAQ/troubleshooting 
                                    sections.
                                </p>
                            </div>
                        </div>
                        <div className="project" ref={project4Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/skillsMatrix.PNG" alt="Skills Matrix" />
                            </div>
                            <div className="text-content">
                                <h2>Skills Matrix</h2>
                                <p className="text-white-50 md:text-lg">
                                    Developed and deployed a dynamic skills matrix with a visual heatmap to assess training needs, track operator capabilities, and 
                                    guide cross-training efforts. The matrix enabled managers to quickly identify skill gaps and strategically allocate resources based
                                    on operational demand.
                                </p>
                            </div>
                        </div>
                        <div className="project" ref={project5Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/tier1.PNG" alt="Tier 1 DMS board" />
                            </div>
                            <div className="text-content">
                                <h2>Daily Management System: Tier 1 board</h2>
                                <p className="text-white-50 md:text-lg">
                                    Led the design and implementation of a Tier 1 Daily Management Board for the cell culture group to enhance KPI tracking, cross-functional communication,
                                    and structured problem solving. The board incorporated modules for improvements, operator heatmap, and training, promoting a culture of continuous improvement and accountability. 
                                    Key outcomes include improved KPI ownership and problem solving and integrating training and idea generation into daily operations.
                                </p>
                            </div>
                        </div>
                        <div className="project" ref={project6Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/stemCell_3D.jpg" alt="Organoid training videos" />
                            </div>
                            <div className="text-content">
                                <h2>Organoid Training Videos</h2>
                                <p className="text-white-50 md:text-lg">
                                    Produced a video training series to enhance onboarding and skill development for stem cell manufacturing operators. The 6-part series covers core concepts, best practices, and critical operations
                                    for organoid processing, designed to ensure consistency and reduce training time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection