import React, { useState } from "react";
import { Avatar, Card, CardContent, Button } from "@mui/material";
import { Container } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import EditContact from "./EditContact";

const Contacts = () => {
  const [openEditContact, setOpenEditContact] = useState(false);
  const [contactData, setContactData] = useState(false);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const Contacts = [
    {
      id: 1,
      name: "John Doe",
      phone: "1234567890",
      alternate: "9876543210",
      email: "aoptufoj@gmail.com",
      address: "1234 Main St",
      company: "Google",
      jobTitle: "Software Engineer",
      notes: "Waste fellow",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "1234567890",
      alternate: "9876543210",
      email: "",
      address: "1234 Main St",
      company: "Google",
      jobTitle: "Software Engineer",
      notes: "Waste fellow",
    },
  ];

  const handleEdit = (contactData) => {
    setContactData(contactData)
    setOpenEditContact(true);
  }

  const renderEditContactsDialog = () => {
    return <EditContact contactData={contactData} open={openEditContact} onClose={handleClose}/>;
  };
  const handleClose = () => {
    setOpenEditContact(false)
  }
  return (
    <div className="px-[12vw]">
      {openEditContact && (renderEditContactsDialog())}
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex flex-col",
        }}
      >
        {Contacts.map((contact, index) => {
          return (
            <Card
              sx={{
                height: "10vh",
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <div className="flex place-items-center w-[40vw]">
                <Avatar {...stringAvatar(contact.name)} className="" />
                <CardContent
                  sx={{
                    fontSize: 24,
                  }}
                >
                  {contact.name}
                </CardContent>
                <CardContent
                  sx={{
                    fontSize: 24,
                  }}
                >
                  {contact.phone}
                </CardContent>
                <CardContent
                  sx={{
                    fontSize: 24,
                  }}
                >
                  {contact.email}
                </CardContent>
              </div>
              <div key={index}>
                <Button onClick={() => handleEdit(contact)}>
                  <EditIcon />
                </Button>
              </div>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default Contacts;
