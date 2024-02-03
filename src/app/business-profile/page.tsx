// pages/login.js
"use client";
import { useState } from "react";
import {
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const BusinessProfile = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    // You can send data to the server or perform any required actions
    // For simplicity, let's navigate to a success page
    router.push("/success");
  };

  const progressPercentage = Math.floor((activeStep / steps.length) * 100);

  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-xl p-8 mt-4 bg-[#FAFAFA]">
        <div className="flex items-center justify-between mb-4">
          <Typography variant="h6">{`Progress: ${progressPercentage}%`}</Typography>
          <Typography variant="h6">Basic Details</Typography>
        </div>
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          className="w-full mb-4"
        />
        <div className="bg-[#FAFAFA]">
          {activeStep === steps.length ? (
            <div>
              <Typography>Thank you</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>
                {/* Render the form for the current step */}
                {activeStep === 0 && <Step1Form />}
                {activeStep === 1 && <Step2Form />}
                {activeStep === 2 && <Step3Form />}
                {activeStep === 3 && <Step4Form />}
                {activeStep === 4 && <Step5Form />}
              </div>
              <div className="flex justify-between mt-4">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const Step1Form = () => {
  // Implement your form logic for step 1
  return (
    <Typography>
      <div className="space-y-4">
        <div className="space-x-4">
          <TextField
            label="Name"
            variant="standard"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
          />
          <TextField
            label="DOB"
            variant="standard"
            name="dob"
            // value={formData.dob}
            // onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="standard"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
          />
        </div>
      </div>
    </Typography>
  );
};

const Step2Form = () => {
  // Implement your form logic for step 2
  return (
    <Typography>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Column */}
          <TextField
            label="Company Name"
            variant="standard"
            name="companyName"
            // value={formData.companyName}
            // onChange={handleChange}
          />
          <TextField
            label="Owner Name"
            variant="standard"
            name="ownerName"
            // value={formData.ownerName}
            // onChange={handleChange}
          />
          <TextField
            label="Turnover"
            variant="standard"
            name="turnover"
            // value={formData.turnover}
            // onChange={handleChange}
          />

          {/* 2nd Column */}
          <TextField
            label="Type of Business"
            variant="standard"
            name="businessType"
            // value={formData.businessType}
            // onChange={handleChange}
          />
          <div>
            <Typography>Company Address</Typography>
            <div className="flex flex-row w-full">
              <TextField
                label="Address"
                variant="standard"
                name="address"
                // value={formData.address}
                // onChange={handleChange}
              />
              <TextField
                label="City"
                variant="standard"
                name="city"
                // value={formData.city}
                // onChange={handleChange}
              />
              <TextField
                label="Town"
                variant="standard"
                name="town"
                // value={formData.town}
                // onChange={handleChange}
              />
              <TextField
                label="Pincode"
                variant="standard"
                name="pincode"
                // value={formData.pincode}
                // onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Typography>
  );
};

const Step3Form = () => {
  // Implement your form logic for step 3
  return (
    <Typography>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Column */}
          <TextField
            label="IntroMart Business Url"
            variant="standard"
            name="introMartUrl"
            // value={formData.introMartUrl}
            // onChange={handleChange}
          />
          <TextField
            label="Google Business Url"
            variant="standard"
            name="googleBusinessUrl"
            // value={formData.googleBusinessUrl}
            // onChange={handleChange}
          />
          <TextField
            label="Website"
            variant="standard"
            name="website"
            // value={formData.website}
            // onChange={handleChange}
          />

          {/* 2nd Column */}
          <TextField
            label="GST Number"
            variant="standard"
            name="gstNumber"
            // value={formData.gstNumber}
            // onChange={handleChange}
          />
          <TextField
            label="No. of Employees"
            variant="standard"
            name="numberOfEmployees"
            // value={formData.numberOfEmployees}
            // onChange={handleChange}
          />
          <TextField
            label="Year of Establishment"
            variant="standard"
            name="yearOfEstablish"
            // value={formData.yearOfEstablish}
            // onChange={handleChange}
          />
        </div>
      </div>
    </Typography>
  );
};

const Step4Form = () => {
  // Implement your form logic for step 3
  return (
    <Typography>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Column */}
          <TextField
            label="Bank Account Name"
            variant="standard"
            name="introMartUrl"
            // value={formData.introMartUrl}
            // onChange={handleChange}
          />
          <TextField
            label="Bank Acc Type"
            variant="standard"
            name="googleBusinessUrl"
            // value={formData.googleBusinessUrl}
            // onChange={handleChange}
          />
          <TextField
            label="Bank Branch"
            variant="standard"
            name="website"
            // value={formData.website}
            // onChange={handleChange}
          />

          {/* 2nd Column */}
          <TextField
            label="Bank Account No."
            variant="standard"
            name="gstNumber"
            // value={formData.gstNumber}
            // onChange={handleChange}
          />
          <TextField
            label="Bank IFSC Code"
            variant="standard"
            name="numberOfEmployees"
            // value={formData.numberOfEmployees}
            // onChange={handleChange}
          />
        </div>
      </div>
    </Typography>
  );
};
const Step5Form = () => {
  // Implement your form logic for step 3
  return (
    <Typography>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Column */}
          <TextField
            label="Country Logo"
            variant="standard"
            name="introMartUrl"
            // value={formData.introMartUrl}
            // onChange={handleChange}
          />
          <TextField
            label="PAN"
            variant="standard"
            name="googleBusinessUrl"
            // value={formData.googleBusinessUrl}
            // onChange={handleChange}
          />
          <TextField
            label="Business Proof Document"
            variant="standard"
            name="website"
            // value={formData.website}
            // onChange={handleChange}
          />

         
        </div>
      </div>
    </Typography>
  );
};
const Step6Form = () => {
  // Implement your form logic for step 3
  return (
    <Typography>
     Thank you
    </Typography>
  );
};
export default BusinessProfile;
