import {
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import AddFriend from "../assets/icons/addFriend.png";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "../assets/icons/close.svg";
import NameIcon from "../assets/icons/Name.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/mail.svg";
import AddressIcon from "../assets/icons/address.svg";
import CompanyIcon from "../assets/icons/company.svg";
import JobTitleIcon from "../assets/icons/job.svg";
import NotesIcon from "../assets/icons/notes.svg";
import AlternatPhoneIcons from "../assets/icons/Extraphone.svg"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddContacts = () => {
  const [addContact, setAddContact] = useState(false);
  const [hovered, setHovered] = useState(false);
  const addContactFileds = [
    {
      id: 1,
      label: "Name",
      required: true,
      icon: NameIcon,
    },
    {
      id: 2,
      label: "Phone",
      required: true,
      icon: PhoneIcon,
    },
    {
        id: 3,
        label: "Alternate Phone Number",
        required: false,
        icon: AlternatPhoneIcons,
    },
    {
      id: 4,
      label: "Email",
      required: false,
      icon: EmailIcon,
    },
    {
      id: 5,
      label: "Address",
      required: false,
      icon: AddressIcon,
    },
    {
      id: 6,
      label: "Company",
      required: false,
      icon: CompanyIcon,
    },
    {
      id: 7,
      label: "Job Title",
      required: false,
      icon: JobTitleIcon,
    },
    {
      id: 8,
      label: "Notes",
      required: false,
      icon: NotesIcon,
    },
  ];

  const completeForm = {};

  const handleContactForm = (e, field, index) => {
    e.preventDefault();
    completeForm[field] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderAddContacts = () => {
    return (
      <Dialog
        open={addContact}
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
              Add Contact
            </Typography>
          </div>
          <IconButton
            onClick={handleAddContactClose}
            sx={{
              marginLeft: "auto",
              display: {
                xs: "none",
                sm: "block",
              }
            }}
          >
            <img src={CloseIcon} alt="Close" width={30}/>
          </IconButton>
        </DialogTitle>

        <div className="px-[1.8vh] md:px-[7vh]">
          {addContactFileds.map((field, index) => {
            return (
              <Box
                key={index}
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
                <img src={field.icon} alt={field.name} width={25} />
                <TextField
                  id="input-with-sx"
                  name={field.label}
                  label={field.label}
                  variant="standard"
                  required={field.required}
                  fullWidth
                  onChange={(e) => handleContactForm(e, field.label, index)}
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
    );
  };
  const handleAddContactClose = () => {
    setAddContact(false);
  };
  const handleAddContacts = () => {
    setAddContact(true);
  };
  return (
    <Container maxWidth="xl">
      <div className="m-[2vh] flex justify-end">
        <Box
          sx={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            display: {
              sm: "none",
              xs: "block",
            },
          }}
        >
          <img src={AddFriend} alt="Add Friend" onClick={handleAddContacts} />
        </Box>
        <Button
          sx={{
            display: {
              sm: "flex",
              xs: "none",
            },
          }}
          variant={hovered ? "contained" : "outlined"}
          color="primary"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          size="large"
          startIcon={<AddCircleOutlineRoundedIcon />}
          onClick={handleAddContacts}
        >
          Add Contacts
        </Button>
      </div>
      {addContact && renderAddContacts()}
    </Container>
  );
};

export default AddContacts;
