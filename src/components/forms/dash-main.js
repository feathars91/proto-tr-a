import React from "react";
import './dash.css';
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { Form, Button  } from "react-bootstrap";

import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      message: formState.message
    }
  };

  console.log(data);
  const apiData = await API.post('formapi', '/user', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { name: '', email: '', message: '' };

function updateFormState(key, value) {
  formState[key] = value;
}
//***

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
//const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;




export default () => {
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Sign Up</h2>
<Form>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Form.Label htmlFor="name-input">Your Name</Form.Label>
<Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
                  </InputContainer>
                  <InputContainer>
                    <Form.Label htmlFor="email-input">Your Email Address</Form.Label>
<Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
                  </InputContainer>

                  <InputContainer>
                    <Form.Label htmlFor="name-input">State</Form.Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="state"
                      placeholder="E.g. John Doe"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Form.Label htmlFor="email-input">Country</Form.Label>
                    <Input
                      id="email-input"
                      type="text"
                      name="country"
                      placeholder="E.g. john@mail.com"
                    />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Form.Label htmlFor="name-input">Your Message</Form.Label>
<Form.Control placeholder="Message" onChange={e => updateFormState('message', e.target.value)} />
                  </InputContainer>
                </Column>

                <Column>
                  <InputContainer>
                    <Form.Label htmlFor="name-input">State</Form.Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="state"
                      placeholder="E.g. John Doe"
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <Button onClick={addContact}>Send a message</Button>
            </Form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
