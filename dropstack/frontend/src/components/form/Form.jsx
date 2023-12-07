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
              <img src="images/xyz.jpg" height="100" width="100" alt="MDB Logo" loading="lazy"
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
    </div>
  );

}
export default Form;
