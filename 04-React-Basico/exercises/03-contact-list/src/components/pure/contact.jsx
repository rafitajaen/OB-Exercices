import React from "react";
import propTypes from "prop-types";
import Contact from "../../models/contact";

const ContactComponent = ({ contact, connect, remove }) => {
  function contactConnectIcon() {
    if (contact.isConnected) {
      return (
        <i
          onClick={() => connect(contact)}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => connect(contact)}
          className="bi-toggle-off task-action"
          style={{ color: "orange" }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">
          {contact.name} {contact.surname}
        </span>
      </th>
      <td className="align-middle">
        <span>{contact.email}</span>
      </td>
      <td
        className="align-middle"
        style={contact.isConnected ? { color: "green" } : { color: "orange" }}
      >
        {contact.isConnected ? "En Línea" : "No Disponible"}
      </td>
      <td className="align-middle">
        {contactConnectIcon()}
        <i
          className="bi-trash task-action"
          style={{ color: "tomato" }}
          onClick={() => remove(contact)}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: propTypes.instanceOf(Contact),
  connect: propTypes.func.isRequired,
  remove: propTypes.func.isRequired,
};

export default ContactComponent;
