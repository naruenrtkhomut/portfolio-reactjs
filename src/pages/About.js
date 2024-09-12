import './About.css';


function About({getPage, __MAINPAGE}) {
    const experiencePage = () => getPage(__MAINPAGE.EXPERIENCE);
    const educationBachelor = () => getPage(__MAINPAGE.EDUCATION_BACHELOR);
    const educationMaster = () => getPage(__MAINPAGE.EDUCATION_MASTER);
    return (
        <>
            <div id="about-page">
                <div>
                    <div class="about-page-headername">Naruenart Khomut</div>
                    <div class="about-page-headername-01">Senior Production Technology Engineer 3+ years</div>
                    <div class="about-page-headername-01">Programmer 1+ years</div>
                    <div class="about-page-headername-01">Failure Analysis 3+ years</div>
                    <div class="about-total">Total work experience 6+ years</div>
                    <div class="about-project">
                        <div class="about-project-header">Project list</div>
                        <div class="about-project-list">
                            1. Autocapture: window Application in C# (4.8).
                        </div>
                        <div class="about-project-list">
                            2. Work capture: Window Application in C# (4.8).
                        </div>
                        <div class="about-project-list">
                            3. Summary view: Website with ASP.NET(.net 5.0).
                        </div>
                        <div class="about-project-list">
                            4. Summarize data on moblie: Android Application using JAVA.
                        </div>
                        <div class="about-project-list">
                            5. Employee daily report: Website of daily report of work with ASP.NET (.net  5.0).
                        </div>
                        <div class="about-project-list">
                            6. Car's summary RestFul API: ASP.NET (.net core 5.0).
                        </div>
                        <div class="about-project-list">
                            7. An Analysis of Electronic Diagram using Computer Vision Techniques. Web applicating using Python, Image Processing, Object Detection and Electronic Circuit Analysis.
                        </div>
                    </div>
                </div>
                <div class="about-paragraph">
                    <div class="about-get-to-know">Get to know about me</div>
                    <article class="about-article-left">
                        <div>
                            <img src="university-svgrepo-com.svg"/>
                        </div>
                        <div>
                            <h3>Back in 2012 I was first year in Universtiy</h3>
                            <p>&emsp;&emsp;I got fleshman in university as <span class="about-education-click about-click" onClick={educationBachelor}>Bachelor degree of Electronic and Telecommunication Engineering</span> at Rajamangala University of Technology Isan Khonkaen Campus. I learned about electronic circuit and telecomunication. The first thing I knew about programming when I had class of Microcontroller and C Programming. But that time I got F grade because I didn't event know about anything in programming. First project of programming class is about calculator programming in window application by using C# winform I can't send in time and got F grade. After then I was learning a lot about programmin and I got spiration about IT department when I knew about hacking. In that time I was learning about system, OS and programming. That why I knew about system and programming.</p>
                        </div>
                    </article>
                    <article class="about-article-right">
                        <div>
                            <h3>First job after graduated</h3>
                            <p>&emsp;&emsp;I got first job as <span class="about-experience-click about-click" onClick={experiencePage}>Failure Analysis Engineering</span> at Delta Electronic Thailand PLC. I worked as Failure Analysis Engineer around 2.9 years. My main role is about reducing failure of product and improving productivity. In this product is about electronic charger of car for exporting. This job helped me to improve skill in analysis thinking and critical thinking when I have any problem and I have to solve it and made me to understand about electronic analysis. But I started to learn about programming when I got first job after left university. I lerned about C/C++ programming and made window application.</p>
                            
                        </div>
                        <div>
                            <img src="work-case-svgrepo-com.svg"/>
                        </div>
                    </article>
                    <article class="about-article-left">
                        <div>
                            <img src="programmer-software-engineer-coder-software-developer-svgrepo-com.svg"/>
                        </div>
                        <div>
                            <h3>I left the job as Failure Analysis Engineer.</h3>
                            <p>&emsp;&emsp;My second job is a <span class="about-experience-click about-click" onClick={experiencePage}>Programmer</span> at PPA Innovation. I decise to get a job as Programmer but I didn't graduate as Computer Science, Information Technology or Software Engineer. At first It's hard for me to get a job as Programmer I had many interview but can't pass the process. That time I got a job as Programmer at PPA Innovation. Because I passed to make winform in C# proramming.My main role is about create software as customer requirement for supporting main product. The main product is software in window applicaton. I had learned a lot about programming, database and website also.</p>
                        </div>
                    </article>
                    <article class="about-article-right">
                        <div>
                            <h3>Get back and get Master Degree</h3>
                            <p>&emsp;&emsp;I was back to Delta Electronic Thailand as <span class="about-experience-click about-click" onClick={experiencePage}>Production Technology Engineer</span> for 3+ years. I use programming skill and electronic for this position. In my programming skil I used for create window application and web site for supporting department. As a project FA Autogen, Normally my department has to check and analyze product's failure by using Seriel Number of Product for searching in share drive folder one by one. Then I use window application for automatic search product's report instead of searching manually in one by one. This software helps my department and production for reducing loss time of process. I creted website for everyone can update report and track data of product about failure description. In this time I study <span class="about-education-click about-click" onClick={educationMaster}>Master Degree of Information Technology</span>. I started in June 2021 and graduated in June 2024.</p>
                        </div>
                        <div>
                            <img src="work-case-svgrepo-com.svg"/>
                            <img src="university-svgrepo-com.svg"/>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
export default About;