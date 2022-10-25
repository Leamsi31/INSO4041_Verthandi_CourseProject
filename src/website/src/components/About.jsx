import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Verthandi</h2>
                    <p>The Verthandi Development Team is a group of undergraduate student from the Department Computer Science and Engineering 
                        working on software solutions for problems at the University of Puerto Rico, Mayagüez. Currently, Verthandi is working
                        under the advisement of Dr. Marko Schutz-Schmuck and Alexander Rivera in the development of a Recommendation System for
                        Extraccuricular Activities.                            
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Project Description</span>
                <h2 className="colorlib-heading">Recommendation System for Extracurricular Activities at UPRM</h2>
                <p>
                    Higher-education centers such as Colleges and Universities foster academic and professional growth in an environment where a 
                    dedicated curriculum provides generalized preparation for a focus area. A student's professional growth goes beyond the 
                    classroom, therefore student organizations, special projects or volunteer opportunities develop soft and hard skills necessary 
                    to be an effective and outstanding professional. Consequently, understanding that an educational institutions main objective 
                    is to give students a general idea of any given career, provides insight into the importance of extracurricular activities. 
                    The University of Puerto Rico, Mayagüez (UPRM) has a reputation that exceeds expectations due to a high-achieving student body 
                    that acquires awards and recognition all over the world because of its tenacity and brilliance in any field. However, UPRM 
                    students do not engage in extracurricular activities that best align with their career interests due to a lack of knowledge or 
                    engagement within the campus. This causes a disconnect between actual work done in the field and the classroom as both environments 
                    have distinct ways to provide education and limit a student's potential until their junior or senior year. Hence, ignorance becomes
                    a restricting factor for professional development among students especially in acquiring reliable and accessible sources of 
                    information about extracurricular activities on campus.      
                </p>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Access to information </h3>
                    <p>
                        Accesibility is essential for student engagement on campus. Data collection would acquire information about activities
                        on campus.
                    </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>One platform, many activities</h3>
                    <p>
                        Development of a website application that contains all of extracurricular activities at UPRM that being student organizations,
                        special projects, volunteer work, and more.
                    </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Tailored reccomendations</h3>
                    <p>
                        A Tag-Rate based recommender system would be implemented to provide students extracurriculars that align best with their major 
                        and career interests.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}