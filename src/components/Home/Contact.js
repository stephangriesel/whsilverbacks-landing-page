import React from "react"
import Title from "../Globals/Title"
import Footer from "../Globals/Footer"

export default function Contact() {
  return (
    <section className="contact py-3 fade-in">
      <Title title="Contact Us" />
      <div className="row pb-5 pt-5">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/f/xknkjdon" method="POST">
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                name="tel"
                id="tel"
                placeholder="Your Telephone Number"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="3"
                placeholder="Tell us more.."
              />
            </div>
            <button
              type="submit"
              className="btn btn-pink btn-block text-capitalize mt-5"
            >
              Talk to us
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  )
}
