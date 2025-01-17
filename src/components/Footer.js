import React from 'react';

const Footer = () => {
    const data = {
        title: "Sample Event",
        start: "10:00 AM",
        finish: "12:00 PM",
        date: "2024-01-01",
        location: "King's College London",
        bring: "Laptop",
        description: "This is a sample event description.",
        author: "John Doe",
        url: "https://example.com",
        company: "Example Company",
        deadline: "2024-01-15"
    };

    return (
        <div className="slides-generic_light" style={{ backgroundColor: 'white' }}>
            <div className="content-generic">
                <br /><br />
                <a style={{ textDecoration: 'none' }} href="events.html">
                    <h2><b>Upcoming Events</b></h2>
                </a>
                <br />
                <button className='accordion'>
                    <a style={{ textDecoration: 'none' }} href="#">
                        <h2><b>{data.title}</b></h2>
                    </a>
                    <p><b>Time:</b> {data.start} - {data.finish} <b>Date:</b> {data.date} <b>Location:</b> {data.location} <b>Bring:</b> {data.bring}</p>
                </button>
                <div className='panel'>
                    <br />
                    <p>{data.description}</p>
                    <br />
                    <img src='./uploads2/image.png' height='500' className='center' alt="Event" />
                    <br /><br />
                </div>
                <br /><br />
                <hr />
                <br /><br />
                <h2>Latest Blog Posts</h2>
                <br />
                <button className='accordion'>
                    <h2>{data.title}</h2>
                    <h3>{data.author}</h3>
                    <p>{data.date}</p>
                </button>
                <div className='panel'>
                    <br /><br />
                    <img src='./uploads/image.png' height='500' className='center' alt="Blog Post" />
                    <br />
                    <p> Liked by: </p>
                    <form method='post'>
                        <input type='submit' name='like' value='Like' />
                        <input type='hidden' name='blogID' value='' />
                    </form>
                    <br />
                </div>
                <br /><br />
                <hr />
                <br /><br />
                <h2>Latest Opportunities</h2>
                <button className='accordion'>
                    <a href={data.url} target='_blank' rel='noopener noreferrer'><h2>{data.title}</h2></a>
                    <h3>{data.company}</h3>
                    <p>{data.deadline}</p>
                </button>
                <div className='panel'>
                    <br />
                    <p>{data.description}</p>
                    <br /><br />
                </div>
                <br />
                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div className="elfsight-app-f52b8e0d-ff03-4e38-9fdb-76339095b022"></div>
                <br />
                <hr /><br /><br />
                <h4><a style={{ float: 'right' }} href="login.html">Login</a></h4>
                <h4><a href="mailto:contact@kcltech.co.uk" target="_blank" rel='noopener noreferrer'>contact@kcltech.co.uk</a> | <a href="about.html">About us</a></h4>
                <br /><br /><br /><br />
                <div className="footer">
                    <marquee><p-footer><b>©2024 KCL Tech</b> - King's College London's Technology Society</p-footer></marquee>
                </div>
                <script type="text/javascript" src="js.js"></script>
            </div>
        </div>
    );
};

export default Footer;
