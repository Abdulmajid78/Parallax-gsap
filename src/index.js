import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        {/* https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/1.jpg */}
        <div id="luxy" className="wrapp">

            {/* div .header */}
            <header className="header">
                <h1 className="title" data-splitting><span className="title_paralax">Parallax effect</span><span
                    className="stroke">on
					gsap</span></h1>
                <div className="header__img">
                    <img src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/1.jpg" alt="1"/>
                </div>
                <div className="header__marq">
                    <div className="header__marq-wrapp">
					<span className="header__marq-txt">discuss your ideas
						<span className="header__marq-star">
							<img
                                src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/star.svg"
                                alt=""/>
						</span>
					</span>
                        <span className="header__marq-txt">discuss your ideas
						<span className="header__marq-star">
							<img
                                src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/star.svg"
                                alt=""/>
						</span>
					</span>
                        <span className="header__marq-txt">discuss your ideas
						<span className="header__marq-star">
							<img
                                src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/star.svg"
                                alt=""/>
						</span>
					</span>
                        <span className="header__marq-txt">discuss your ideas
						<span className="header__marq-star">
							<img
                                src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/star.svg"
                                alt=""/>
						</span>
					</span>
                    </div>
                </div>
            </header>

            <main className="main">

                {/*<!-- div .about -->*/}
                <section className="about">
                    <div className="about__wrapp">
                        <div className="about__img">
                            <img src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/2.jpg"
                                 alt="2"/>
                        </div>
                        <div className="about__txt">
                            <h2 className="section-title">abo<span className="stroke">ut</span>
                                <span className="section-title__square"></span>
                            </h2>
                            <p className="about__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse
                                aspernatur fugit debitis quisquam. Quia exercitationem ipsum voluptas voluptatum hic
                                enim quo provident culpa possimus cupiditate! Dolorum quae doloremque cum rerum ipsam
                                inventore beatae, at odit, velit, aspernatur minima! Corporis.</p>
                        </div>
                    </div>
                </section>

                {/* <!-- div .benefits --> */}

                <section className="benefits">
                    <div className="content">
                        <h2 className="section-title">benef<span className="stroke">its</span>
                            <span className="section-title__square"></span>
                        </h2>

                        <ul className="benefits__list">
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-200">/01</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-150">/02</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-150">/03</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-150">/04</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-110">/05</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                            <li className="benefits__item">
                                <span className="benefits__num" data-speed="-200">/06</span>
                                <p className="benefits__p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Omnis,
                                    quas.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/*<!-- div .work --> */}
                <section className="work">
                    <div className="content">
                        <h2 className="section-title">portfo<span className="stroke">lio</span>
                            <span className="section-title__square"></span>
                        </h2>
                    </div>

                    <div className="work__wrapp">
                        <div className="work__item" data-speed="-300">
                            <span className="work__item-num" data-speed="-1000">/001</span>
                            <div className="work__item-img">
                                <img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/3.jpg"
                                    alt="3"/>
                            </div>
                        </div>
                        <div className="work__item" data-speed="-600">
                            <span className="work__item-num" data-speed="-500">/002</span>
                            <div className="work__item-img">
                                <img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/4.jpg"
                                    alt="4"/>
                            </div>
                        </div>
                        <div className="work__item" data-speed="-700">
                            <span className="work__item-num" data-speed="-700">/003</span>
                            <div className="work__item-img">
                                <img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/5.jpg"
                                    alt="5"/>
                            </div>
                        </div>
                        <div className="work__item" data-speed="-400">
                            <span className="work__item-num" data-speed="-200">/004</span>
                            <div className="work__item-img">
                                <img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/6.jpg"
                                    alt="6"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<!-- div .serv -->*/}
                <section className="serv">
                    <div className="content">
                        <h2 className="section-title">servic<span className="stroke">es</span>
                            <span className="section-title__square"></span>
                        </h2>

                        <div className="serv__list">
                            <div className="serv__item">
							<span className="serv__item-arrow" data-speed="500">
								<img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/arrow.svg"
                                    alt=""/>
							</span>
                                <div className="serv__item-txt">
                                    <span className="serv__item-text">/Graphic Design</span>
                                </div>
                            </div>
                            <div className="serv__item">
							<span className="serv__item-arrow" data-speed="400">
								<img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/arrow.svg"
                                    alt=""/>
							</span>
                                <div className="serv__item-txt">
                                    <span className="serv__item-text">/UX/UI Design</span>
                                </div>
                            </div>
                            <div className="serv__item">
							<span className="serv__item-arrow" data-speed="800">
								<img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/arrow.svg"
                                    alt=""/>
							</span>
                                <div className="serv__item-txt">
                                    <span className="serv__item-text">/Web Design</span>
                                </div>
                            </div>
                            <div className="serv__item">
							<span className="serv__item-arrow" data-speed="600">
								<img
                                    src="https://dmitrinaumov.github.io/Paralax-effect-with-gsap-scrolltrigger/img/arrow.svg"
                                    alt=""/>
							</span>
                                <div className="serv__item-txt">
                                    <span className="serv__item-text">/Brend Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/*<!-- div .footer -->*/}
            <footer className="footer">
                <div className="footer__div">
                    <span data-speed="-300">a</span>
                    <span data-speed="100">p</span>
                    <span data-speed="300">p</span>
                    <span data-speed="-300">r</span>
                    <span data-speed="350">o</span>
                    <span data-speed="200">v</span>
                    <span data-speed="-310">e</span>
                    <span data-speed="200">c</span>
                    <span data-speed="-340">o</span>
                    <span data-speed="-100">d</span>
                    <span data-speed="300">e</span>
                </div>
            </footer>
        </div>
        {/*    <!-- /div .wrapp END -->*/}

    </>
);

