import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RoomLink from 'components/RoomLink'
import {styles} from './styles.module.scss'
import Cookie from 'js-cookie';
import T from 'components/T'

class Settings extends Component {

  handleSoundToggle() {
    this.props.toggleSoundEnabled(!this.props.soundIsEnabled)
  }

  handleLanguageChange(evt) {
    const language = evt.target.value;
    Cookie.set('language', language);
    this.props.setLanguage(language);
  }

  render() {
    return (
      <div className={styles}>
        <section>
          <h4><T path='sound'/></h4>
          <form>
            <div className="form-check">
              <label className="form-check-label" htmlFor="sound-control">
                <input id="sound-control" onChange={this.handleSoundToggle.bind(this)} className="form-check-input" type="checkbox" checked={this.props.soundIsEnabled} />
                <T path='sound'/>
              </label>
            </div>
          </form>
        </section>
        <section>
          <h4 className='mb-3'><T path='copyRoomHeader'/></h4>
          <RoomLink roomId={this.props.roomId} translations={this.props.translations} />
        </section>

        <section>
          <h4 className='mb-3'><T path='languageDropdownHeader'/></h4>
          <p><a href="https://github.com/darkwire/darkwire.io/tree/master/client/src/i18n" target="_blank">Help us translate Darkwire!</a></p>
          <div className="form-group">
            <select value={this.props.language} className="form-control" onChange={this.handleLanguageChange.bind(this)}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </section>

        <section>
          <h4><T path='roomOwnerHeader'/></h4>
          <p><T path='roomOwnerText'/></p>
        </section>
        <section>
          <h4><T path='lockRoomHeader'/></h4>
          <p><T path='lockRoomText'/></p>
        </section>
        <section>
          <h4><T path='slashCommandsHeader'/></h4>
          <p><T path='slashCommandsText'/></p>
          <ul>
            <li>/nick [username] <span className="text-muted"><T path='slashCommandsBullets.0'/></span></li>
            <li>/me [action] <span className="text-muted"><T path='slashCommandsBullets.1'/></span></li>
            <li>/clear <span className="text-muted"><T path='slashCommandsBullets.2'/></span></li>
            <li>/help <span className="text-muted"><T path='slashCommandsBullets.3'/></span></li>
          </ul>
        </section>
      </div>
    )
  }
}

Settings.propTypes = {
  soundIsEnabled: PropTypes.bool.isRequired,
  toggleSoundEnabled: PropTypes.func.isRequired,
  roomId: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
}

export default Settings
