import React from 'react';
import featuredService from '../../../images/featuredService.jpg'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 mt-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid w-75" src={featuredService} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Repair Once, Enjoy Lifetime</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button style={{ backgroundImage: 'linear-gradient(45deg, cyan, blue)', height: '50px', width: '150px' }} >Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;