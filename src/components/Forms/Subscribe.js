import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import theme from '../../../config/theme'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      <Message
        illustration={PleaseConfirmIllustration}
        title={`Great, one last thing...`}
        body={`I just sent you an email with the confirmation link. 
          **Please check your inbox!**`}
      />
    </div>
  )
}

class SignUp extends React.Component {
  state = {
    submitted: false,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true, loading: true })
    try {
      const email = values['email_address']
      const listFields = { FNAME: values['first_name']}
      const response = await addToMailchimp(email, listFields)      

      this.setState({
        submitted: true,
        loading: false,
        response: response,
        errorMessage: null,
      })
    } catch (error) {
      console.log(error)
      this.setState({
        submitted: false,
        loading: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  render() {
    const { submitted, loading, response, errorMessage } = this.state
    const successful = response && response.status === 'success'

    return (
      <div>
        {!successful && (
          <h2
            css={css`
              margin-bottom: ${rhythm(1)};
              margin-top: 0;
            `}
          >
            Join the Newsletter
          </h2>
        )}

        {!successful && (
          <Formik
            initialValues={{
              email_address: '',
              first_name: '',
            }}
            validationSchema={SubscribeSchema}
            onSubmit={values => this.handleSubmit(values)}
            render={({ errors, touched }) => (
              <Form
                css={css`
                  display: flex;
                  align-items: flex-end;
                  label:not(:first-of-type),
                  button {
                    margin-left: 10px;
                  }
                  .field-error {
                    display: block;
                    //position: absolute;
                    color: ${theme.colors.red};
                    font-size: 80%;
                  }
                  input,
                  label {
                    width: 100%;
                  }
                  ${bpMaxSM} {
                    flex-direction: column;
                    align-items: flex-start;
                    width: auto;
                    label,
                    input {
                      margin: 5px 0 0 0 !important;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                    }
                    button {
                      margin: 20px 0 0 0;
                    }
                  }
                `}
              >
                <label htmlFor="first_name">
                  <div
                    css={css`
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-end;
                    `}
                  >
                    First Name
                    <ErrorMessage
                      name="first_name"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    aria-label="your first name"
                    aria-required="false"
                    name="first_name"
                    placeholder="Tzi"
                    type="text"
                  />
                </label>
                <label htmlFor="email">
                  <div
                    css={css`
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-end;
                    `}
                  >
                    Email
                    <ErrorMessage
                      name="email_address"
                      component="span"
                      className="field-error"
                    />
                  </div>
                  <Field
                    aria-label="your email address"
                    aria-required="true"
                    name="email_address"
                    placeholder="tzi@tzi.cards"
                    type="email"
                  />
                </label>
                <button data-element="submit" type="submit">
                  {!loading && 'Submit'}
                  {loading && 'Submitting...'}
                </button>
              </Form>
            )}
          />
        )}
        {submitted && !loading && <PostSubmissionMessage response={response} />}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    )
  }
}

export default SignUp
