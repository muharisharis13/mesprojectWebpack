import { useForm, useWatch } from "react-hook-form"

const ContactLanding = ({
  data
}) => {
  const { register, control } = useForm({
    defaultValues: {
      name: "",
      emailUser: "",
      subject: "",
      message: ""
    }
  })
  const emailUser = useWatch({ name: "emailUser", control })
  const subject = useWatch({ name: "subject", control })
  const message = useWatch({ name: "message", control })

  return (
    <section id="contact" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>
            Hubungi kami melalui form kontak berikut maka tim kami akan segera membalas pertanyaan-pertanyaan kamu.
          </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Jalan Halat Gang Umar No. 36,Medan, Sumatera Utara, Indonesia</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">{data?.phone_number}</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@example.com">{data?.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
          width="100%"
          height="380"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div> */}

      <div className="container">
        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <form action={`mailto:${data?.email}`} className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  {...register("name")}
                />
                <div className="validation"></div>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                  {...register("emailUser")}
                />
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
                {...register("subject")}
              />
              <div className="validation"></div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
                {...register("message")}
              ></textarea>
              <div className="validation"></div>
            </div>
            <div className="text-center">
              <button type="submit" onClick={() => window.location = `mailto:${data?.email}?subject=${subject}&body=${message}&from=${emailUser}`}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactLanding;
