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
  Input,
  Textarea,
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

  function sendTask1Data() {
    appData &&
      firebase
        .database()
        .ref(appData[0].username + "/" + "user_z_finished_tasks" + "/Task1")
        .set("here we are");
  }

  const [isOpen1, setIsOpen1] = useState(false);

  // UI UI UI UI UI UI UI UI UI UI
  if (dataCenter && dataCenter.length == 2) {
    const challengesArray = [
      {
        id: 1,
        emoji: "🦥",
        duration: 0.5,
        color: "rgb(162, 210, 255)",
        english:
          "For this task, we want you to come up with a list of actions that you can take to protect the environment. These actions can be big or small, and can be things you do at home, at school, or in your community. The goal is to think creatively and come up with as many ideas as possible. Remember, every action counts when it comes to protecting the environment. Whether you're making a small change in your own life or working to make a bigger impact in your community, every step we take towards sustainability helps to create a better future for everyone. So let's get creative and come up with some great ideas",
      },
      {
        id: 2,
        emoji: "🔌",
        duration: 0.6,
        color: "rgb(255, 175, 204)", 
        english: (
          <div style={{ marginLeft: "10px" }}>
            <p>
              For this task, you will be asked to take a look at your daily
              habits and identify ways that you can reduce your carbon
              footprint. A carbon footprint is the total amount of greenhouse
              gases (such as carbon dioxide) that are emitted as a result of an
              individual's or an organization's activities. Greenhouse gases
              contribute to climate change by trapping heat in the Earth's
              atmosphere. To complete this task, you can follow these steps:
            </p>
            <ol>
              <li>
                Calculate your carbon footprint using an online carbon footprint
                calculator. There are many different calculators available
                online that can help you estimate your carbon emissions based on
                your lifestyle and the activities you engage in.
              </li>
              <li>
                Identify areas where you can make changes to reduce your carbon
                emissions. For example, you might consider taking public
                transportation or carpooling instead of driving your own car, or
                using energy-efficient appliances and light bulbs in your home.
              </li>
              <li>
                Make a plan to implement these changes in your daily routine.
                You might also consider setting a goal for reducing your carbon
                emissions by a certain percentage within a specific time frame.
              </li>
              <li>
                Track your progress over time and make adjustments as needed to
                continue reducing your carbon footprint.
              </li>
            </ol>
            <p>
              Remember, every little change can make a big impact when it comes
              to protecting the environment. By taking steps to reduce your
              carbon emissions, you can help reduce the negative impacts of
              climate change and contribute to a more sustainable future for
              everyone.
            </p>
          </div>
        ),
      },
      {
        id: 3,
        emoji: "☕",
        color: "rgb(205, 180, 219)",
        duration: 0.7,
        english:
          "For this task, you will be asked to reduce your use of disposable cups and switch to more environmentally-friendly options. Disposable cups, especially plastic cups, contribute significantly to pollution and waste. You can research and choose reusable alternatives such as metal, glass, or ceramic cups and make a plan to switch from disposable cups. Track your progress and share your experience with others to encourage them to also use eco-friendly cups.",
      },
      {
        id: 4,
        duration: 0.8,
        color: "#457b9d",
        english: (
          <div>
            <p>
              For this task, you will be asked to identify an environmental
              issue that you are passionate about and find ways to educate
              others about it. Educating others about environmental issues is an
              important way to raise awareness and encourage others to take
              action to protect the environment.
            </p>
            <ol>
              <li>
                Choose an environmental issue that you are passionate about and
                that you would like to educate others about. Some examples might
                include climate change, pollution, biodiversity loss, or
                resource depletion.
              </li>
              <li>
                Research the issue and gather information about the causes,
                consequences, and potential solutions.
              </li>
              <li>
                Develop a plan for educating others about the issue, such as by
                giving a presentation, writing an article or blog post, or
                creating a social media campaign.
              </li>
              <li>
                Implement your plan and track your progress over time. You might
                also consider setting a goal for how many people you want to
                educate or how much you want to increase awareness of the issue.
              </li>
              <li>
                Reflect on your experience and consider how you can continue to
                educate others about environmental issues in the future.
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: 5,
        duration: 0.9,
        emoji:  "🌲",
        color: "#cce3de",
        english: (
          <div>
            <p>
              For this task, you will be asked to plant trees or other native
              plants in your community or in a local park or green space.
              Planting trees and other native plants is an important way to
              improve the health of the environment and to provide habitat for
              wildlife.
            </p>
            <ol>
              <li>
                Research the types of trees or plants that are native to your
                area and that will thrive in the local climate and soil
                conditions.
              </li>
              <li>
                Choose a location to plant your trees or plants, such as in your
                own yard, in a local park, or along a roadside.
              </li>
              <li>
                Obtain the necessary permission or approvals to plant in the
                chosen location, if necessary.
              </li>
              <li>
                Purchase or obtain the trees or plants and any necessary
                supplies, such as tree guards, mulch, or fertilizers.
              </li>
              <li>
                Plant your trees or plants following best practices for
                watering, fertilizing, and protecting them from pests and
                diseases.
              </li>
              <li>
                Monitor the health of your trees or plants and provide ongoing
                care as needed.
              </li>
              <li>
                Share your experience and any challenges you faced with others
                to encourage them to also plant trees or native plants in their
                community.
              </li>
            </ol>
            <p>
              This task encourages students to take an active role in improving
              the health of their community and the environment, and to learn
              about the benefits of trees and native plants. It also gives them
              the opportunity to develop their gardening skills and to learn
              about the importance of biodiversity.
            </p>
          </div>
        ),
      },
      {
        id: 6,
        color: "#7cb518",
        emoji: "🚰",
        duration: 1,
        english: (
          <div>
            <img src="https://blog.xmp-packaging.com/hubfs/undefined-Oct-21-2020-09-11-08-67-AM.png" />
            <p>
              For this task, you will be asked to reduce your use of single-use
              water bottles and switch to a reusable water bottle. Using
              reusable water bottles is an important way to reduce plastic waste
              and protect the environment.
            </p>
            <ol>
              <li>
                Research the options for reusable water bottles, such as
                materials, sizes, and features.
              </li>
              <li>
                Choose a reusable water bottle that meets your needs and
                preferences.
              </li>
              <li>
                Use your reusable water bottle instead of single-use water
                bottles.
              </li>
              <li>
                Refill your water bottle as needed and take it with you when you
                go out or travel.
              </li>
            </ol>
            <p>
              This task encourages students to take an active role in reducing
              plastic waste and protecting the environment by using reusable
              water bottles instead of single-use bottles. It also gives them
              the opportunity to learn about the options available for reusable
              water bottles and to make informed choices about their use.
            </p>
          </div>
        ),
      },
      {
        id: 7,
        emoji: "🤔",
        color: "#ef233c",
        duration: 1,
        english: (
          <div>
            <p>
              For this task, you will be asked to come up with your own idea for
              an environmental task and implement it in your daily life. The
              goal of this task is to give you the opportunity to take the lead
              and be creative in finding ways to make a positive impact on the
              environment.
            </p>
            <ol>
              <li>
                Think about your daily routine and the ways that you can make a
                positive impact on the environment. Some examples might include
                reducing your energy consumption, reducing your waste,
                conserving water, or using eco-friendly products.
              </li>
              <li>
                Choose an environmental task that you would like to complete and
                make a plan for implementing it. Be as specific as possible in
                your plan and consider setting a goal for how long you want to
                maintain this task.
              </li>
              <li>Implement your plan and track your progress over time.</li>
              <li>
                Reflect on your experience and write a short summary of what you
                did and how it made a positive impact on the environment.
              </li>
            </ol>
            <p>
              This task encourages students to think critically and creatively
              about how they can protect the environment and make a difference
              in their daily lives. It also gives them the opportunity to
              reflect on their actions and consider the impact that they are
              making.
            </p>
          </div>
        ),
      },
    ];
    return (
      <div className="App">
        <div className="twitter_header_container">
          <div className="website_header">the 7 days challenge</div>
        </div>
        <div className="routes-section">
          <Accordion allowMultiple>
            {challengesArray.map((challenge) => {
              return (
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: challenge.duration }}
                
              >
                <AccordionItem
                  style={{ borderTopWidth: "0px", borderBottomWidth: "0px" }}
                >
                  <h2
                    style={{
                      background: challenge.color,
                    }}
                  >
                    <AccordionButton style={{ margin: "10px" }}>
                      Task {challenge.id} {challenge.emoji}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "white",
                      paddingLeft: "25px",

                    }}
                  >
                    {challenge.english}
                    <div
                      style={{
                        display: "flex",
                        marginTop: "10px",
                      }}
                    >
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
                      <ModalBody>
                        <Textarea />
                      </ModalBody>
  
                      <ModalFooter
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {appData ? (
                          <Button
                            variant="outline"
                            style={{ borderRadius: "50px" }}
                            onClick={sendTask1Data}
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
              )
            })}
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
    return <div>loading</div>;
  }
}

export default Links;
