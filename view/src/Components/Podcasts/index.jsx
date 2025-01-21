import React from 'react'
import '../Podcasts/podcast.css'

function Podcasts() {
    return (
        <>
            <h1 style={{ textAlign: 'center',margin:'40px' }}>Recent Podcasts</h1>
            <div className="podcast-container">
                <div className="podcard">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp" alt="" />
                    </div>
                    <div className="podmain">
                        <h2>
                            Episode 08: How To Create Web Page Using Bootstrap 4
                        </h2>
                        <span>
                            By Mike Smith / 16 September 2017 / 1:30:20
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet reprehenderit voluptates ut, nam similique quia fuga at! Voluptate quos aperiam voluptas necessitatibus autem laboriosam aliquam, animi hic atque officiis?</p>

                        <audio src="#" controls></audio>
                    </div>

                </div>
                <div className="podcard">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp" alt="" />
                    </div>
                    <div className="podmain">
                        <h2>
                            Episode 08: How To Create Web Page Using Bootstrap 4
                        </h2>
                        <span>
                            By Mike Smith / 16 September 2017 / 1:30:20
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet reprehenderit voluptates ut, nam similique quia fuga at! Voluptate quos aperiam voluptas necessitatibus autem laboriosam aliquam, animi hic atque officiis?</p>

                        <audio src="#" controls></audio>
                    </div>

                </div>
                <div className="podcard">
                    <div className="image">
                        <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp" alt="" />
                    </div>
                    <div className="podmain">
                        <h2>
                            Episode 08: How To Create Web Page Using Bootstrap 4
                        </h2>
                        <span>
                            By Mike Smith / 16 September 2017 / 1:30:20
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet reprehenderit voluptates ut, nam similique quia fuga at! Voluptate quos aperiam voluptas necessitatibus autem laboriosam aliquam, animi hic atque officiis?</p>

                        <audio src="#" controls></audio>
                    </div>

                </div>
                <div className="link">
                    <a >left</a>
                    <a >1</a>
                    <a >2</a>
                    <a >3</a>
                    <a >4</a>
                    <a >right</a>
                </div>
            </div>
        </>
    )
}

export default Podcasts