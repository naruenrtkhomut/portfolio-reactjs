import './Education.css';
import { useState, useEffect } from 'react';
import MasterDegree from './educations/MasterDegree'
import BachelorDegree from './educations/BachelorDegree'


function Education({getEducation, __EDUCATION_PAGE}) {
    const [educationGet, educationSet] = useState(getEducation);
    return (
        <>
            <div class="eduation-main-page">
                <div class="education-header-menu">
                    <div onClick={() => educationSet(__EDUCATION_PAGE.MASTER)}>Master Degree</div>
                    <div onClick={() => educationSet(__EDUCATION_PAGE.BACHELOR)}>Bachelor Degree</div>
                    <div>Programming</div>
                    <div>CyberSecurity</div>
                    <div>Tools</div>
                </div>
                <div>
                    <div class="education-main-view">
                        {
                            (educationGet == __EDUCATION_PAGE.MASTER)
                            ? <MasterDegree />
                            : (educationGet == __EDUCATION_PAGE.BACHELOR)
                            ? <BachelorDegree />
                            : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Education;