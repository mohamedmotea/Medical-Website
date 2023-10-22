import React, { useEffect } from "react";
import "./Contact.css";
import Bannar from "./../Bannar/Bannar";
import phoneImg from '../../Assets/tel.png'
import emailImg from '../../Assets/email.png'
import locationImg from '../../Assets/location.png'
import ContactInfo from './ContactInfo';
import { Helmet } from 'react-helmet-async';

export default function Contact() {

  useEffect(()=>{
    window.scrollTo({
      top:0
    })
    },[])
  return (
    <>
         <Helmet>
        <title>Contact</title>
      </Helmet>
      <section id="contact">
        <Bannar title="Contact Us" />
        <form>
          <div className="row justify-content-between">
            <div className="col-md-6">
              <input
                className="form-control py-3 my-3"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                className="form-control py-3 my-3"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                className="form-control py-3 my-3"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Numbers"
              />
              <select className="form-control py-2 my-3" role="button">
                <option value="selecty department">Selecty Department</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </select>

              <textarea
                className="form-control"
                name="comment"
                id="comment"
                placeholder="Type Message"
              ></textarea>
              <button className="btn my-3 w-100" type="submit">
                Submit
              </button>
            </div>

            <div className="col-md-5">
              <div className="form-box p-5 rounded">
                <div className="overlay rounded"></div>
                <h4 className="w-75 h3">Contact Us For Any Informations</h4>

                <ul className="mt-4">
                  <li className="fw-bold fs-5">
                    <i class="fa-regular fa-map me-2"></i> Location
                  </li>
                  <hr className="w-50 my-2" />
                  <li className="fs-sm w-75">
                    {" "}
                    2005 Stokes Isle Apt. 896, Venaville 10010, USA
                  </li>

                  <li className="fw-bold fs-5 mt-4">
                    <i class="fa-solid fa-id-card me-2" /> Email & Phone
                  </li>
                  <hr className="w-50 my-2" />
                  <li className="fs-sm w-50">
                    {" "}
                    <a href="#" className="text-light d-block my-1">
                      info@yourdomain.com
                    </a>
                    <span>(+68) 120034509</span>
                  </li>

                  <li className="fw-bold fs-5 mt-4">
                    <i class="fa-solid fa-earth-americas me-2"></i>Follow Us
                  </li>
                  <hr className="w-50 my-2" />
                  <ul className="links d-flex gap-2">
                    <li>
                      <i class="fa-brands fa-square-x-twitter p-2 rounded"></i>
                    </li>

                    <li>
                      <i class="fa-brands fa-linkedin p-2 rounded"></i>
                    </li>

                    <li>
                      <i class="fa-brands fa-instagram p-2 rounded"></i>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </form>

        <div className="row my-5 g-5">
    <ContactInfo title='Contact Number' img={`${phoneImg}`} imgTitle='Phone Pic' para1='+001 123 456 790' para2='+002 3424 44 00'/>
    <ContactInfo title='Email Address' img={`${emailImg}`} imgTitle='Email Pic' para1='info@yourdomain.com' para2='example@support.com'/>

    <ContactInfo title='Address' img={`${locationImg}`} imgTitle='Location Pic' para1='2005 Stokes Isle Apt. 896, Venaville' para2='10010, USA'/>

    </div>
      </section>
    </>
  );
}
