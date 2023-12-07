import { useState } from "react";
import './form.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const formSuccess = () => toast.success('Form data is Submitted');
  // const extractError = () => toast.warning('Please upload a image');

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [image1, setImage1] = useState("");
  const [chanimg1, setChanimg1] = useState("");
  const [aadharNumber, setaadharNumber] = useState("");
  const [image2, setImage2] = useState("");
  const [chanimg2, setChanimg2] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [image11, setImage11] = useState("");
  const [urn, setUrn] = useState("");

  const [selectedOption, setSelectedOption] = useState("fresher");
  const [showInputs, setShowInputs] = useState(false);


  const handleAadharImageChange = (e) => {
    const aadharimg = e.target.files[0];
    setImage1(e.target.files[0])
    if (aadharimg) {
      setChanimg1(URL.createObjectURL(aadharimg));
    }
  }

  const handlePanImageChange = (e) => {
    const panimg = e.target.files[0];
    setImage2(e.target.files[0])
    if (panimg) {
      setChanimg2(URL.createObjectURL(panimg));
    }
  }


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setShowInputs(e.target.value === "experience");
  };

  const [fileInputs, setFileInputs] = useState([]);
  const handleAddInput = () => {

    setFileInputs([...fileInputs, null]);
  };
  const handleFileChange = (index, file) => {
    const updatedFileInputs = [...fileInputs];
    updatedFileInputs[index] = file;
    setFileInputs(updatedFileInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("fname", fname);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    formdata.append("aadharNumber", aadharNumber);
    formdata.append("panNumber", panNumber);
    formdata.append("image1", image1);
    formdata.append("image2", image2);
    formdata.append("image3", image3);
    formdata.append("image4", image4);
    formdata.append("image5", image5);
    formdata.append("image6", image6);
    formdata.append("image7", image7);
    formdata.append("image8", image8);
    formdata.append("image9", image9);
    formdata.append("image10", image10);
    formdata.append("image11", image11);
    formdata.append("urn", urn);

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://localhost:8000/api/v1/data",
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: bodyContent,
    }
    try {
      console.log(reqOptions.data);
      const res = await axios(reqOptions);
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  const aadharExtract = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("image1", image1);

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://localhost:8000/api/v1/extractAadhar",
      method: "POST",
      data: bodyContent,
    }
    try {
      let response = await axios.request(reqOptions);
      console.log(response.data);
      if (response.data) {
        setaadharNumber(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const panExtract = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("image2", image2);

    let bodyContent = formdata;

    let reqOptions = {
      url: "http://localhost:8000/api/v1/extractPan",
      method: "POST",
      data: bodyContent,
    }
    try {
      let response = await axios.request(reqOptions);
      console.log(response.data);
      if (response.data) {
        setpanNumber(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ToastContainer />
      <header>
        {/* Navbar  */}
        <nav className="navbar navbar-expand-lg ">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid justify-content-center px-5">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand me-2" href="#!">
              <img src="images/a1-logo.webp" height="100" width="100" alt="MDB Logo" loading="lazy"
                style={{ marginTop: "-1px" }} />
            </a>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      <section className="text-center banner-section py-5">
        <div className="container">
          {/* <h1>Dropbox File Uploader</h1> */}
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <form method="POST" id="contactForm" className="needs-validation" noValidate encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="row mb-0 mb-lg-5 mb-md-5">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-outline mb-4 mb-lg-0">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input type="text" id="name" name="name" className="form-control" onChange={e => setFname(e.target.value)} placeholder="First Name" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-outline mb-4 mb-lg-0">
                  {/* <label htmlFor="name">Name:</label> */}
                  <input type="text" id="name" name="name" className="form-control" onChange={e => setLname(e.target.value)} placeholder="Last Name" required />
                </div>
              </div>
            </div>
            <div className="row mb-0 mb-lg-5 mb-md-5">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-outline mb-4 mb-lg-0">
                  {/* <label htmlFor="mobile">Mobile:</label> */}
                  <input type="number" id="mobile" name="mobile" className="form-control" onChange={e => setMobile(e.target.value)} placeholder="Phone Number" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-outline mb-4 mb-lg-0">
                  {/* <label htmlFor="email">Email:</label> */}
                  <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" required />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!-- Aadhar Image --> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="image1">Aadhar Card</label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="inputGroupFileAadhar">UPLOAD FILE</label>
                    <input type="file" id="image1" className="form-control" name="image1" accept="image/*" onChange={handleAadharImageChange} required />
                    <button className="btn cus-btn" onClick={aadharExtract} >Extract</button>
                  </div>
                </div>
                {chanimg1 && (
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* Display the uploaded image */}
                    <div className="mb-4">
                      <img src={chanimg1} alt="Uploaded Aadhar Card" style={{ maxWidth: '100%' }} />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!-- Aadhar Number --> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="aadharNumber">Aadhar Number</label>
                  <input type="text" id="aadharNumber" name="aadharNumber" value={aadharNumber} onChange={e => setaadharNumber(e.target.value)} className="form-control" placeholder="Aadhar Number" />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!-- PAN Image --> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="image2">PAN Card</label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="inputGroupFileAadhar">UPLOAD FILE</label>
                    <input type="file" id="image2" name="image2" accept="image/*" onChange={handlePanImageChange} className="form-control" required />
                    <button className="btn cus-btn" onClick={panExtract} >Extract</button>
                  </div>
                </div>
                {chanimg2 && (
                  <div className="col-lg-6 col-md-6 col-12">
                    {/* Display the uploaded image */}
                    <div className="mb-4">
                      <img src={chanimg2} alt="Uploaded Pan Card" style={{ maxWidth: '100%' }} />
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!-- Pan --> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="panNumber">PAN</label>
                  <input type="text" id="panNumber" name="panNumber" value={panNumber} onChange={e => setpanNumber(e.target.value)} className="form-control" placeholder="PAN Number" />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!--Cancel Check--> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="image3">Cancel Check</label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="inputGroupFileVoter">UPLOAD FILE</label>
                    <input type="file" id="image3" name="image3" className="form-control" accept="image/*" onChange={e => setImage3(e.target.files[0])} required />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                {/* <!--Passport Size Photo--> */}
                <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <label className="form-label" htmlFor="image4">Latest Passport Size Photo</label>
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor="inputGroupFileAge">UPLOAD FILE</label>
                    <input type="file" id="image4" name="image4" className="form-control" accept="image/*" onChange={e => setImage4(e.target.files[0])} required />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-4">
              <h4 className="section-title">Academic & Professional Certificates</h4>
            </div>

            {/* <!--Upload 10th Certificate--> */}
            <div className="form-outline mb-4 mb-md-5 mb-lg-5">
              <label className="form-label" htmlFor="image5">Certificate of 10th Class</label>
              <div className="input-group custom-file-button">
                <label className="input-group-text" htmlFor="inputGroupFile10th">UPLOAD FILE</label>
                <input type="file" id="image5" name="image5" className="form-control" accept="image/*" onChange={e => setImage5(e.target.files[0])} required />
              </div>
            </div>
            {/* <!--Upload 12th Certificate--> */}
            <div className="form-outline mb-4 mb-md-5 mb-lg-5">
              <label className="form-label" htmlFor="image6">Certificate of 12th Class</label>
              <div className="input-group custom-file-button">
                <label className="input-group-text" htmlFor="inputGroupFile10th">UPLOAD FILE</label>
                <input type="file" id="image6" name="image6" className="form-control" accept="image/*" onChange={e => setImage6(e.target.files[0])} required />
              </div>
            </div>
            {/* <!--Upload Graduation Certificate--> */}
            <div className="form-outline mb-4 mb-md-5 mb-lg-5">
              <label className="form-label" htmlFor="image7">Graduation Certificate</label>
              <div className="input-group custom-file-button">
                <label className="input-group-text" htmlFor="inputGroupFile10th">UPLOAD FILE</label>
                <input type="file" id="image7" name="image7" className="form-control" accept="image/*" onChange={e => setImage7(e.target.files[0])} required />
              </div>
            </div>
            <div>
              <h5>Add Another Certificate</h5>
              {fileInputs.map((file, index) => (
                <div key={index} className="form-outline mb-4 mb-md-5 mb-lg-5">
                  <div className="input-group custom-file-button">
                    <label className="input-group-text" htmlFor={`inputGroupFile${index}`}>
                      UPLOAD FILE
                    </label>
                    <input
                      type="file"
                      id={`inputGroupFile${index}`}
                      name={`image${index}`}
                      className="form-control"
                      accept="image/*"
                      onChange={(e) => handleFileChange(index, e.target.files[0])}
                      required
                    />
                  </div>
                </div>
              ))}
              <button type="button" className="btn btn-primary" onClick={handleAddInput}>
                Add Input
              </button>
            </div>
            <hr />
            <div className="py-4">
              <h4 className="section-title">Fresher / Experience</h4>
            </div>
            <div className="form-outline mb-4 mb-md-5 mb-lg-5 radio-div">
              <div className="radio-container">
                <input type="radio" id="fresher" name="fresher" value="fresher"
                  checked={selectedOption === "fresher"}
                  onChange={handleOptionChange} />
                <label htmlFor="fresher">Fresher</label>
              </div>

              <div className="radio-container">
                <input type="radio" id="experience" name="experience" value="experience"
                  checked={selectedOption === "experience"}
                  onChange={handleOptionChange} />
                <label htmlFor="experience">Experience</label>
              </div>

              {showInputs && (
                <div>
                  {/* <!--Previous Employment Certificates--> */}
                  <div className="form-outline pt-5 mb-4 mb-md-5 mb-lg-5">
                    <label className="form-label" htmlFor="image8">Previous Employment Certificate (Appointment Letter)</label>
                    <div className="input-group custom-file-button">
                      <label className="input-group-text" htmlFor="inputGroupFilePrevEmp">UPLOAD FILE</label>
                      <input type="file" id="image8" name="image8" className="form-control" accept="image/*" onChange={e => setImage8(e.target.files[0])} />
                    </div>
                  </div>

                  {/* <Lastdrawn Salary Certificates */}
                  <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                    <label className="form-label" htmlFor="image9">Last Drawn Payslip</label>
                    <div className="input-group custom-file-button">
                      <label className="input-group-text" htmlFor="inputGroupFilePrevEmp">UPLOAD FILE</label>
                      <input type="file" id="image9" name="image9" className="form-control" accept="image/*" onChange={e => setImage9(e.target.files[0])} />
                    </div>
                  </div>

                  {/* <!--Form16--> */}
                  <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                    <label className="form-label" htmlFor="image10">Copy of Form-16</label>
                    <div className="input-group custom-file-button">
                      <label className="input-group-text" htmlFor="inputGroupFilePrevEmp">UPLOAD FILE</label>
                      <input type="file" id="image10" name="image10" className="form-control" accept="image/*" onChange={e => setImage10(e.target.files[0])} />
                    </div>
                  </div>

                  {/* <!--Release Letter--> */}
                  <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                    <label className="form-label" htmlFor="image11">Release Letter (Signed Experience Certificate)</label>
                    <div className="input-group custom-file-button">
                      <label className="input-group-text" htmlFor="inputGroupFilePrevEmp">UPLOAD FILE</label>
                      <input type="file" id="image11" name="image11" className="form-control" accept="image/*" onChange={e => setImage11(e.target.files[0])} />
                    </div>
                  </div>

                  <div className="form-outline mb-4 mb-md-5 mb-lg-5">
                    {/* <label htmlFor="urn">UAN number:</label> */}
                    <input type="tel" id="urn" name="urn" onChange={e => setUrn(e.target.value)} className="form-control" placeholder="UAN NUMBER" />
                  </div>
                </div>
              )}
            </div>
            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={formSuccess}>Submit</button>
          </form>
        </div>
      </section>
      <footer className="text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-5">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-md-0">


              <ul className="list-unstyled  menu-footer">
                <li>
                  <a href="#!" className="text-dark">Home</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Case Studies</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Process</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Partner With Us</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Join The Team</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact Us</a>
                </li>
              </ul>

              <div className="menu-footer-btm">
                <ul className="list-unstyled d-flex">
                  <li><span>GSTIN: 19AAKCA7063N1Z1</span></li>
                  <li><span>CIN: U72200WB2012PTC183279</span></li>
                </ul>
              </div>
            </div>


            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-4 col-md-6 col-12  mb-md-0 blog-div">
              <h5 className="mb-4">Blog Post</h5>

              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="#!" className="text-dark">8 Crucial Factors to Evaluate in a Creative Agency’s Process When Choosing
                    Your Partner</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Take the Leap, Scale Worryless: Embrace Flexibility with On-Demand Design
                    Services</a>
                </li>

              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-md-0">
              <a href="#!">
                <img src="images/a1ft-footer.png" alt="logo-footer" width="219.78" height="75.33" />
              </a>
              <div className="mt-4">
                <span className="copyright">© Copyright 2023</span>
              </div>

              <div className="policy-list mb-4 mt-3">
                <ul className="list-unstyled mb-0 d-flex ">
                  <li><a href="#!">Privacy Policy</a></li>
                  <li><a href="#!">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="social-icons mt-4">
                <ul className="list-unstyled mb-0 d-flex">
                  <li>
                    <a href="#!" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                      viewBox="0 0 26 26">
                      <path fill="white"
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                    </svg></a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                      viewBox="0 0 26 26">
                      <path fill="white"
                        d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428c-.048-1.066-.06-1.405-.06-4.122c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772a4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z" />
                    </svg></a>
                  </li>
                  <li>
                    <a href="#!" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                      viewBox="0 0 26 26">
                      <path fill="white" fillRule="evenodd"
                        d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
                        clipRule="evenodd" />
                    </svg></a>
                  </li>

                </ul>
              </div>

            </div>
            {/* <!--Grid column--> */}


          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}


      </footer>

    </div>
  );

}
export default Form;