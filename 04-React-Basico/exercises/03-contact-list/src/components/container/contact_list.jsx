import React, { useState, useEffect } from "react";
import Contact from "../../models/contact";
import ContactComponent from "../pure/contact";
import ContactForm from "../pure/forms/contactForm";

const ContactListComponent = () => {
  const contact1 = new Contact("Paco", "López", "paco@lopez.com", false);
  const contact2 = new Contact("Laura", "García", "laura@garcia.com", false);
  const contact3 = new Contact("Benito", "Pérez", "benito@perez.com", false);

  // Estado del componente
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Contacts has been modified");

    return () => {
      console.log("ContactListComponent is going to unmount...");
    };
  }, [contacts]);

  // CHange connection of a Contact
  function connectContact(contact) {
    console.log("Change the connection of this Contact:", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].isConnected = !tempContacts[index].isConnected;
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated
    setContacts(tempContacts);
  }

  //Add a Contact
  function addContact(contact) {
    console.log("Adding this Contact:", contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  //Remove a Contact
  function removeContact(contact) {
    console.log("Removing this Contact:", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5> Contactos </h5>
          </div>
          {/* Card Header (title) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      connect={connectContact}
                      remove={removeContact}
                    ></ContactComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactForm add={addContact}></ContactForm>
    </div>
  );
};

export default ContactListComponent;
