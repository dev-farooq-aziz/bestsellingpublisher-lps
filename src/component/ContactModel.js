"use client"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Facebook from 'media/images/icons/facebook.svg'
import Instagram from 'media/images/icons/instagram.svg'
import XIcon from 'media/images/icons/x-icon.svg'

const Bloginner = () => {
  // ===============
  const [ip, setIP] = useState('');
  const [score, setScore] = useState('Submit Form');
  const [pagenewurl, setPagenewurl] = useState('');
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const getIPData = async () => {
      try {
        const res = await Axios.get('https://ipwho.is/');
        setIP(res.data);
      } catch (error) {
        console.error('Error fetching IP data:', error);
      }
    };
    getIPData();
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    setPagenewurl(currentUrl);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentdate = new Date().toLocaleString();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comment: e.target.comments.value,
      pageUrl: pagenewurl,
      "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    };

    const JSONdata = JSON.stringify(data);

    setScore('Sending Data');
    console.log(JSONdata);

    try {
      const res = await fetch('api/email/route', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSONdata
      });

      if (res.status === 200) {
        console.log('Response Successed', res);
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }

    const headersList = {
      'Accept': '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Authorization': 'Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer',
      'Content-Type': 'application/json'
    };

    const bodyContent = JSON.stringify({
      "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
      Brand: 'BEST SELLING PUBLISHER',
      Page: currentRoute,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    });

    try {
      await fetch('https://sheetdb.io/api/v1/1ownp6p7a9xpi', {
        method: 'POST',
        body: bodyContent,
        headers: headersList
      });
    } catch (error) {
      console.error('Error sending to SheetDB:', error);
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: e.target.email.value
        },
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: e.target.name.value
        },
        {
          objectTypeId: '0-1',
          name: 'phone',
          value: e.target.phone.value
        },
        {
          objectTypeId: '0-1',
          name: 'message',
          value: e.target.comments.value
        }
      ],
      context: {
        ipAddress: ip.IPv4,
        pageUri: pagenewurl,
        pageName: pagenewurl
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to allow Example Company to store and process my personal data.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: 'I agree to receive marketing communications from Example Company.'
            }
          ]
        }
      }
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6', requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error('Error submitting to HubSpot:', error);
    }

    router.push('/ThankYou');
  };

  return (
    <>
      <section className="w-full py-10 font-secondary bg-cover bg-no-repeat bg-center">
        <div className="text-center mb-20 justify-center">
          <h6 className="text-[30px] font-primary text-[#40BEE2] xs:text-base font-semibold">Connect with us</h6>
          <h2 className="text-[40px] font-primary font-semibold leading-10 mt-2 mb-2 xs:text-[30px]">
            We Would Love to Serve You
          </h2>
          <p className="w-[60%] mx-auto md:w-[90%] sm:w-[100%] xs:w-[100%] px-5">
            Our team of professionals is at your service round the clock. We love making things happen for our customers, and we would love to be your partner in making you a successful author. Fill in the details, and let our representatives contact you.
          </p>
        </div>
        <div className="container relative max-w-6xl md:max-w-2xl py-10 px-10 border bg-white rounded-xl shadow-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:px-5 sm:space-y-0 sm:space-x-1">
          <form
            className="col-span-10 md:col-span-1 pr-36 md:pr-0 md:justify-center xs:pr-0 sm:pr-0 xs:align-center"
            onSubmit={handleSubmit}
            method="Post"
          >
            <div className="pr-16 md:pr-0 md:px-0 md:mb-16 xs:pr-0 sm:pr-0">
              <div className="grid grid-cols-2 gap-3 xs:flex-col md:grid md:grid-cols-2 mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="tel" minLength="10" maxLength="13" pattern="[0-9]*"
                  id="phone"
                  name="phone"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2"
                  placeholder="Phone"

                />
              </div>
              <div className="w-full mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-3 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2 w-full"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="w-full mb-3">
                <textarea
                  type="textarea"
                  id="message"
                  name="comments"
                  className="p-3 h-36 bg-[#ededed] text-[#989898] border-b-2 border-[#fff] pb-2 w-full"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="basis-[30%] mb-4 flex items-center space-x-2 justify-center">
                <button
                  type="submit"
                  className="w-full bg-[black] text-[#00c0e4] font-semibold px-10 py-2 hover:bg-[#00c0e4] hover:text-[#1d1d1f]"
                >
                  {score}
                </button>
              </div>
            </div>
          </form>
          <div className="absolute right-[-70px] top-9 md:px-0 md:relative md:right-0 md:top-0 sm:relative sm:-right-2 sm:top-0 xs:relative xs:right-0 xs:top-0">
            <div className="bg-[#00C0E4] px-8 py-14 sm:px-5 sm:py-8 rounded-[30px] shadow-xl space-y-2">
              <h4 className="font-bold font-primary text-white text-3xl mb-4">
                Contact details
              </h4>
              <ul className="text-sm text-white">
                <li className="mb-4 border-b-2 flex items-center gap-x-1 border-[#f9f9f9]">
                  <FontAwesomeIcon icon={faEnvelope} width={30} height={30} className="px-2" /> <span className="block">
                    <a href="mailto:info@xyz.com">info@xyz.com</a>
                  </span>
                </li>
                <li className="mb-4 border-b-2 flex items-center gap-x-1 border-[#ffffff]">
                  <FontAwesomeIcon icon={faPhone} width={30} height={30} className="px-2" />
                  <span className="block"><a href="tel:0123456789">(012) 345-6789</a></span>
                </li>
              </ul>
              <h3 className=" text-[20px] font-bold mt-3 text-white">Follow Us:</h3>
              <div className="flex space-x-2 basis-8/12 items-center text-[12px] xs:text-center xs:mx-auto">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={Facebook} alt="Icons" width={25} height={25} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={XIcon} alt="Icons" width={25} height={25} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={Instagram} alt="Icons" width={25} height={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bloginner;
