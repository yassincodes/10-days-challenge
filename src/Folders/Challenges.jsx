import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../contexts/authContext";
import { dataContext } from "../contexts/dataContext";
import firebase from "../firebase";
import ChooseUsername from "./ChooseUsername";
import RoutesSelector from "../Comps/RoutesSelector";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function Links() {
  // getting the states from context
  const { email, uid, displayName, photoURL } = useContext(authContext);
  const { dataCenter, appData } = useContext(dataContext);

  // storing the uid/name/email/photoURL each time the user sign
  useEffect(() => {
    if (uid && email) {
      firebase
        .database()
        .ref(`${localStorage.getItem("this_uid")}/user_info_section_1`)
        .set({
          uid: uid,
          displayName: appData ? appData[0].displayName : displayName,
          bio: appData ? appData[0].bio : "",

          email: email,
          photoURL: appData ? appData[0].photoURL : photoURL,
        });
    }
  }, [email, uid, displayName, photoURL]);

  ////////
  const startIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-hand-rock"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" />
      <path d="M17 12v-6.5a1.5 1.5 0 0 1 3 0v10.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
      <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
      <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
    </svg>
  );

  const translateIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-language"
      width="33"
      height="33"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5h7" />
      <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
      <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
      <path d="M12 20l4 -9l4 9" />
      <path d="M19.1 18h-6.2" />
    </svg>
  );

  function sendData() {
    appData &&
      firebase
        .database()
        .ref(appData[0].username + "/" + "user_z_finished_tasks" + "/Task1")
        .set("here we are");
  }

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // UI UI UI UI UI UI UI UI UI UI
  if (dataCenter && dataCenter.length == 2) {
    const challengesArray = [
      {
        id: 1,
        color: "red",
        title: "task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, this is a challenge, this is a challenge, this is a challenge, this is a challenge, this is a challenge",
      },
      {
        id: 2,
        color: "rgb(166, 166, 252)",
        title: "task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, this is a challenge, this is a challenge, this is a challenge, this is a challenge, this is a challenge",
      },
    ];
    return (
      <div className="App">
        <div className="twitter_header_container">
          <div className="website_header">the 10 days challenge</div>
        </div>
        <div className="routes-section">
          <Accordion allowMultiple>
            {
              // first one
            }

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AccordionItem
                style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}
              >
                <h2
                  style={{
                    background: "#a2d2ff",
                  }}
                >
                  <AccordionButton style={{ margin: "10px" }}>
                    Task 1 🦥
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    paddingTop: "15px",
                  }}
                >
                  <div>in this task you'll do this and that</div>
                  <div>in this task you'll do "the arabic verse"</div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      style={{ borderRadius: "50px", margin: "5px 5px 5px 0" }}
                      variant="outline"
                    >
                      {translateIcon} see in arabic
                    </Button>
                    <Button
                      style={{ borderRadius: "50px", margin: "5px" }}
                      variant="outline"
                      onClick={() => setIsOpen1(true)}
                    >
                      {startIcon} start challenge
                    </Button>
                  </div>
                </AccordionPanel>

                <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Task 1</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>hi</ModalBody>

                    <ModalFooter
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {appData ? (
                        <Button
                          variant="outline"
                          style={{ borderRadius: "50px" }}
                          onClick={sendData}
                        >
                          send
                        </Button>
                      ) : (
                        "loading icon"
                      )}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </AccordionItem>
            </motion.div>

            {
              // second one
            }

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <AccordionItem
                style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}
              >
                <h2
                  style={{
                    background: "#ffafcc",
                  }}
                >
                  <AccordionButton style={{ margin: "10px" }}>
                    Task 2 🍔
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    paddingTop: "15px",
                  }}
                >
                  <div>in this task you'll do this and that</div>
                  <div>in this task you'll do "the arabic verse"</div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      style={{ borderRadius: "50px", margin: "5px 5px 5px 0" }}
                      variant="outline"
                    >
                      {translateIcon} see in arabic
                    </Button>
                    <Button
                      style={{ borderRadius: "50px", margin: "5px" }}
                      variant="outline"
                      onClick={() => setIsOpen2(true)}
                    >
                      {startIcon} start challenge
                    </Button>
                  </div>
                </AccordionPanel>

                <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Task 1</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>hi</ModalBody>

                    <ModalFooter
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {appData ? (
                        <Button
                          variant="outline"
                          style={{ borderRadius: "50px" }}
                          onClick={sendData}
                        >
                          send
                        </Button>
                      ) : (
                        "loading icon"
                      )}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </AccordionItem>
            </motion.div>

            {
              // third one
            }

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <AccordionItem
                style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}
              >
                <h2
                  style={{
                    background: "#cdb4db",
                  }}
                >
                  <AccordionButton style={{ margin: "10px" }}>
                    Task 3 📖
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "white",
                    paddingTop: "15px",
                  }}
                >
                  <div>in this task you'll do this and that</div>
                  <div>in this task you'll do "the arabic verse"</div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      style={{ borderRadius: "50px", margin: "5px 5px 5px 0" }}
                      variant="outline"
                    >
                      {translateIcon} see in arabic
                    </Button>
                    <Button
                      style={{ borderRadius: "50px", margin: "5px" }}
                      variant="outline"
                      onClick={() => setIsOpen3(true)}
                    >
                      {startIcon} start challenge
                    </Button>
                  </div>
                </AccordionPanel>

                <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Task 1</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>hi</ModalBody>

                    <ModalFooter
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {appData ? (
                        <Button
                          variant="outline"
                          style={{ borderRadius: "50px" }}
                          onClick={sendData}
                        >
                          send
                        </Button>
                      ) : (
                        "loading icon"
                      )}
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </div>
        <div className="routes-selector-section">
          <RoutesSelector />
        </div>
      </div>
    );
  } else if (dataCenter && dataCenter.length == 1) {
    return <ChooseUsername />;
  } else {
    return "todo: loading background should be gray and divided by two";
  }
}

export default Links;
