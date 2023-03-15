/* eslint-disable array-callback-return */
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  TextField,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "../assets/icons/close.svg";
import NameIcon from "../assets/icons/Name.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/mail.svg";
import AddressIcon from "../assets/icons/address.svg";
import CompanyIcon from "../assets/icons/company.svg";
import JobTitleIcon from "../assets/icons/job.svg";
import NotesIcon from "../assets/icons/notes.svg";
import AlternatPhoneIcons from "../assets/icons/Extraphone.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditContact = (props) => {
  const { open, onClose, contactData } = props;
  const [formData, setFormData] = useState(contactData);
  const handleAddContactClose = () => {
    onClose(false);
  };
  const handleSubmit = () => {
    //
  };

  const IconsArray = [
    NameIcon,
    PhoneIcon,
    AlternatPhoneIcons,
    EmailIcon,
    AddressIcon,
    CompanyIcon,
    JobTitleIcon,
    NotesIcon,
  ];

  const placeHolderArray = [
    "Name",
    "Phone",
    "Alternate Phone Number",
    "Email",
    "Address",
    "Company",
    "Job Title",
    "Notes",
  ];

  const handleContactForm = (e, field) => {
    const newData = { ...formData };
    newData[field] = e.target.value;
    setFormData(newData);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAddContactClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        style={{
          borderRadius: "20px",
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="flex justify-center place-items-center v-screen w-full">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "2.3rem",
                color: "#000",
                fontFamily: "fantasy",
              }}
              className="text-center"
            >
              Edit Contact
            </Typography>
          </div>
          <IconButton
            onClick={handleAddContactClose}
            sx={{
              marginLeft: "auto",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <img src={CloseIcon} alt="Close" width={30} />
          </IconButton>
        </DialogTitle>

        <div className="px-[1.8vh] md:px-[7vh]">
          {Object.entries(formData)?.map(([key, value], index) => {
            if (key === "id") return;
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  width: {
                    sm: "100vh",
                    xs: "100%",
                  },
                  marginY: 4,
                  gap: {
                    sm: "1rem",
                    xs: "0.8rem",
                  },
                }}
              >
                <img src={IconsArray[index - 1]} alt="Icon" width={25} />
                <TextField
                  id="input-with-sx"
                  name={key}
                  label={placeHolderArray[index - 1]}
                  variant="standard"
                  value={value}
                  fullWidth
                  onChange={(e) => handleContactForm(e, key)}
                />
              </Box>
            );
          })}
        </div>
        <DialogActions
          sx={{
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            className="w-60 h-12"
            onClick={handleAddContactClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            className="w-60 h-12"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditContact;
