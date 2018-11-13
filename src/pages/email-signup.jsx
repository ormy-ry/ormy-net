import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <div
      className="container"
      style={{ paddingTop: '2rem', paddingBottom: '10rem' }}
    >
      <div className="columns">
        <div className="column" />
        <div className="column">
          <div className="section">
            <form name="signup" method="POST" netlify>
              <input type="hidden" name="form-name" value="signup" style={{display: 'none'}} />
              <div className="field">
                <label className="has-text-grey-light label">Nimi</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="Name" className="input is-dark" type="text" />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="user" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="has-text-grey-light label">Sähköposti</label>
                <div className="control has-icons-left has-icons-right">
                  <input name="Email" className="input is-dark" type="email" />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    name="Agreement"
                    style={{ margin: '0.3rem' }}
                    type="checkbox"
                  />
                  <label className="has-text-grey-light">
                    Ymmärrän, että ÖRMY:n sähköpostilista on rekisteri, joka
                    sisältää henkilötietojani eli etu- ja sukunimeni sekä
                    sähköpostiosoitteeni.
                  </label>
                </div>
              </div>
              <div className="field">
                <div data-netlify-recaptcha />
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="submit"
                    className="button is-dark is-inverted is-outlined"
                  >
                    Tallenna
                  </button>
                </div>
                <div className="control">
                  <a href="/" className="button is-text">
                    Peru
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="column" />
      </div>
    </div>
  )
}
