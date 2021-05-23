import React from "react"
import Title from "../Globals/Title"
import styled from "styled-components"

export default function Contact() {
  return (
    <section className="contact py-3 fade-in">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <FormWrapper>
            <form name="contact" method="POST" netlify>
              <label>
                <div className="field-wrapper">
                  <div>Name:</div>{" "}
                  <div>
                    <input type="text" name="name" />
                  </div>
                </div>
              </label>

              <label>
                <div className="field-wrapper">
                  <div>Email:</div>
                  <div>
                    <input type="email" name="email" />
                  </div>
                </div>
              </label>

              <label>
                <div className="field-wrapper">
                  <div>Message:</div>
                  <div>
                    <textarea name="message"></textarea>
                  </div>
                </div>
              </label>
              <div className="field-wrapper">
                <button type="submit">Send</button>
              </div>
            </form>
          </FormWrapper>
        </div>
      </div>
    </section>
  )
}

const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .field-wrapper {
    display: flex;
    input {
      margin-left: 2em;
      width: 20em;
    }
    textarea {
      margin-left: 0.7em;
      width: 20em;
    }
    button {
      background: var(--mainYellowish);
      border: none;
      padding: 1em;
      &:hover {
        background: var(--mainOffWhite);
      }
    }
  }
`
