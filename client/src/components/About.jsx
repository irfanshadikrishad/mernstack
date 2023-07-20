export default function About() {
    return (
        <div className="container">
            <form className="about">
                <div className="about__header">
                    <img draggable="false" className="about__img" src="/favicon.png" alt="" />
                    <h1 className="about__name">zeitu</h1>
                    <h4 className="about__tag">MERN Stack Developer</h4></div>
                <div className="about__details">
                    <p>Details:</p>
                    <div className="about__table">
                        <span className="about__hl">ID:</span >
                        <p>2210012101087</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Name:</span >
                        <p>zeitu</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Email:</span >
                        <p>irfanshadikrishad@gmail.com</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Phone:</span >
                        <p>01767342505</p>
                    </div>
                    <div className="about__table">
                        <span className="about__hl">Occupasion:</span >
                        <p>MERN Stack Developer</p>
                    </div>
                </div>
                <button type="submit">Edit Profile</button>
            </form>
        </div>
    )
}