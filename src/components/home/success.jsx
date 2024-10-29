import React from 'react'

export default function success() {
  return (
    <div>
        <div class="success-container">
        <header class="header">
            <p>SUCCESS STORIES</p>
            <h1>Unveiling Our Digital Triumphs</h1>
        </header>

        <div class="success-stories">
            {/* <!-- First Success Story --> */}
            <div class="story-card">
                <div class="screenshot-01">
                    <img src="../img/image1.png" alt="Data Analytics Dashboard"/>
                </div>
                <div class="story-content">
                    <p class="company-name">GLOBAL VENTURES INC.</p>
                    <h1 class="story-title">Data-Driven <br/>Dominance</h1>
                    <p class="story-description">See the power of data in action as we break down how analytics-driven decisions led to a surge in campaign effectiveness.</p>
                    <div class="metrics">
                        <div class="metric">
                            <span><i class="fa-regular fa-circle-check"></i> 900% Increase in ROI</span>
                        </div>
                        <div class="metric">
                            <span><i class="fa-regular fa-circle-check"></i> 40% decrease in CAC</span>
                        </div>
                    </div>
                    <a href="#" class="cta-button">Read full case study →</a>
                </div>
            </div>

            {/* <!-- Second Success Story --> */}
            <div class="story-card">
                <div class="screenshot-02">
                    <img src="../img/image2.png" alt="SEO Dashboard"/>
                </div>
                <div class="story-content">
                    <p class="company-name">TECH INNOVATE CO.</p>
                    <h2 class="story-title">SEO Success <br/>Blueprint</h2>
                    <p class="story-description">Witness the impact of our SEO strategies as we unveil the rise in organic traffic and search engine rankings for our clients.</p>
                    <div class="metrics">
                        <div class="metric">
                            <span><i class="fa-regular fa-circle-check"></i> 260% Increase in ROI</span>
                        </div>
                        <div class="metric">
                            <span><i class="fa-regular fa-circle-check"></i> 90% Increase in ROAS</span>
                        </div>
                    </div>
                    <a href="#" class="cta-button">Read full case study →</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
