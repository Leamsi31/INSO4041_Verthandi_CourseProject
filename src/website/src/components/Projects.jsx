import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">What have I done?</span>
								<h2 className="colorlib-heading animate-box">Me doing cool stuff!</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chemistry research</a></h3>
											<span>Adding nanoparticles to lettuce seedlings inside petri dishes</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 3</a></span>
												<span><a href="#"><i className="icon-heart" /> 20</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Presenting at a conference</a></h3>
											<span>I presented my work as a PR-LSAMP fellow at the 29th PRISM/54th JTM virtually.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 1,000</a></span>
												<span><a href="#"><i className="icon-heart" /> 27</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Certificate of Participation</a></h3>
											<span>Certificate of participation for the 29th Puerto Rico Interdisciplinary Scientific Meeting and 54th Junior Technical Meeting.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 1</a></span>
												<span><a href="#"><i className="icon-heart" /> 1</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Honor Roll Certificate</a></h3>
											<span>Certificate for being part of the College of Engineering Honor Roll in my freshman year. (2019-2020)</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">SHPE Case Challenge</a></h3>
											<span>As part of the FellowSHPE program, my team and I coordinated an event called the SHPE Case Challenge for university students solve real-world business problems.
												Southern Company was our invited guest for this activity.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 37</a></span>
												<span><a href="#"><i className="icon-heart" /> 22</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Presented my first in-person poster</a></h3>
											<span>Presented my work in-person at the College of Engineering at the University of Iowa.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 153</a></span>
												<span><a href="#"><i className="icon-heart" /> 48</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}